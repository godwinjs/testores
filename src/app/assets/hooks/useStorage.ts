import React from 'react';

export const useStorage = ( initialState: any = {} ) => {

    const [ value, setValue ] = React.useState( initialState )

    let storage: any;

      

    return [
        value,
        (crud, key = '', data = {} ) => {
            const localStorage = globalThis.localStorage;
            
            switch(crud){
                case 'set':
                    storage = (() => {
                        localStorage.setItem(key, JSON.stringify(data))
                        const storedValue = localStorage.getItem(key)
                        return storedValue ? JSON.parse(storedValue) : value;
                    })()
                    setValue(storage)
                    return storage
                case 'get':
                    storage = (() => {
                        const storedValue = localStorage.getItem(key)
                        return storedValue ? JSON.parse(storedValue) : value;
                    })()
                    setValue(storage)
                    return storage
                case 'update':
                    storage = (() => {
                        const existingValue = localStorage.getItem(key) as any;
                        if (!existingValue) {
                        console.error(`Item with key "${key}" does not exist.`);
                        return;
                        }
                        const newValue = { ...existingValue, ...data };
                        localStorage.setItem(key, newValue);
                        const updatedValue = localStorage.getItem(key);
                        return updatedValue ? JSON.parse(updatedValue) : value;
                    })()
                    setValue(storage)
                    return storage
                case 'delete':
                    storage = (() => {
                        localStorage.removeItem(key);
                        return value
                    })()
                    setValue(storage)
                    return storage
                case 'clear':
                    storage = (() => {
                        localStorage.clear()
                        return value
                    })()
                    setValue(storage)
                    return storage
                default:
                    storage = (() => {
                        return Object.keys(localStorage).reduce((result: any, key) => {
                            result[key] = localStorage.getItem(key);
                            return result;
                        }, {})
                    })()
                    setValue(storage )
                    return storage
            }

            
        }
    ] as [ any, ( crud: 'set' | 'get' | 'update' | 'delete' | 'list' | 'clear', key: string, data?: any ) => any ]
}