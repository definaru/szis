import { useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { MainLayout } from '../layout/MainLayout'
// import { LeftMenu } from '../ui/menu/LeftMenu'
// import { TableReference } from '../ui/table/TableReference'
// import { SearchForm } from '../ui/block/SearchForm'
// import { PersonCard } from '../ui/block/PersonCard'
import { LocatorIcon } from '../ui/icons/uiKit'
import { ColorLabel } from '../ui/label/ColorLabel'
import { TableLocator } from '../ui/table/TableLocator'
import { Button } from '../ui/button/Button'
import { TableTask } from '../ui/table/TableTask'
import contents from '../styles/MainLayout.module.css'


export function Locator()
{
    const [tabs, SetTabs] = useState(0)
    // const user = {
    //     photo: '/img/Rectangle-1738.png',
    //     name: 'Иванов Филипп Семенович',
    //     division: 'Руководство',
    //     phone: '+7(495)377-04-31',
    //     location: 'Москва, ул. Комсомольский проспект, 32'
    // }

    return (
        <MainLayout title='Локатор'>
            <Typography variant="h1" sx={{ color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Трекинг
            </Typography> 
            <hr className={contents['hr-line']} />
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 40%', gap: '20px'}}>
                <div>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1}}>
                        <Box sx={{display: 'flex', gap: 1}}>
                            <Typography variant="h6" sx={{color: '#1C1C1C', fontSize: '22px', fontWeight: 600}}>
                                Общая карта г. Москва
                            </Typography> 
                            <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', gap: 1, fontWeight: 500, color: '#7C7C7C', fontSize: '14px'}}>
                                <LocatorIcon />
                                <span>- Пожар</span>
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', gap: 3}}>
                            <ColorLabel children="Персонал" name={'person'} />
                            <ColorLabel children="Вертолеты" name={'vertolet'} color='info' />
                            <ColorLabel children="Камазы" name={'kamaz'} color='warning' />
                            <ColorLabel children="БПЛА" name={'bpla'} color='primary' />
                        </Box>
                    </Box>
                    <img src="/img/map.png" style={{width: '100%', paddingTop: '20px'}} alt="" /> 
                </div>
                <div>
                    <Box sx={{mt: 7}}>
                        <button className={contents[tabs === 0 ? 'active-tab' : 'tab']} onClick={() => SetTabs(0)}>Персонал</button>
                        <button className={contents[tabs === 1 ? 'active-tab' : 'tab']} onClick={() => SetTabs(1)}>Вертолеты</button>
                        <button className={contents[tabs === 2 ? 'active-tab' : 'tab']} onClick={() => SetTabs(2)}>Камазы</button>
                        <button className={contents[tabs === 3 ? 'active-tab' : 'tab']} onClick={() => SetTabs(3)}>БПЛА</button>
                    </Box>                    
                    <Paper sx={{bgcolor: '#fff', boxShadow: 3, p: 2, color: '#000', border: '1px solid #36B44C', height: '81%' }}>
                        <div>
                            {tabs === 0 && 
                                <TableLocator />
                            }
                            {tabs === 1 && 
                                <div>2 Вертолеты</div>
                            }
                            {tabs === 2 && 
                                <div>3 Камазы</div>
                            }
                            {tabs === 3 && 
                                <div>4 БПЛА</div>
                            }
                        </div>
                    </Paper>
                </div>
            </Box>
            <Box>
                <Box sx={{display: 'flex', gap: 2, mt: 2}}>
                    <Typography variant="h6" sx={{color: '#1C1C1C', fontSize: '22px', fontWeight: 600}}>
                        Задачи
                    </Typography>  &#160;
                    <Button>Создать</Button>                        
                    <Button color='error'>Удалить</Button>                        
                    <Button color='info'>Изменить</Button>                        
                </Box>
                <TableTask />
            </Box>



            {/* <Box sx={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px' }}>
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
            </Box> */}
        </MainLayout>
    )
}