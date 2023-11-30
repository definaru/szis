import axios from 'axios'
import { AppDispatch } from '../../store/store'
import { materialSlice } from '../../store/reducers/MaterialSlice'
import { Inform } from '../../models/Interfaces'


export const GetInfoSendMTS = (phones: number[], message: string) => async(dispatch: AppDispatch) => {
    try {
        dispatch(materialSlice.actions.isLoading())
        const url = 'http://45.146.228.25:8088/api/v1/mts'
        //`${process.env.REACT_APP_BASE_URL}/mts`
        const debug = {
            message: message,
            phones: phones
        }
        var data = {
            "phones": phones,
            "message": message
        }
        const responce = await axios.post<Inform[]>(url, {
            headers: {
                "Content-type": "application/json"
            },
            data: data // body raw json
        })
        console.log('Debug:', debug)
        dispatch(materialSlice.actions.getSendMts(responce.data))
    } catch (e: any) {
        dispatch(materialSlice.actions.getMessageError(e.message))
    }
}