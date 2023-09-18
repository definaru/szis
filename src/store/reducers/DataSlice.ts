import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Characters } from '../../models/Users'
import { IData } from '../../models/IData'


interface UserState {
    users: Characters[] | IData[];
    isLoading: boolean;
    isOpen: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    isOpen: false,
    error: ''
}

export const dataSlice = createSlice({
    name: 'safety',
    initialState,
    reducers: {
        navMenu(state) {
            state.isOpen = !state.isOpen;
        },
        userLoading(state) {
            state.isLoading = true
        },
        userFetching(state, action: PayloadAction<Characters[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        charactersFetching(state, action: PayloadAction<IData[]>) {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        getMessageError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {navMenu} = dataSlice.actions;
export default dataSlice.reducer