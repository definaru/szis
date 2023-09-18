import { Button, Box } from '@mui/material'
import { InputDoobleCalendar } from '../ui/calendar/InputDoobleCalendar'
import { TableNotofication } from '../ui/table/TableNotofication'
import { TableInform } from '../ui/table/TableInform'
import { ChartsOperator } from '../ui/block/ChartsOperator'
import contents from '../styles/MainLayout.module.css'


export function NotificationList()
{
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <input type="search" name="search" className={contents.search} placeholder='Поиск' />
                    <Button sx={{textTransform: 'inherit', ml: 2}} className={contents['btn-info']} variant='contained'>
                        &#160;&#160;Искать&#160;&#160;
                    </Button>                
                </div>
                <InputDoobleCalendar />
            </Box>
            <TableNotofication />
            <Box sx={{ py: 10, display: 'flex', gap: 2 }}>
                <TableInform />
                <ChartsOperator />
            </Box>
        </Box>

    )
}