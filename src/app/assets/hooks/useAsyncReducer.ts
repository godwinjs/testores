import React from 'react';

function returnAsyncDispatch(dispatch: any) {
    return async (action: any) => {
      if (typeof action === "function") {
        await action(dispatch); // Pass dispatch to the async function
      } else {
        dispatch(action); // Handle synchronous actions
      }
    };
}

export const useAsyncReducer = ( reducer: any, initialState: any = {}) => {
    const [ value, baseDispatch ] = React.useReducer( reducer , initialState )
    const dispatch: any = returnAsyncDispatch(baseDispatch)

    return [
        value,
        (e: any) => {
            dispatch(e)
        }
    ]
}