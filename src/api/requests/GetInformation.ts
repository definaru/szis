import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { Arrays } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'


const auth = Authtification()

export const GetInformation = () => async(dispatch: AppDispatch) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/information/?format=json`
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<Arrays[]>(url, {
            headers: {
                'Authorization': `Token ${auth.token}`
            }
        })
        dispatch(dataSlice.actions.getInfoSend(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const DeleteInformation = (id: string) => async(dispatch: AppDispatch) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/information/${id}/`
        const responce = await axios.delete<Arrays[]>(url, {
            headers: {
                'Authorization': `Token ${auth.token}`
            }
        })
        dispatch(dataSlice.actions.getInfoSend(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}