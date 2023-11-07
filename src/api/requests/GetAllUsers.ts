import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { Arrays } from '../../models/Interfaces'


export const GetAllUsers = (url: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.isLoading())
        // var headers = new Headers();
        // headers.append("Authorization", "Token 1622c816ff7fa1d856bea14d8297eec1ff85917a");
        const responce = await axios.get<Arrays[]>(url, {
            headers: {
                'Authorization': 'Token 1622c816ff7fa1d856bea14d8297eec1ff85917a'
            }
        })
        dispatch(dataSlice.actions.getAllUsers(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}