import { Route, Routes } from 'react-router-dom'
import { PublicRouter } from '../components/data/PublicRouter'


export default function Public() {
    return (
        <Routes>
            {PublicRouter().map((item, idx) => (
                <Route key={idx} path={item.path} element={<item.element />} />
            ))}
        </Routes>      
    )
}
