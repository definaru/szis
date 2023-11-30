import * as React from 'react'

const auth = () => {
    if(localStorage.getItem('auth') !== null) {
        return JSON.parse(JSON.stringify(localStorage.getItem('auth')))
    }
    return null
}
const user = JSON.parse(auth())
export type ContextType = any | null;

export const ApiContext = React.createContext<ContextType | null>(user)