import axios from 'axios'
import { Handbook } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'


export function PostHandbook(data: Handbook, image: string | any)
{
    const auth = Authtification()
    const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/book/`
    console.log('Authtification:', auth)
    console.table(data, {...image, url})
    if(data) {
        const Book = async() => {
            try {
                const form = new FormData();
                form.append('rank', data.rank);
                form.append('user', String(auth.user_id));
                //image && form.append('photo', image); // data.photo
                form.append('name', data.name);
                form.append('phone', data.phone);
                form.append('division', data.division);
                form.append('location', data.location);
                form.append('status', String(data.status));

                const responce = await axios.post(url, form, { 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data charset=UTF-8',
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