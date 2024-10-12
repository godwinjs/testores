"use client"

import React from 'react';
import { notFound } from "next/navigation";
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import axios from 'axios';

const VerifyEmail: React.FC  = (props: any) => {
    const { searchParams } = props;

    console.log(searchParams)

    const [ token ] = React.useState(searchParams.token)
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(null)

    const router = useRouter();

    React.useLayoutEffect(() => {
        if(token){
            axios.post("/api/verify/verify-email", {token}).then((response) => {
                setLoading(false)
                console.log(response)
            }).catch((err) => {
                setError(err)
            })
        }else{
            notFound()
        }
    }, [token])

    const handleContinue = () => {
        router.push("/account")
    }

    const VerificationSuccess = () => {
        if(error){
            return <h1>Error verifying email: {error}</h1>
        }
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Email Verified!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for verifying your email. You can now proceed to your account.
              </p>
              <button
                onClick={handleContinue}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Continue to Dashboard
              </button>
            </div>
          </div>
        )
    }

    
    
    return (
        <>
            {loading ? <h1>Loading...</h1> : VerificationSuccess() }
        </>
    )

}

export default VerifyEmail;