import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { Gerb, Guard } from '../ui/logo/images'
import { Card, CardContent, CardActions, AppBar, Container, Box, Alert } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { LoadingButtons } from '../ui/button/LoadingButton'
import { GetHome } from '../../api/requests/GetHome'
import contents from '../styles/AuthLayout.module.css'


interface Layout {
    children: React.ReactNode;
    title?: string;
}

export function AuthLayout({children, title = 'Loading...'}: Layout) {

    const dispatch = useAppDispatch()
    const { data, isLoading, error } = useAppSelector(state => state.startReducer)
    const { name, description, version, support }: any = data

    useEffect(() => {
        document.title = title
    }, [])

    useEffect(() => {
        dispatch(GetHome())
    }, [])

    return (
        <div className={`${contents.app} ${contents['bg-image']}`}>
            {error ? 
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Alert severity="error">{error}</Alert>
            </Box> : 
            <>          
                <AppBar color="transparent" position="fixed" className={contents.nav}>
                    <div className={contents.header}>
                        <Link to="/"><Gerb /></Link>
                        <Link to="/"><Guard /></Link>
                        <div className={contents.wrapper}>
                            <p className={contents['sub-text']}>{description}</p>
                            <h3>{name}</h3>
                        </div>                      
                    </div>
                </AppBar>
                {isLoading ? 
                    <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                        <div><LoadingButtons /></div>
                    </Box> :
                    <Container maxWidth="md">
                        <Card className={contents.card}>
                            <CardContent className={contents['bg-primary']}>
                                {children}
                            </CardContent>
                            <CardActions sx={{py: 2}} className={`${contents['bg-dark-primary']} ${contents['flex-center']}`}>
                                {support &&
                                    <p className={contents['footer-title']}>
                                        {support.text}: &#160;
                                        <a href={`tel:${support.phone}`}>{support.phone}</a>,&#160;
                                        <a href={`mailto:${support.email}`}>{support.email}</a>
                                    </p>                            
                                }
                                <small className={contents['footer-title']}>&#160; Версия: {version}</small> 
                            </CardActions>
                        </Card>
                    </Container>                      
                }
            </>}
        </div>
    )
}