import axios from 'axios'
import { Inputs } from '../../components/ui/modal/ModalResetPassword'
import { Run } from '../Run'


export function ResetPassword(data: Inputs)
{
    const api_uri = Run()
    const { backend_url, preffix } = api_uri[0]
    const url = backend_url+preffix+'reset/password'
    if(data) {
        const Password = async() => {
            try {
                const form = new FormData()
                form.append('email', data.email)

                const responce = await axios.post(url, form, { 
                    headers: {
                        "Content-type": "application/json"
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
        return Password()        
    }
}