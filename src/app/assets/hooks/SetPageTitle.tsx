"use client"

import React from "react";

export default function SetPageTitle({ title } : { title: string }){

    React.useEffect(() => {
        document.title = title;
    }, [title])

    return null;
}   
