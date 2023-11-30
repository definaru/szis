import { configureStore, combineReducers } from '@reduxjs/toolkit'
import materialReducer from './reducers/MaterialSlice'
import startReducer from './reducers/DataSlice'
import authReduser from './reducers/AuthSlice'
//import { authMiddleware } from '../middleware/authMiddleware'


const RootReducer = combineReducers({
    materialReducer,
    startReducer,
    authReduser
})

export const setupStore = () => {
    return configureStore({
        reducer: RootReducer,
        //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
        devTools: process.env.NODE_ENV !== 'production'
    })
}

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']