import { Link } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Typography, IconButton, Box } from '@mui/material'
import { PlusCircle, SlidersHorizontal } from '../ui/icons/uiKit'
import { InputDoobleCalendar } from '../ui/calendar/InputDoobleCalendar'
import styles from '../styles/MainLayout.module.css'


export function Dashboard()
{
    return (
        <MainLayout title='Dashboard'>
            <Box sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ m: 0}}>Dashboard</Typography>
                <Box>
                    <IconButton className={styles['plus-circle']} sx={{bgcolor: '#006AF2'}}>
                        <PlusCircle />
                    </IconButton>
                    <IconButton sx={{bgcolor: '#F6F6F6', ml: 1}}>
                        <Link to="/settings" style={{height: '21px', position: 'relative', top: '-1px'}}>
                            <SlidersHorizontal />
                        </Link>
                    </IconButton>
                </Box>
            </Box>
            <hr />
            <Box sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ m: 0, py: 1, fontWeight: 'bold' }}>Оповещения</Typography>
                <InputDoobleCalendar />
            </Box>            
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div>
                    <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Box sx={{ p: 2, my: 1, boxShadow: 3, borderRadius: 2, bgcolor: 'text.primary' }}>
                            <Typography variant="subtitle1">Отправленные</Typography>
                            <Typography variant="h4" sx={{ color: '#222' }}>12</Typography>
                        </Box>
                        <Box sx={{ p: 2, my: 1, boxShadow: 3, borderRadius: 2, bgcolor: '#FFEC9E' }}>
                            <Typography variant="subtitle1">Принятые</Typography>
                            <Typography variant="h4" sx={{ color: 'warning.main' }}>43</Typography>
                        </Box>
                        <Box sx={{ p: 2, my: 1, boxShadow: 3, borderRadius: 2, bgcolor: '#99FCAA' }}>
                            <Typography variant="subtitle1">Подтвержденные</Typography>
                            <Typography variant="h4" sx={{ color: 'success.main' }}>36</Typography>
                        </Box>
                    </Box>                     
                </div>
                <div></div>
                <div>
                    <Box sx={{ p: 2, my: 1, ml: 10, boxShadow: 3, borderRadius: 2, bgcolor: 'text.primary' }}>
                        <Typography variant="subtitle1" sx={{fontWeight: 600, color: '#1C1C1C'}}>Время работы</Typography>
                        <Typography variant="h4" sx={{ color: '#1C1C1C' }}>11:54:33</Typography>
                    </Box>                  
                </div>

            </Box>
        </MainLayout>
    )
}