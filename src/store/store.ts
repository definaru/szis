import { configureStore, combineReducers } from '@reduxjs/toolkit'
import startReducer from './reducers/DataSlice'

const RootReducer = combineReducers({
    startReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: RootReducer,
    })
}

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']