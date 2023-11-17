import { UserState } from "../store/reducers/AuthSlice"

export const authMiddleware = (store: any) => (next: (arg0: any) => any) => (action: UserState) => {
    // const { data } = useAppSelector((state) => state.authReduser)
    const auth = JSON.stringify(localStorage.getItem('auth'))
    // dispatch(isAuthenticated(JSON.parse(auth)))
    //const test = isAuthenticated.match(action.data = JSON.parse(auth))
    //const authState = store.getState()
    //.AuthSlice.isAuthenticated
    //const cur_type = action.type?.startsWith('auth/')
    //console.log('test:', test)
    console.log('store:', store)
    console.log('action:', action)
    //console.log('authState:', authState)
    //console.log('Current Type:', cur_type)
    
    console.table('authMiddleware', JSON.parse(auth))
    return next(action);
}