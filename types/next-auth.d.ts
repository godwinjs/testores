import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    
    export interface Session {
        user: {
        } & DefaultSession["user"]
    }
}

declare module "next-auth/react" {
    export interface Session {
        user: {
            expires: string;
        } & DefaultSession["user"]
    }
}

/**
 * The shape of the user object returned in the OAuth providers' `profile` callback,
 * or the second parameter of the `session` callback, when using a database.
 */
// interface User {}
/**
 * Usually contains information about the provider being used
 * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
 */
// interface Account {}
/** The OAuth profile returned from your provider */
// interface Profile {}