import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { Arrays } from '../../models/Interfaces'


export const GetAllUsers = (url: string, token: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<Arrays[]>(url, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        dispatch(dataSlice.actions.getAllUsers(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}