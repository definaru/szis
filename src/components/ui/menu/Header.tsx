import { Exit } from '../icons/uiKit'
import { Guard } from '../logo/images'
import { GetMenu } from '../../data/GetMenu'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { navMenu } from '../../../store/reducers/DataSlice'
import contents from '../../styles/MainLayout.module.css'


export function Header()
{
    const menu = GetMenu()
    const nav = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isOpen} = useAppSelector((state) => state.startReducer)
    const wrapper = isOpen ? 'justify-content-start' : 'justify-content-center'
    const [isAuth, setIsAuth] = useState<boolean>(false)

    //useEffect(() => {
        if(isAuth) {
            localStorage.removeItem("auth")
            setTimeout(() => navigate("/"), 500)
        }
    //}, [])

    return (
        <div style={{height: '100vh', position: 'relative', zIndex: 10 }}>
            <div className={`${contents.menu} ${contents[wrapper]}`}>
                <ul>
                    <li style={{justifyContent: 'center'}} onClick={() => dispatch(navMenu())}>
                        <Guard size='100' />
                    </li>
                    {menu.map((item, i) => (
                        <li key={i} className={nav.pathname === item.url ? contents.active : ''}>
                            <Link to={item.url}>
                                <item.icon />
                                {isOpen && <span>{item.name}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul style={{padding: '20px 0'}}>
                    <li>
                        <a onClick={() => setIsAuth(true)} style={{cursor: 'pointer'}}>
                            <Exit />
                            {isOpen && <span style={{color: '#7C7C7C'}}>Выход</span>}
                        </a>                        
                    </li>
                </ul>            
            </div>            
        </div>
    )
}
