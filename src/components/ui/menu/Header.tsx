import { Exit } from '../icons/uiKit'
import { Guard } from '../logo/images'
import { GetMenu } from '../../data/GetMenu'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { navMenu } from '../../../store/reducers/DataSlice'
import contents from '../../styles/MainLayout.module.css'


export function Header()
{
    const menu = GetMenu()
    const nav = useLocation()
    const dispatch = useAppDispatch()
    const {isOpen} = useAppSelector((state) => state.userReducer)
    const wrapper = isOpen ? 'justify-content-start' : 'justify-content-center'

    return (
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
                    <Link to="/">
                        <Exit />
                        {isOpen && <span style={{color: '#7C7C7C'}}>Выход</span>}
                    </Link>                        
                </li>
            </ul>            
        </div>
    )
}
