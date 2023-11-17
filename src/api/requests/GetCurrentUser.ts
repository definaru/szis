import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { User, OnlyOneUser } from '../../models/Interfaces'


export const GetCurrentUser = (url: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<User[]>(url)
        dispatch(dataSlice.actions.getCurrentUser(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const GetUserOnID = (url: string, token: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<OnlyOneUser[]>(url, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        dispatch(dataSlice.actions.getUserOnID(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}