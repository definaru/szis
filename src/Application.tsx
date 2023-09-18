import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store'
import App from './App'


export default function Application() 
{
    const store = setupStore()
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider> 
    )
}