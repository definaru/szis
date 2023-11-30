import { useEffect, useState } from 'react'
import { MainLayout } from '../layout/MainLayout'
import { InputDoobleCalendar } from '../ui/calendar/InputDoobleCalendar'
import { 
    Paper, Typography, Box, FormControl, MenuItem, ThemeProvider, 
    createTheme, Alert, Avatar, Stack, Chip, Divider, InputLabel
} from '@mui/material'
import dayjs from 'dayjs'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { CsvIcon, XlsIcon, XmlIcon } from '../ui/icons/uiKit'
import { ColorLabel } from '../ui/label/ColorLabel'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { GetInformation } from '../../api/requests/GetInformation'
import { GetDataReports } from '../data/GetDataReports'
import { TableReports } from '../ui/table/TableReports'
import { ButtonsExport } from '../ui/button/ButtonsExport'
import contents from '../styles/MainLayout.module.css'


export function Reports()
{
    const styles = GetDataReports()
    const dispatch = useAppDispatch()
    const theme = createTheme({palette: {mode: 'light'}})
    const { data, isLoading, error } = useAppSelector(state => state.startReducer)

    const { icon } = styles
    const [exports, setExport] = useState('')

    const [reports, setReports] = useState('')
    const {id, user, name, script, method, message, caller, datetime}: any = reports

    const GetReport = (id: string) => {
        setReports(data?.find((item: any) => item.id === id))
    }

    const handleChange = (event: SelectChangeEvent) => {
        setExport(event.target.value);
    }
 
    useEffect(() => {
        dispatch(GetInformation())
    }, [])

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
                {isLoading && <div>Загрузка...</div>}
                <InputDoobleCalendar />
            </Box>
            <ThemeProvider theme={theme}>
                <Box sx={{my: 2}}>
                    <FormControl variant="standard" sx={{ minWidth: 220 }}>
                        {exports === '' && <InputLabel>Выберите формат...</InputLabel>}
                        <Select 
                            value={exports} 
                            onChange={handleChange} 
                            defaultValue=''
                            label="Права и роли"
                            sx={{ 
                                border: 'none', 
                                '&.MuiInput-underline:before': { 
                                    border: 0 
                                } 
                            }}
                        >
                            <MenuItem value={'xml'}><div style={icon}><XmlIcon /></div> Скачать как XML</MenuItem>
                            <MenuItem value={'csv'}><div style={icon}><CsvIcon /></div> Скачать как CSV</MenuItem>
                            <MenuItem value={'xlsx'}><div style={icon}><XlsIcon /></div> Скачать как XLS</MenuItem>
                        </Select>
                    </FormControl>
                </Box>                
            </ThemeProvider>
            {error && <Alert severity="error">{error}</Alert>}

            <Paper sx={{ width: '100%', bgcolor: '#fff', boxShadow: 3, p: 2, color: '#000'  }}>
                {reports === '' ?
                <div>
                    <TableReports results={data} exports={exports} GetReport={GetReport} />
                    {exports && <ButtonsExport exports={exports} />}
                </div> :
                <div>
                    <button onClick={() => setReports('')}>Назад</button> &#160; Запрос #{id}
                    <Stack spacing={4} sx={{my: 3}}>
                        <Box>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                <Box>
                                    {user.photo === null ?
                                        <Avatar sx={{ bgcolor: '#ddd', width: 100, height: 100 }}>OP</Avatar> :
                                        <Avatar 
                                            alt="OP" 
                                            src={`${process.env.REACT_APP_BASE_URL}${user.photo.avatar}`} 
                                            sx={{ width: 100, height: 100 }} 
                                        />
                                    }                                
                                </Box>
                                <Stack>
                                    <Typography variant="h5">
                                        {user.first_name} {user.last_name}
                                    </Typography>
                                    <Typography variant="body1" sx={{color: '#999'}}>
                                        <b>{user.email} | {`@${user.username}`}</b>
                                    </Typography>
                                    <Typography variant="body2" sx={{color: '#888'}}>
                                        {user.phones?.map((item: any, i?: number) => item.phone)}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        <Divider sx={{bgcolor: '#ddd'}} />
                        <Box><b>Название сценария:</b> {name}</Box>
                        <Box><b>Тип отправки \ Метод:</b> {script} \ <i>{method}</i></Box>
                        <Box><b>Сообщение:</b> <Alert sx={{width: '50%'}} severity="info">{message}</Alert></Box>
                        <Box>
                            <b>Получатели:</b> 
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                {caller?.split(', ').map((item: string, i: number) => (
                                    <Chip label={item} key={i} color="warning" />
                                ))}                                
                            </Stack>
                        </Box>
                        <Box><b>Дата отправки:</b> {dayjs(datetime).format('DD MMMM YYYY, HH:mm:ss')}</Box>
                    </Stack>
                </div>}
            </Paper>
        </MainLayout>
    )
}