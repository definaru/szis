import axios from 'axios'
import { Inputs } from '../../components/views/Home'
import { Run } from '../Run'


export function GetAuthUser(data: Inputs)
{
    const api_uri = Run()
    const { backend_url, preffix } = api_uri[0]
    const url = backend_url+preffix+'token/auth/'
    if(data) {
        //console.log('From Form:', data) 
        const Auth = async() => {
            try {
                const form = new FormData();
                form.append('username', data.email);
                form.append('password', data.password);

                const responce = await axios.post(url, form, { 
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                localStorage.setItem('auth', JSON.stringify(responce.data))
                return await responce.data
            } catch (error: any) {
                return {
                    error: true,
                    message: 'Логин или пароль введён не верно!',
                    raw: error.message
                }
            }    
        }
        return Auth()        
    }
}