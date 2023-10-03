import { Box, Typography } from '@mui/material'
import { MainLayout } from '../layout/MainLayout'
import { LeftMenu } from '../ui/menu/LeftMenu'
import { TableReference } from '../ui/table/TableReference'
import { SearchForm } from '../ui/block/SearchForm'
import { PersonCard } from '../ui/block/PersonCard'
import contents from '../styles/MainLayout.module.css'


export function Locator()
{
    const user = {
        photo: '/img/Rectangle-1738.png',
        name: 'Иванов Филипп Семенович',
        division: 'Руководство',
        phone: '+7(495)377-04-31',
        location: 'Москва, ул. Комсомольский проспект, 32'
    }

    return (
        <MainLayout title='Локатор'>
            <Typography variant="h1" sx={{pt: 2, color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Локатор
            </Typography> 
            <hr className={contents['hr-line']} />
            <Box sx={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px' }}>
                <div>
                    <LeftMenu />
                </div>
                <div>
                    <SearchForm />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '25px' }}>
                        <TableReference row='Locator' width={80} />
                        <PersonCard user={user} />
                    </Box>
                </div>
            </Box>
        </MainLayout>
    )
}