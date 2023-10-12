import { useState } from 'react'
import { MainLayout } from '../layout/MainLayout'
import { InputDoobleCalendar } from '../ui/calendar/InputDoobleCalendar'
import { Paper, Typography, Box, FormControl, MenuItem, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { CsvIcon, XlsIcon, XmlIcon } from '../ui/icons/uiKit'
import { ColorLabel } from '../ui/label/ColorLabel'
import contents from '../styles/MainLayout.module.css'
import { Button } from '../ui/button/Button'

export function Reports()
{
    const [exports, setExport] = useState('xml')
    const handleChange = (event: SelectChangeEvent) => {
        setExport(event.target.value);
    }
    const th = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const tablehead = {color: '#000', padding: '4px 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const icon = { width: '40px', paddingRight: '7px' }
    const head = [
        {
            name: 'Дата',
            size: ''
        },
        {
            name: 'Событие',
            size: '' 
        },
        {
            name: 'Описание',
            size: '' 
        },
        {
            name: 'Пользователи',
            size: '' 
        }
    ]
    const body = [
        {
            date: '2023-10-01',
            event: 'Исходящее USSD информирование',
            description: '1231',
            user: 'Иванов И.И.'
        },
        {
            date: '2023-10-02',
            event: 'Исходящее USSD информирование',
            description: '124',
            user: 'Иванов И.И.'
        },
        {
            date: '2023-10-03',
            event: 'Исходящее USSD информирование',
            description: '1',
            user: 'Сидоров И.Д.'
        },
        {
            date: '2023-10-04',
            event: 'Исходящее USSD информирование',
            description: '18',
            user: 'Иванов И.И.'
        },
        {
            date: '2023-10-05',
            event: 'Исходящее USSD информирование',
            description: '6',
            user: 'Иванов И.И.'
        }
    ]

    return (
        <MainLayout title='Отчеты'>
            <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Отчеты
            </Typography> 
            <hr className={contents['hr-line']} />
            <Box sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{display: 'flex', gap: 3}}>
                    <ColorLabel children="USSD" name={'ussd'} />
                    <ColorLabel children="Вход в систему" name={'login'} color='info' />
                    <ColorLabel children="PUSH" name={'push'} color='warning' />
                    <ColorLabel children="Неудачные отправки" name={'failsend'} color='danger' />
                    <ColorLabel children="SMS" name={'sms'} color='primary' />
                </Box>
                <InputDoobleCalendar />
            </Box>

            <Box sx={{my: 2}}>
                <FormControl variant="standard" sx={{ minWidth: 220 }}>
                    <Select value={exports} onChange={handleChange} label="Права и роли">
                        <MenuItem value={'xml'}><div style={icon}><XmlIcon /></div> Скачать как XML</MenuItem>
                        <MenuItem value={'csv'}><div style={icon}><CsvIcon /></div> Скачать как CSV</MenuItem>
                        <MenuItem value={'xls'}><div style={icon}><XlsIcon /></div> Скачать как XLS</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Paper sx={{ width: '100%', bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                <TableContainer sx={{mb: 10, width: '100%'}}>
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
                                    <a href="#"><u>{row.date}</u></a>
                                </TableCell>
                                <TableCell sx={th}>
                                    {row.event}
                                </TableCell>
                                <TableCell sx={th}>
                                    {row.description}
                                </TableCell>                                      
                                <TableCell sx={th}>
                                    {row.user}
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody> : ''}  
                    </Table>
                </TableContainer>
                <Box sx={{ display: 'flex', gap: 2}}>
                    <Button>Скачать</Button>
                    <Button color='info'>Показать</Button>
                </Box>
            </Paper>
        </MainLayout>
    )
}