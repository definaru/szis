import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Header } from '../ui/menu/Header'
import { useAppSelector } from '../../hooks/redux'
import { ApiContext } from '../context/ApiContext'
import contents from '../styles/MainLayout.module.css'


interface Layout {
    children: React.ReactNode;
    title?: string;
}

export function MainLayout({children, title = 'Loading...'}: Layout) 
{
    const { isOpen } = useAppSelector((state) => state.startReducer)
    const auth = JSON.parse(JSON.stringify(localStorage.getItem('auth')))
    
    useEffect(() => {
        document.title = title
    }, [title])

    const switcher = isOpen ? '293px 1fr' : '140px 1fr'

    return (
        <ApiContext.Provider value={auth}>
            <div className={contents.app}>
                <Box sx={{ display: 'grid', gridTemplateColumns: switcher, height: '100%', transition: 'all 0.5s ease 0s' }}>
                    <Header />
                    <article className={contents.header}>
                        <Box sx={{width: '96%', height: '100%', margin: 'auto'}}>
                            <Box sx={{ pt: 3, pb: 20 }}>
                                {/* {error && <Alert severity="error">{error}</Alert>} */}
                                {children}
                            </Box>
                        </Box>     
                    </article>
                </Box>
            </div>
        </ApiContext.Provider>
    )
}