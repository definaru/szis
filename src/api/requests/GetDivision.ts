import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { MaterialState, materialSlice } from '../../store/reducers/MaterialSlice'


export const GetDivision = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(materialSlice.actions.isLoading())
        const url = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/subdivision/`
        const responce = await axios.get<MaterialState[]>(url, {
            headers: {
                "Content-type": "application/json"
            }
        })
        dispatch(materialSlice.actions.getDivisions(responce.data))
    } catch (e: any) {
        dispatch(materialSlice.actions.getMessageError(e.message))
    }
}