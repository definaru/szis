import axios from 'axios'
import { Run } from '../Run'
import { Handbook } from '../../models/Interfaces'
//import { AppDispatch } from '../../store/store'
//import { dataSlice } from '../../store/reducers/DataSlice'


const user = JSON.parse(JSON.stringify(localStorage.getItem('auth')))
const token = JSON.parse(user)

export function PutHandbook(data: Handbook)
{
    const api_uri = Run()
    const { backend_url, preffix } = api_uri[0]
    const url = backend_url+preffix+'book/'+data.id+'/'

    if(data) {
        const Book = async() => {
            try {
                const form = new FormData();
                form.append('rank', data.rank);
                form.append('user', String(token.user_id));
                //form.append('photo', event.files[0], String(data.photo));
                form.append('name', data.name);
                form.append('phone', data.phone);
                form.append('subdivision', data.subdivision);
                form.append('location', data.location);
                form.append('status', String(data.status));

                const responce = await axios.put(url, form, { 
                    headers: {
                        "Content-type": "application/json",
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