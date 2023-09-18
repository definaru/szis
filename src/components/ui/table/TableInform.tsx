import { IconButton, Typography, Paper, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Processing } from '../progress/Processing'
import { GetDataInfo } from '../../data/GetDataInfo'
import { ActionStop, ActionUpload } from '../icons/uiKit'

export function TableInform()
{
    const header = {
        m: 0, 
        p: 0, 
        fontWeight: 500, 
        fontSize: '22px',
        color: '#7C7C7C'
    }
    const tablehead = {color: '#000', padding: '0 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const th = {color: '#000', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const body = GetDataInfo()
    const head = [
        {
            name: 'ID',
            size: ''
        },
        {
            name: '',
            size: ''
        },
        {
            name: 'Оператор связи',
            size: '100'
        },
        {
            name:'Операция',
            size: '210'
        }, 
        {
            name: 'Uid сообщения',
            size: ''
        },
        {
            name: 'Локация', 
            size: '200'
        },
        {
            name: 'Кол-во абонентов в зоне информирования',
            size: ''
        },
        {
            name: 'Кол-во абонентов вне зоны информирования',
            size: ''
        },
        {
            name: 'Доставлено сообщений',
            size: ''
        },
        {
            name: 'Подтверждено абонентом',
            size: ''
        },
        {
            name: 'Не доставлено',
            size: ''
        }
    ]

    return (
        <div>
            <Typography variant="h6" sx={header}>Подробная информация</Typography>
            <Paper sx={{ width: '100%', my: 3, bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                <TableContainer sx={{my: 1}}>
                    <TableHead>
                        <TableRow>
                            {head.map((item, i) => (
                                <TableCell sx={tablehead} key={i} style={{width: item.size === '' ? 'auto' : `${item.size}px`}}>
                                    {item.name}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {body ? 
                    <TableBody>
                        {body.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" sx={{color: '#000', bgcolor: '#F6F6F6', padding: '9px', borderBottom: '1px solid #F6F6F6'}}>
                                0{index+1}
                            </TableCell>
                            <TableCell sx={th}>
                                {/* {JSON.stringify(row.action)} */}
                                <IconButton sx={{bgcolor: '#F6F6F6'}}>
                                    {row.action ? <ActionStop /> : <ActionUpload />}
                                </IconButton>
                            </TableCell>
                            <TableCell sx={th}>
                                {row.operator}
                            </TableCell>
                            <TableCell sx={th}>
                                <Processing start={row.process} />
                            </TableCell>
                            <TableCell sx={th}>
                                {row.uid_message}
                            </TableCell>
                            <TableCell sx={th}>
                                {row.location}
                            </TableCell>
                            <TableCell sx={th}>
                                {row.abonent_on_zone}
                            </TableCell>
                            <TableCell sx={th}>
                                {row.abonent_off_zone}
                            </TableCell>
                            <TableCell sx={th}>
                                {row.send_message}
                            </TableCell>
                            <TableCell sx={th}>
                                {row.received}
                            </TableCell>
                            <TableCell sx={th}>
                                {row.not_delivered}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody> 
                    : ''}                     
                </TableContainer>
            </Paper>
        </div>
    )
}