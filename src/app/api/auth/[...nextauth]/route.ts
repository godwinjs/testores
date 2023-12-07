import NextAuth, { NextAuthOptions } from "next-auth";
// import { getServerSession } from "next-auth/next";
import { Account, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
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
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        // authorization: {
        //     params: {
        //       prompt: "consent",
        //       access_type: "offline",
        //       response_type: "code"
        //     }
        // }
        }),
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials }: any): Promise<boolean> {
            // console.log({user: user, account: account, profile: profile, email: email, credentials: credentials})
            if(account?.provider == "credentials"){
                return true;
            }
            //http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Flogin this  really LOL :)
            if(account?.provider == "google"){
                // profile.email_verified: boolean = true //.given_name//.family_name
                // profile.locale: string = 'en'
                await connect();
                const existingUser: any = await User.findOne({email: user.email});
        
                if(!(existingUser === null)){
                    console.log("User Exists")
                    return true;
                }
                const newUser = new User({
                    fullName: profile.name,
                    email: user.email,
                    password: '',
                    dob: '',
                    address: '',
                    phone: '',
                    gender: '',
                    image: profile.picture,
                    roles: '',
                    about: '',
                })
                try{
                    await newUser.save();
                    return true;
    
                }catch(err){
                    console.log("Error saving user", err)
                    return false;
                }

            }
            return true;
        },
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
                session.user.dob = user.dob;
                session.user.phone = user.phone;
                session.user.gender = user.gender;
                session.user.address = user.address;
                session.user.image = user.image
            } catch (err: any){
                throw new Error(err); 
            }
            
            return session
        },
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST} 