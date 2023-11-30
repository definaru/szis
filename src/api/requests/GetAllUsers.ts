import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { Arrays } from '../../models/Interfaces'
import { Authtification } from '../context/Authtification'


const auth = Authtification()

export const GetAllUsers = () => async(dispatch: AppDispatch) => {
    try {        
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/users/`
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<Arrays[]>(url, {
            headers: {
                'Authorization': `Token ${auth.token}`
            }
        })
        dispatch(dataSlice.actions.getAllUsers(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}