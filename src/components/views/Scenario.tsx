import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button/Button'
import { MainLayout } from '../layout/MainLayout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { 
    Typography, Paper, Box, TableContainer, TableHead, Table,
    TableRow, TableCell, TableBody, IconButton,
    createTheme, ThemeProvider, Button as Buttons
} from '@mui/material'

import { GetDataScenario } from '../data/GetDataScenario'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Inform } from '../../models/Interfaces'
import { FormInputText } from '../ui/input/FormInputText'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { GetInfoSendMTS } from '../../api/requests/GetInfoSendMTS'
import { DeleteInformation, GetInformation } from '../../api/requests/GetInformation'
import { FormScenario } from '../ui/form/FormScenario'
import { AlertSnackbar } from '../ui/alert/AlertSnackbar'
import contents from '../styles/MainLayout.module.css'


export function Scenario()
{    
    const schema = GetDataScenario()
    const dispatch = useAppDispatch()

    const { data, isLoading, error } = useAppSelector(state => state.startReducer)
    //const { results }: any = data
    
    const [ items, setItems ] = useState([])

    const theme = createTheme({palette: {mode: 'light'}})
    const {td, tablehead, head} = schema

    const [ edit, setEdit ]   = useState<any | null>()
    const [ mts, setMessage ] = useState<any | null | boolean>(null)
    const [ alert, setAlert ] = useState<any | null>(null)
    const [ list, setList ]   = useState<any | []>(data)

    const datetime = dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ssZ')

    const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm<Inform>()
    const onSubmit: SubmitHandler<Inform> = (data) => {
        if (data) {
            setList([...list, data])
            reset()   
        }        
    }

    const Edit = (idx: any) => {
        setEdit(list.find((item: any) => item.id === idx))
    }


    const Update = (id: number, next: {}) => {
        setList(
            list.map((item: Inform) => {
                if(item.id === id) {
                    const newitem = {
                        user: mts.user,
                        datetime: mts.datetime,
                        name: mts.name,
                        script: mts.script,
                        message: mts.message,
                        method: mts.method,
                        caller: [mts.caller]
                    }
                    return { ...item, ...newitem }                
                }
                return item
            })
        )
    }

    const Delete = (idx: string) => {
        var del = window.confirm('Вы точно хотите удалить этот сценарий ?')
        if(del) {
            setList(list.filter((item: any) => item.id !== idx))
            dispatch(DeleteInformation(idx))
        }
    }

    useEffect(() => {
        if(mts !== null) {
            let msg = mts.message
            let caller = [mts.caller]
            dispatch(GetInfoSendMTS(caller, msg))
            Update(mts.id, mts)
            setEdit('')
            setAlert({
                open: true,
                message: 'Сценарий успешно запущен.',
                isError: false
            })
            setTimeout(() => setAlert(null), 2000)
        } else if(mts === false) {
            setAlert({
                open: true,
                message: 'Ошибка! Сценарий не запущен.',
                isError: true
            })
            setTimeout(() => setAlert(null), 2000)
        } else {
            setAlert(null)
        }
    }, [mts])

    useEffect(() => {
        dispatch(GetInformation())
        setItems(data)
        if(list === undefined) {
            setList(data)
        }
    }, [items, list])


    if(!data) {
        return (
            <div>Загрузка...</div>
        )
    }
    return (
        <MainLayout title='Выбор сценариев'>
            <Typography variant="h1" sx={{ color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Сценарии информирования
            </Typography> 
            <hr className={contents['hr-line']} />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                {isLoading ? <p>Загрузка...</p> :
                <TableContainer sx={{my: 1, width: '40%'}}>
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
                        <TableBody>
                            {list?.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" sx={td}>
                                        <div style={{fontWeight: 600}}>0{index+1}</div>
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={td} style={{cursor: 'pointer'}} onClick={() => Edit(row.id)}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={td}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                                            <IconButton onClick={() => Edit(row.id)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => Delete(row.id)}>
                                                <DeleteIcon />
                                            </IconButton>                                                  
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody> 
                    </Table>
                    {/* <p>error:{error && <pre>{JSON.stringify(error, null, 4)}</pre>}</p>
                    <p>alert: {alert && <pre>{JSON.stringify(alert, null, 4)}</pre>}</p>
                    <p>mts: <pre>{JSON.stringify(mts, null, 4)}</pre></p> */}
                    

                    {alert && 
                    <AlertSnackbar 
                        open={alert.open} 
                        message={alert.message} 
                        isError={Boolean(alert.isError)} 
                    />}
                    
                </TableContainer>}
                <div>
                    <ThemeProvider theme={theme}>
                        {edit ? 
                        <FormScenario edit={edit} setEdit={setEdit} Update={Update} setMessage={setMessage} /> :
                        <Paper sx={{ width: '100%', my: 3, bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                            <Box sx={{display: 'grid', width: '300px'}}>
                                <Typography sx={{py: 1, color: '#1C1C1C', fontSize: '24px', fontWeight: 500}}>
                                    Добавить сценарий:
                                </Typography> 
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="hidden" {...register('id')} value={list.length+1} /> 
                                    <input type="hidden" {...register('datetime')} defaultValue={datetime} /> 
                                    <FormInputText
                                        name={'name'}
                                        control={control}
                                        label={"Название"}
                                        rules={{ required: 'Введите название сценария' }}
                                    />
                                    <Box sx={{display: 'flex', gap: 3}}>
                                        <Buttons 
                                            type='submit' 
                                            size='small'
                                            fullWidth 
                                            color='success' 
                                            variant='contained' 
                                            sx={{
                                                borderRadius: '10px',
                                                textTransform: 'capitalize',
                                                bgcolor: '#36B44C'
                                            }}
                                        >
                                            Добавить
                                        </Buttons> 
                                        <Link to="/directory">
                                            <Button fullWidth color='info'>Справочник</Button>
                                        </Link>
                                    </Box>                                
                                </form>
                            </Box>
                        </Paper>}                        
                    </ThemeProvider>
                </div>
            </Box>
        </MainLayout>
    )
}