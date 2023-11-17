import { Box, Alert } from '@mui/material'
import { Header } from '../ui/menu/Header'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Authenticated, isAuthenticated } from '../../store/reducers/AuthSlice'
import contents from '../styles/MainLayout.module.css'


interface Layout {
    children: React.ReactNode;
    title?: string;
}

export function MainLayout({children, title = 'Loading...'}: Layout) 
{
    const { login, isAuth, error } = useAppSelector((state) => state.authReduser)
    const { isOpen } = useAppSelector((state) => state.startReducer)
    const [currentuser, setCurrenuser] = useState<Authenticated[] | null>(null)
    const auth = JSON.parse(JSON.stringify(localStorage.getItem('auth')))
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        document.title = title
        setCurrenuser(auth)
        if(currentuser) {
            dispatch(isAuthenticated(currentuser))
        }
    }, [title, currentuser])

    const switcher = isOpen ? '293px 1fr' : '140px 1fr'

    return (
        <div className={contents.app}>
            <Box sx={{ display: 'grid', gridTemplateColumns: switcher, height: '100%', transition: 'all 0.5s ease 0s' }}>
                <Header />
                <article className={contents.header}>
                    <Box sx={{width: '96%', height: '100%', margin: 'auto'}}>
                        <Box sx={{ pt: 3, pb: 20 }}>
                            {error && <Alert severity="error">{error}</Alert>}
                            {children}
                            {/* <pre>{JSON.stringify(JSON.parse(login), null, 4)}</pre> 
                            <pre>{JSON.stringify(isAuth, null, 4)}</pre> */}
                        </Box>
                    </Box>     
                </article>
            </Box>
        </div>
    )
}