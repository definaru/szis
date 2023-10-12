import { MainLayout } from '../layout/MainLayout'
import { Typography, Paper } from '@mui/material'
import { TableUsers } from '../ui/table/TableUsers'
import contents from '../styles/MainLayout.module.css'

export function Users()
{
    return (
        <MainLayout title='Пользователи'>
            <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Пользователи
            </Typography> 
            <hr className={contents['hr-line']} />
            <Paper sx={{bgcolor: '#fff', boxShadow: 3, p: 2, color: '#000' }}>
                <TableUsers />
            </Paper>
        </MainLayout>
    )
}