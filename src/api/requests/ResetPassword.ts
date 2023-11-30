import axios from 'axios'
import { Inputs } from '../../components/ui/modal/ModalResetPassword'

export function ResetPassword(data: Inputs)
{
    if(data) {
        const Password = async() => {
            try {
                const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/reset/password`
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