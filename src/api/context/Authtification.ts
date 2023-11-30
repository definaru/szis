// import { useContext } from "react"
// import { ApiContext } from "../../components/context/ApiContext"

export function Authtification()
{
    //const auth = useContext(ApiContext)
    const user = JSON.parse(JSON.stringify(localStorage.getItem('auth')))
    const token = JSON.parse(user)  
    return token
}