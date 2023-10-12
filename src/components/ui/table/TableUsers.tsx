import { CircleIcon, UserDefault } from '../icons/uiKit'
import PhoneIcon from '@mui/icons-material/Phone'
import { GetDataUsers } from '../../data/GetDataUsers'
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Typography, Box, Chip } from '@mui/material'

export function TableUsers()
{
    const th = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const tablehead = {color: '#000', padding: '4px 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const color = (text: string) => text === 'на сайте' ? '#36B44C' : '#CC2128'
    const head = [
        {
            name: '',
            size: ''
        },
        {
            name: '',
            size: '80'
        },
        {
            name: 'Ф.И.О.',
            size: ''
        },
        {
            name: 'Уровень доступа',
            size: ''
        },
        {
            name: 'Должность',
            size: '' 
        },
        {
            name: 'E-mail',
            size: '' 
        },
        {
            name: 'Внетренний телефон',
            size: '' 
        },     
        {
            name: 'Подразделение',
            size: '' 
        }
    ]
    const body = GetDataUsers()

    return (
        <TableContainer sx={{width: '100%', mt: 2}}>
            <Table>
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
                            <TableCell sx={th}>
                                <strong>{index+1}</strong>
                            </TableCell>
                            <TableCell sx={th}>
                                {row.avatar === '' ? 
                                    <UserDefault color='#445490' size='50' /> :
                                    <img src={row.avatar} style={{width: '50px', borderRadius: '50em'}} alt={row.name} />
                                }
                            </TableCell>
                            <TableCell sx={th}>
                                <Typography variant='h6'>{row.name}</Typography>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                    <CircleIcon color={color(row.network)} size='15' /> 
                                    <span style={{ lineHeight: 0 }}>{row.network}</span>
                                </Box>
                            </TableCell>  
                            <TableCell sx={th}>
                                {row.role && <Chip label={row.role} color="warning" />}
                            </TableCell>  
                            <TableCell sx={th}>
                                {row.position}
                            </TableCell>  
                            <TableCell sx={th}>
                                <a href={`mailto:${row.email}`} target='_blank'>{row.email}</a>
                            </TableCell>  
                            <TableCell sx={th}>
                                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                    <PhoneIcon color='success' /><a href="#">{row.internal_phone}</a>
                                </Box>
                            </TableCell>  
                            <TableCell sx={th}>
                                <Typography variant='h6'>
                                    <a href="#">{row.division}</a>
                                </Typography>
                            </TableCell>  
                        </TableRow>
                        ))}
                    </TableBody> 
                : ''} 
            </Table>
        </TableContainer>
    )
}