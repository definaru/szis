import axios from 'axios'
import { Inform } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'

export function PutInformation(data: Inform) 
{
    const auth = Authtification()
    const address = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}`
    const url = `${address}/information/${data.id}/`
    if(data) {
        const Information = async() => {
            try {
                const form = new FormData()
                form.append('user', `${address}/users/${auth.user_id}/`)
                form.append('datetime', String(data.datetime))
                form.append('name', data.name)
                form.append('script', data.script)
                form.append('message', data.message)
                form.append('method', data.method)
                form.append('caller', String(data.caller))

                const responce = await axios.put(url, form, { 
                    headers: {
                        "Content-type": "application/json",
                        'Authorization': `Token ${auth.token}`
                    }
                })
                return await responce.data
            } catch (error: any) {
                return {
                    error: true,
                    message: 'Ошибка!',
                    raw: error.message
                }
            }    
        }
        return Information()   
    }
}