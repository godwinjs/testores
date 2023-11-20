"use client";

import React from "react";
import { SessionProvider} from "next-auth/react";

const AuthProvider = ({ ...props }: { children: React.ReactNode, session?: any } ) => {
    return (<SessionProvider>{props.children}</SessionProvider>);
}
// const AuthProvider = ({ children, ...props }: { children: React.ReactNode, session: any } ) => {
//     return (<SessionProvider session={props.session} >{children}</SessionProvider>);
// }
export default AuthProvider;