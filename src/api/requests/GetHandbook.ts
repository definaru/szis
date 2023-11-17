import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { Handbook } from '../../models/Interfaces'
import { Run } from '../Run'


const user = JSON.parse(JSON.stringify(localStorage.getItem('auth')))
const token = JSON.parse(user)    
const api_uri = Run()
const { backend_url, preffix } = api_uri[0]

export const GetHandbook = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.isLoading())
        const url = `${backend_url}${preffix}book/`
        const responce = await axios.get<Handbook[]>(url, {
            headers: {
                "Content-type": "application/json",
                'Authorization': `Token ${token.token}`
            }
        })
        dispatch(dataSlice.actions.getHandbook(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const DeleteHandbook = (id: string) => async(dispatch: AppDispatch) => {
    try {    
        const url = `${backend_url}${preffix}book/${id}/`
        const responce = await axios.delete<Handbook[]>(url, {
            headers: {
                "Content-type": "application/json",
                'Authorization': `Token ${token.token}`
            }
        })
        dispatch(dataSlice.actions.getHandbook(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}