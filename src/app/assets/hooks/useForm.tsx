import React from 'react';

export const useForm = (initialState: any = {}) => {
    const [ formValues, setFormValues ] = React.useState(initialState)

    return [
        formValues,
        (e: any) => {
            setFormValues( {
                ...formValues,
                [e.target.name]: e.target.value
            })
        }
    ]
}