import axios from 'axios'
import { Handbook } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'


export function PutHandbook(data: Handbook)
{
    const auth = Authtification()
    const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/book/${data.id}/`
    if(data) {
        const Book = async() => {
            try {
                const form = new FormData();
                form.append('rank', data.rank);
                form.append('user', String(auth.user_id));
                //form.append('photo', event.files[0], String(data.photo));
                form.append('name', data.name);
                form.append('phone', data.phone);
                form.append('division', data.division);
                form.append('location', data.location);
                form.append('status', String(data.status));

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
        return Book()    
    }
}