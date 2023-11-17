import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Arrays, StartInterface, User, OnlyOneUser, Handbook } from '../../models/Interfaces'


interface GetState {
    data: StartInterface[] | User[] | Arrays[] | OnlyOneUser[] | Handbook[] | any;
    isLoading: boolean;
    isOpen: boolean;
    error: string;
}

const initialState: GetState = {
    data: [],
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
        isLoading(state) {
            state.isLoading = true
        },
        startFetching(state, action: PayloadAction<StartInterface[]>) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        getCurrentUser(state, action: PayloadAction<User[]>) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        getUserOnID(state, action: PayloadAction<OnlyOneUser[]>) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        getAllUsers(state, action: PayloadAction<Arrays[]>) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        getHandbook(state, action: PayloadAction<Handbook[]>) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        deleteHandbook(state, action: PayloadAction<Arrays[]>) {
            state.isLoading = false
            state.error = ''
            state.data = action.payload
        },
        getMessageError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {navMenu} = dataSlice.actions;
export default dataSlice.reducer