import axios from 'axios'
import { Run } from '../Run'
import { Handbook } from '../../models/Interfaces'


const user = JSON.parse(JSON.stringify(localStorage.getItem('auth')))
const token = JSON.parse(user)

export function PostHandbook(data: Handbook, image: string | any)
{
    const api_uri = Run()
    const { backend_url, preffix } = api_uri[0]
    const url = backend_url+preffix+'book/'

    if(data) {
        const Book = async() => {
            try {
                const form = new FormData();
                form.append('rank', data.rank);
                form.append('user', String(token.user_id));
                form.append('photo', image); // data.photo
                form.append('name', data.name);
                form.append('phone', data.phone);
                form.append('subdivision', data.subdivision);
                form.append('location', data.location);
                form.append('status', String(data.status));

                const responce = await axios.post(url, form, { 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data charset=UTF-8',
                        'Authorization': `Token ${token.token}`
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
        return Book()    
    }
}