
import * as React from 'react'
import { Tabs, Tab, Box, Typography, Button } from '@mui/material'
import { MainLayout } from '../layout/MainLayout'
import { TopTableSection } from '../ui/table/TopTableSection'
import { NotificationList } from '../template/NotificationList'
import { TableTask } from '../ui/table/TableTask'
import contents from '../styles/MainLayout.module.css'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    tab: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, tab, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={tab !== index}
            id={`tabpanel-${index}`}
            {...other}
        >
            {tab === index && (
            <Box sx={{ py: 3 }}>
                <Typography component='div'>{children}</Typography>
            </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    }
}


export function Map()
{
    const [tab, setTabs] = React.useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue)
    }  

    return (
        <MainLayout title='Карта'>
            <Box sx={{ width: '100%' }}>
                <Box>
                    <Tabs value={tab} onChange={handleChange} className={contents.tabs} sx={{ сolor: '#1C1C1C', borderBottom: '1px solid #e8e8e8' }}>
                        <Tab label="Карта оповещения" {...a11yProps(0)} sx={{ сolor: 'inherit', textTransform: 'inherit' }} />
                        <Tab label="Список оповещения" {...a11yProps(1)} sx={{ сolor: '#1C1C1C' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel tab={tab} index={0}>
                    <Box sx={{mb: 2, display: 'flex', gap: '20px', alignItems: 'center'}}>
                        <strong style={{fontSize: '22px', fontWeight: 500}}>Общая карта г. Москва</strong>
                        <div style={{ display: 'flex', gap: '10px', fontSize: '16px' }}>
                            <label>
                                <input type='radio' name="map" defaultChecked={true} /> Билайн
                            </label>                            
                            <label>
                                <input type='radio' name="map" value={''} /> МТС
                            </label>                            
                            <label>
                                <input type='radio' name="map" value={''} /> Мегафон
                            </label>                            
                            <label>
                                <input type='radio' name="map" value={''} /> Теле 2
                            </label>                            
                            <label>
                                <input type='radio' name="map" value={''} /> Все
                            </label>                            
                        </div>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 45%', mb: 5 }}>
                        <div>
                            <iframe 
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd17e60c20d8d094eaeef2c70824d7a3971b37598b2c9e38c873e27c5374bb80&amp;source=constructor" 
                                width="100%"
                                style={{
                                    borderRadius: '10px', 
                                    height: '100%',
                                    border: 0, 
                                    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
                                }}
                            />                            
                        </div>
                        <Box sx={{pl: 3}}>
                            <Box sx={{ display: 'flex', gap: '5px' }}>
                                <div>
                                    <Button sx={{textTransform: 'inherit'}} className={contents['btn-success']} variant='contained' size='small'>
                                    &#160;&#160;Добавить геозону&#160;&#160;
                                    </Button>
                                </div>
                                <div>
                                    <Button sx={{textTransform: 'inherit'}} className={contents['btn-danger']} variant='contained' size='small'>
                                    &#160;&#160;Удалить геозону&#160;&#160;
                                    </Button>
                                </div>
                                <div>
                                    <Button sx={{textTransform: 'inherit'}} className={contents['btn-info']} variant='contained' size='small'>
                                    &#160;&#160;Изменить геозону&#160;&#160;
                                    </Button>
                                </div>
                            </Box>   
                            <Typography sx={{py: 1, color: '#1C1C1C', fontSize: '22px'}}>Подробная информация</Typography>    
                            <Box sx={{ p: 2, boxShadow: 3, borderRadius: 2, bgcolor: 'text.primary' }}>
                                <TopTableSection 
                                    head={['Локация', 'Радиус', 'Билайн', 'МТС', 'Мегафон', 'Теле2']} 
                                    body={[
                                        ['Москва, ул. Комсомольский проспект, 32', '30', '24 254', '24 254', '24 254', '24 254'],
                                        ['Москва, Северо-Восточный административный', '45', '235 442', '235 442', '235 442', '235 442'],
                                        ['Москва, ул. Комсомольский проспект, 32', '14', '203 015', '203 015', '203 015', '203 015'],
                                        ['Москва, ул. Комсомольский проспект, 32', '23', '65 793', '65 793', '65 793', '65 793']
                                    ]}
                                />
                                <Button sx={{textTransform: 'inherit', mt: 10}} className={contents['btn-warning']} variant='contained' size='small'>
                                    &#160;&#160;Повторить&#160;&#160;
                                </Button>
                            </Box>                     
                        </Box>
                    </Box>

                    <Box sx={{width: '100%'}}>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <Typography component='h4' sx={{fontSize: '22px', fontWeight: 600}}>Задачи</Typography>
                            <Typography component='div'>
                                <Button sx={{textTransform: 'inherit', ml: 2}} className={contents['btn-success']} variant='contained' size='small'>
                                    &#160;&#160;Создать&#160;&#160;
                                </Button>
                                <Button sx={{textTransform: 'inherit', ml: 2}} className={contents['btn-danger']} variant='contained' size='small'>
                                    &#160;&#160;Удалить&#160;&#160;
                                </Button>
                                <Button sx={{textTransform: 'inherit', ml: 2}} className={contents['btn-info']} variant='contained' size='small'>
                                    &#160;&#160;Изменить&#160;&#160;
                                </Button>
                                <Button sx={{textTransform: 'inherit', ml: 2}} className={contents['btn-warning']} variant='contained' size='small'>
                                    &#160;&#160;Повторить&#160;&#160;
                                </Button>
                            </Typography>
                        </Box>
                        <TableTask />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel tab={tab} index={1}>
                    <NotificationList />
                </CustomTabPanel>
            </Box>
        </MainLayout>
    )
}