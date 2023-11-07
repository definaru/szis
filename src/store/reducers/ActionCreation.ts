import axios from 'axios'
import { IData } from '../../models/IData'
import { Characters } from '../../models/Interfaces'
import { AppDispatch } from '../store'
import { dataSlice } from './DataSlice'



export const fetchUsers = (url: string) => async(dispatch: AppDispatch) => {

    try {
        //dispatch(dataSlice.actions.userLoading())
        const responce = await axios.get<Characters[]>(url)
        //dispatch(dataSlice.actions.userFetching(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }

}

export const fetchOneCharacters = (name: string | undefined) => async(dispatch: AppDispatch) => {

    try {
        //dispatch(dataSlice.actions.userLoading())
        const responce = await axios.get<IData[]>(`https://swapi.dev/api/people/?search=${name}&format=json`)
        //dispatch(dataSlice.actions.charactersFetching(responce.data))
    } catch (e: any) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }

}