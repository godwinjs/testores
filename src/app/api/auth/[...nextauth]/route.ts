import NextAuth, { NextAuthOptions } from "next-auth";
// import { getServerSession } from "next-auth/next";
// import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

import User from '@/app/db/models/User';
import connect from "@/app/db/utils/connect";


const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any) {
                await connect();
                const {email, password } = credentials;

                try {
                    const user: any = await User.findOne({email: email});
                    
                    if(user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            password,
                            user.password
                        )
                        if(isPasswordCorrect) {
                            return user;
                        }
                    }

                } catch (err: any){
                    throw new Error(err);
                }
            }
        }),
        GithubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ...more providers
    ],
    callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token
          }
          return token
        },
        async session({ session, token, user}: any) {
            session.accessToken = token.accessToken;
            
            try {
                user = await User.findOne({email: session.user.email});

                session.user.fullName = user.fullName;
                session.user.joined = user.createdAt;
                session.user.lastUpdate = user.updatedAt;
                session.user.id = user.id;
            } catch (err: any){
                throw new Error(err);
            }
            
            return session
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST} 