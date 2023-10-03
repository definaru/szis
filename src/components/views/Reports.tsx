import { MainLayout } from '../layout/MainLayout'
import { Typography } from '@mui/material'
import contents from '../styles/MainLayout.module.css'

export function Reports()
{
    return (
        <MainLayout title='Отчеты'>
            <h3></h3>
            <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Отчеты
            </Typography> 
            <hr className={contents['hr-line']} />
            <p>...</p>
        </MainLayout>
    )
}