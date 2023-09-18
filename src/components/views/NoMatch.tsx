import { NavLink } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Typography, Button } from '@mui/material'
import contents from '../styles/MainLayout.module.css'


export function NoMatch()
{
    return (
        <MainLayout title='404 - Not Found'>
            <div className={contents.wrapper}>
                <Typography variant="h2" gutterBottom component="div">
                    404 - Not Found!
                </Typography>
                <NavLink to="/">
                    <Button variant="outlined">
                        Go Home
                    </Button>
                </NavLink>
            </div>
        </MainLayout>
    )
}