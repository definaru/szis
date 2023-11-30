import axios from 'axios'
import { Inputs } from '../../components/views/Home'


export function GetAuthUser(data: Inputs)
{
    const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/token/auth/`
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