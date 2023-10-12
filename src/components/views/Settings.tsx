import { useState } from 'react'
import { MainLayout } from '../layout/MainLayout'
import { Paper, Typography, Box, FormControl, MenuItem } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { WarningAlert, PersonLock, PencilEdit } from '../ui/icons/uiKit'
import { Button } from '../ui/button/Button'
import contents from '../styles/MainLayout.module.css'


export function Settings()
{
    const [age, setAge] = useState('Пользователь')
    const stocke = {display: 'flex', gap: '10px', alignItems: 'center', margin: 0}
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    }

    return (
        <MainLayout title='Настройки'>
            <Typography variant="h1" sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Профиль пользователя
            </Typography>
            <hr className={contents['hr-line']} />
            <Paper sx={{ width: '50%', bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                <Box sx={{display: 'flex', gap: 3, color: '#000'}}>
                    <img src="/img/Rectangle-1738.png" alt="" />
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px'}}>
                        <strong>@yiJEBveuBIfCo63GTQXx</strong>
                        <p style={stocke}>
                            <a href="mailto:nicole.bailey@example.com">nicole.bailey@example.com</a> 
                            <span title='E-mail не подтверждён' style={{cursor: 'help'}}>
                                <WarningAlert color='#ff1a2e' />
                            </span>
                            <a href="#"><PencilEdit /></a>
                        </p>
                        <p style={stocke}>
                            <a href="tel:+79979428890">+7(997) 942-8890</a>
                            <span title='Номер телефона не подтверждён' style={{cursor: 'help'}}>
                                <WarningAlert color='#ff1a2e' />
                            </span>
                            <a href="#"><PencilEdit /></a>
                        </p>
                        <p style={stocke}>
                            <strong>OOO "Организация"</strong> 
                            <span>/ менеджер</span>
                            <a href="#"><PencilEdit /></a>
                        </p>
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
                        </div>
                    </Box>                    
                </Box>
                <hr className={contents['hr-line']} />
                <Box sx={{display: 'grid', gap: 2, color: '#000', width: '100%'}}>
                    <Box sx={{display: 'flex', gap: 2, color: '#000'}}>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Имя</label>
                            <input type="text" name="firstname" placeholder='Имя' defaultValue='Илон' className={contents.input} />
                        </Box>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Фамилия</label>
                            <input type="text" name="lastname" placeholder='Фамилия' defaultValue='Маск' className={contents.input} /> 
                        </Box>                 
                    </Box>
                    <Box sx={{display: 'flex', gap: 2, color: '#000'}}>
                        <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                            <label style={{fontWeight: 700, color: '#7c7c7c'}}>Должность</label>
                            <input type="text" name="position" placeholder='Должность' className={contents.input} />
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
                        <input type="text" name="" placeholder='Новый пароль' className={contents.input} />
                    </Box>
                    <Box sx={{display: 'grid', width: '100%', gap: 1}}>
                        <label style={{fontWeight: 700, color: '#7c7c7c'}}>Подтверждение нового пароля</label>
                        <input type="text" name="" placeholder='Подтверждение нового пароля' className={contents.input} />
                    </Box>
                </Box>
            </Paper>
            <Box sx={{display: 'flex', width: '100%', mt: 3}}>
                <Button color='info'>Сохранить изменения</Button>                
            </Box>
        </MainLayout>
    )
}