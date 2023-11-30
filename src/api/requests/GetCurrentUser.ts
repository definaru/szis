import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { OnlyOneUser } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'

const auth = Authtification()

export const GetUserOnID = () => async(dispatch: AppDispatch) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/users/${auth.user_id}`
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<OnlyOneUser[]>(url, {
            headers: {
                'Authorization': `Token ${auth.token}`
            }
        })
        dispatch(dataSlice.actions.getUserOnID(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}