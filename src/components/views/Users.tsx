import { MainLayout } from '../layout/MainLayout'
import { Typography } from '@mui/material'
import contents from '../styles/MainLayout.module.css'

export function Users()
{
    return (
        <MainLayout title='Пользователи'>
            <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Пользователи
            </Typography> 
            <hr className={contents['hr-line']} />
            <p>...</p>
        </MainLayout>
    )
}