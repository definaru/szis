import React, { useEffect } from 'react'
import { Gerb, Guard } from '../ui/logo/images'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardActions, AppBar, Container } from '@mui/material'
import contents from '../styles/AuthLayout.module.css'

interface Layout {
    children: React.ReactNode;
    title?: string;
}


export function AuthLayout({children, title = 'Loading...'}: Layout) {
    useEffect(() => {
        document.title = title
    }, [])

    return (
        <div className={`${contents.app} ${contents['bg-image']}`}>
            <AppBar color="transparent" position="fixed" className={contents.nav}>
                <div className={contents.header}>
                    <Link to="/"><Gerb /></Link>
                    <Link to="/"><Guard /></Link>
                    <div className={contents.wrapper}>
                        <p className={contents['sub-text']}>Система задействования информационных сообщений</p>
                        <h3>СИСТЕМА ИНФОРМИРОВАНИЯ</h3>
                    </div>                      
                </div>
            </AppBar>
            <Container maxWidth="md">
                <Card className={contents.card}>
                    <CardContent className={contents['bg-primary']}>
                        {children}
                    </CardContent>
                    <CardActions className={`${contents['bg-dark-primary']} ${contents['flex-center']}`}>
                        <p className={contents['footer-title']}>
                            Служба технической поддержки: &#160;
                            <a href="tel:84951919289">8(495)-19-19-289</a>,&#160;
                            <a href="mailto:techhelp@impercomm.ru">techhelp@impercomm.ru</a>
                        </p>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}