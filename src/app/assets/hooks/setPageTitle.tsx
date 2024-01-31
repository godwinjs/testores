import React from "react";

export default function setPageTitle({ title } : { title: string }){

    React.useEffect(() => {
        document.title = title;
    }, [title])

    return null;
}   