import { useState, useEffect } from 'react'
import { Run } from '../../api/Run'
import { Button } from '../ui/button/Button'
import { MainLayout } from '../layout/MainLayout'
import { Paper, Typography, Box, FormControl, MenuItem, Skeleton } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { WarningAlert, PersonLock, PencilEdit } from '../ui/icons/uiKit'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { GetUserOnID } from '../../api/requests/GetCurrentUser'
import { PhoneFormat } from '../helper/digital/PhoneFormat'
import contents from '../styles/MainLayout.module.css'


export function Settings()
{
    const dispatch = useAppDispatch()
    const api_uri = Run()
    const { backend_url, preffix } = api_uri[0]
    const { data, isLoading, error } = useAppSelector(state => state.startReducer)
    const { id, photo, username, first_name, last_name, email, phones, position, is_superuser, is_staff }: any = data

    // const [ url, setUrl ] = useState<string>(backend_url+preffix+'me/1622c816ff7fa1d856bea14d8297eec1ff85917a')
    const [ user, setUser ] = useState<string>(backend_url+preffix+'users/1')
    const [ age, setAge ] = useState('Пользователь')
    const stocke = {display: 'flex', gap: '10px', alignItems: 'center', margin: 0}
    const photouser = photo === null ? '/img/user/default.png' : photo?.avatar
    const phone: string = phones ? phones[0].phone : ''

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    }

    useEffect(() => {
        dispatch(GetUserOnID(user))
    }, [user])

    return (
        <MainLayout title='Настройки'>
            <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Профиль пользователя
            </Typography>
            <hr className={contents['hr-line']} />
            <Paper sx={{ width: '50%', bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                <Box sx={{display: 'flex', gap: 3, color: '#000'}}>
                    {isLoading ?
                        <Skeleton variant="text" width={180} height={217} style={{ backgroundColor: '#ddd' }} /> :
                        <img src={photouser} alt={first_name} style={{width: '180px'}} />
                    }
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>
                        {isLoading ?
                            <Skeleton variant="rounded" sx={{ fontSize: '1em' }} width={'60%'} style={{ backgroundColor: '#ddd' }} /> :
                            <strong>@{username}</strong>
                        }
                        <p style={stocke}>
                            <a href={`mailto:${email}`}>{email}</a> 
                            {is_staff === false &&
                                <span title='E-mail не подтверждён' style={{cursor: 'help'}}>
                                    <WarningAlert color='#ff1a2e' />
                                </span>                            
                            }
                            <a href="#"><PencilEdit /></a>
                        </p>
                        {phones ? 
                            <p style={stocke}>
                                <PhoneFormat phone={phone} />
                                <span title='Номер телефона не подтверждён' style={{cursor: 'help'}}>
                                    <WarningAlert color='#ff1a2e' />
                                </span>
                                <a href="#"><PencilEdit /></a>
                            </p> :
                            <p>Нет данных</p>                       
                        }
                        <p style={stocke}>
                            <strong>OOO "Организация"</strong> 
                            <span>/ менеджер</span>
                            <a href="#"><PencilEdit /></a>
                        </p>
                        {is_superuser && 
                        <div style={stocke}>
                            <PersonLock color='#006af2' /> 
                            <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                <Select value={age} onChange={handleChange} label="Права и роли">
                                    <MenuItem value={'Пользователь'}>Пользователь</MenuItem>
                                    <MenuItem value={'Оператор'}>Оператор</MenuItem>
                                    <MenuItem value={'Модератор'}>Модератор</MenuItem>
                                    <MenuItem value={'Администратор'}>Администратор</MenuItem>
                                </Select>
                            </FormControl>
                        </div>}
                    </Box>                    
                </Box>
                <hr className={contents['hr-line']} />
                <input type="hidden" name="id" defaultValue={id} />
                <Box sx={{display: 'grid', gap: 2, color: '#000', width: '100%'}}>
                    <Box sx={{display: 'flex', gap: 2, color: '#000'}}>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Имя</label>
                            <input type="text" name="firstname" placeholder='Имя' defaultValue={first_name} className={contents.input} />
                        </Box>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Фамилия</label>
                            <input type="text" name="lastname" placeholder='Фамилия' defaultValue={last_name} className={contents.input} /> 
                        </Box>                 
                    </Box>
                    <Box sx={{display: 'flex', gap: 2, color: '#000'}}>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Должность</label>
                            <input type="text" name="position" defaultValue={position} placeholder='Должность' className={contents.input} />
                        </Box>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Компания</label>
                            <input type="text" name="compony" placeholder='Компания' className={contents.input} />
                        </Box>
                    </Box>
                </Box>
            </Paper>
            <Paper sx={{ width: '50%', bgcolor: '#fff', boxShadow: 3, p: 2, mt: 3 }}>
                <Box sx={{display: 'flex', gap: 2, color: '#000'}}>
                    <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                        <label style={{fontWeight: 700, color: '#7c7c7c'}}>Новый пароль</label>
                        <input type="password" name="" placeholder='Новый пароль' className={contents.input} />
                    </Box>
                    <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                        <label style={{fontWeight: 700, color: '#7c7c7c'}}>Подтверждение нового пароля</label>
                        <input type="password" name="" placeholder='Подтверждение нового пароля' className={contents.input} />
                    </Box>
                </Box>
            </Paper>
            <Box sx={{display: 'flex', width: '100%', mt: 3}}>
                <Button color='info'>Сохранить изменения</Button>                
            </Box>
            {/* {error ? error : 
            <pre>{JSON.stringify(data, null, 4)}</pre>} */}
        </MainLayout>
    )
} 