import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { Handbook } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'

const auth = Authtification()

export const GetHandbook = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.isLoading())
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/book/`
        const responce = await axios.get<Handbook[]>(url, {
            headers: {
                "Content-type": "application/json",
                'Authorization': `Token ${auth.token}`
            }
        })
        dispatch(dataSlice.actions.getHandbook(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const DeleteHandbook = (id: string) => async(dispatch: AppDispatch) => {
    try {    
        const url = `${process.env.REACT_APP_BASE_URL}/book/${id}/`
        const responce = await axios.delete<Handbook[]>(url, {
            headers: {
                "Content-type": "application/json",
                'Authorization': `Token ${auth.token}`
            }
        })
        dispatch(dataSlice.actions.getHandbook(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}