import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Authenticated {
    token: string;
    user_id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
}
export interface UserState {
    login: Authenticated[] | null | any;
    isAuth: boolean;
    error: string;
}

const initialState: UserState = {
    login: null,
    isAuth: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        isAuthenticated(state, action: PayloadAction<Authenticated[]>) {
            state.isAuth = true
            state.error = ''
            state.login = action.payload
        },
        logout(state) {
            state.isAuth = false
            state.error = 'Пользователь не авторизован'
            state.login = null
        }
    }
})

export const { isAuthenticated, logout } = userSlice.actions;
export default userSlice.reducer