import { Link } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Box, Typography } from '@mui/material'
import { LeftMenu } from '../ui/menu/LeftMenu'
import { TableReference } from '../ui/table/TableReference'
import contents from '../styles/MainLayout.module.css'


export function Directory()
{
    return (
        <MainLayout title='Справочник'>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '20px', mt: 1}}>
                <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                    Телефонный справочник
                </Typography>
                <Link to='/scenario'><span>Сценарии информирования</span></Link>
            </Box>
            <hr className={contents['hr-line']} />
            <Box sx={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px' }}>
                <div>
                    <LeftMenu />
                </div>
                <TableReference row='Locator' width={100} />
            </Box>
        </MainLayout>
    )
}