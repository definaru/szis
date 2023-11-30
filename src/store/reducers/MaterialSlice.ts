import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Inform } from '../../models/Interfaces';

export interface MaterialState {
    res: any;
    isLoading: boolean;
    error: string;
}

const initialState: MaterialState = {
    res: [],
    isLoading: false,
    error: ''
}

export const materialSlice = createSlice({
    name: 'material',
    initialState,
    reducers: {
        isLoading(state) {
            state.isLoading = true
        },
        getDivisions(state, action: PayloadAction<MaterialState[]>) {
            state.isLoading = false
            state.error = ''
            state.res = action.payload
        },
        getSendMts(state, action: PayloadAction<Inform[]>) {
            state.isLoading = false
            state.error = ''
            state.res = action.payload
        },
        getMessageError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

// export const { isAuthenticated, logout } = materialSlice.actions;
export default materialSlice.reducer