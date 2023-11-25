"use client"
import { persistor } from "@/app/redux/store";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/lib/integration/react";


const AuthProvider = ({ ...props }: { children: React.ReactNode, session: any } ) => {
    return (
        <SessionProvider session={props.session} >
            <PersistGate persistor={persistor}>
                {props.children}
            </PersistGate>
        </SessionProvider>
        );
}
// const AuthProvider = ({ children, ...props }: { children: React.ReactNode, session: any } ) => {
//     return (<SessionProvider session={props.session} >{children}</SessionProvider>);
// }
export default AuthProvider;