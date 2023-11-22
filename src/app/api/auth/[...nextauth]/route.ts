import NextAuth from "next-auth";
// import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

import User from '@/app/db/models/User';
import connect from "@/app/db/utils/connect";

export const authOptions = {
    // 
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
                        console.log(user)
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
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}