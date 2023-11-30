import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { dataSlice } from '../../store/reducers/DataSlice'
import { StartInterface } from '../../models/Interfaces'


export const GetHome = () => async(dispatch: AppDispatch) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}`
        dispatch(dataSlice.actions.isLoading())
        const responce = await axios.get<StartInterface[]>(url)
        dispatch(dataSlice.actions.startFetching(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}