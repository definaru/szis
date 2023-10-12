
import * as React from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material'
import { MainLayout } from '../layout/MainLayout'
import { TopTableSection } from '../ui/table/TopTableSection'
import { NotificationList } from '../template/NotificationList'
import { TableTask } from '../ui/table/TableTask'
import { Container, Section, Bar } from 'react-simple-resizer'
import { Button } from '../ui/button/Button'
import contents from '../styles/MainLayout.module.css'
import { ColorLabel } from '../ui/label/ColorLabel'


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
                    {/* <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 45%', mb: 5 }}> */}

                    <Container style={{ height: '550px' }}>
                        <Section style={{ width: '55%' }}>
                            <div style={{height: '100%'}}>
                                <Box sx={{mb: 2, display: 'flex', gap: '20px', alignItems: 'center'}}>
                                    <strong style={{fontSize: '22px', fontWeight: 600}}>Общая карта г. Москва</strong>
                                    <div style={{ display: 'flex', gap: '15px', fontSize: '16px' }}>
                                        <ColorLabel children='Билайн' name={'beeline'} color='info' />
                                        <ColorLabel children='МТС' name={'mts'} color='info' checked={false} />
                                        <ColorLabel children='Мегафон' name={'megafon'} color='info' checked={false} />
                                        <ColorLabel children='Теле 2' name={'tele2'} color='info' checked={false} />
                                        <ColorLabel children='Все' name={'all'} color='info' checked={false} />
                                    </div>
                                </Box>
                                <iframe 
                                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd17e60c20d8d094eaeef2c70824d7a3971b37598b2c9e38c873e27c5374bb80&amp;source=constructor" 
                                    width="100%"
                                    style={{
                                        borderRadius: '10px', 
                                        margin: '0 4px',
                                        height: '87%',
                                        border: 0, 
                                        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
                                    }}
                                />                            
                            </div>                            
                        </Section>
                        <Bar size={20} style={{ cursor: 'col-resize' }} />
                        <Section>
                            <Box>
                                <Box sx={{ display: 'flex', gap: '5px' }}>
                                    <div>
                                        <Button>Добавить геозону</Button>
                                    </div>
                                    <div>
                                        <Button color='error'>Удалить геозону</Button>
                                    </div>
                                    <div>
                                        <Button color='info'>Изменить геозону</Button>
                                    </div>
                                </Box>   
                                <Typography sx={{py: 1, color: '#1C1C1C', fontSize: '22px'}}>Подробная информация</Typography>    
                                <Box sx={{ p: 2, boxShadow: 3, borderRadius: 2, bgcolor: 'text.primary', margin: '0 4px' }}>
                                    <TopTableSection 
                                        head={['Локация', 'Радиус', 'Билайн', 'МТС', 'Мегафон', 'Теле2']} 
                                        body={[
                                            ['Москва, ул. Комсомольский проспект, 32', '30', '24 254', '24 254', '24 254', '24 254'],
                                            ['Москва, Северо-Восточный административный', '45', '235 442', '235 442', '235 442', '235 442'],
                                            ['Москва, ул. Комсомольский проспект, 32', '14', '203 015', '203 015', '203 015', '203 015'],
                                            ['Москва, ул. Комсомольский проспект, 32', '23', '65 793', '65 793', '65 793', '65 793']
                                        ]}
                                    />
                                    <Button color='warning'>Повторить</Button>
                                </Box>                     
                            </Box>                            
                        </Section>
                    </Container>

                    <Box sx={{width: '100%', mt: 4}}>
                        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <Typography component='h4' sx={{fontSize: '22px', fontWeight: 600}}>Задачи</Typography>
                            <Typography component='div' sx={{ display: 'flex', gap: '5px' }}>
                                <Button color='success'>Создать</Button>
                                <Button color='error'>Удалить</Button>
                                <Button color='info'>Изменить</Button>
                                <Button color='warning'>Повторить</Button>
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