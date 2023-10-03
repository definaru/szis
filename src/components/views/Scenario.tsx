import { MainLayout } from '../layout/MainLayout'
import { Typography, Paper, Box, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Button } from '../ui/button/Button'
import { GetDataScenario } from '../data/GetDataScenario'


export function Scenario()
{    
    const tablehead = {color: '#000', padding: '0 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const head = [
        {
            name: 'ID',
            size: '300'
        },
        {
            name: 'Название сценария',
            size: ''
        }
    ]

    const body = GetDataScenario()

    return (
        <MainLayout title='Выбор сценариев'>
            <Typography variant="h1" sx={{py: 1, color: '#1C1C1C', fontSize: '24px', fontWeight: 500}}>
                Сценарии информирования
            </Typography> 
            <hr style={{
                color: '#F6F6F6',
                background: '#F6F6F6',
                borderTop: '1px solid #F6F6F6',
                marginBottom: '30px'
            }} />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
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
                                    <TableCell component="th" scope="row" sx={{color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6', fontWeight: 600}}>
                                        0{index+1}
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={{color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}}>
                                        {row.name}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody> 
                    : ''} 
                </TableContainer>
                <div>
                    <Paper sx={{ width: '100%', my: 3, bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                        <Box sx={{display: 'grid', width: '300px'}}>
                            <Typography sx={{py: 1, color: '#1C1C1C', fontSize: '24px', fontWeight: 500}}>
                                Добавить сценарий:
                            </Typography> 
                            <input 
                                type="text" 
                                placeholder='Название' 
                                style={{
                                    borderRadius: '5px',
                                    border: '1px solid #EFEFEF',
                                    padding: '10px 15px',
                                    marginBottom: '15px'
                                }} 
                            />
                            <Box sx={{display: 'flex', gap: 3}}>
                                <Button fullWidth>Добавить</Button> 
                                <Button fullWidth color='info'>Справочник</Button> 
                            </Box>
                        </Box>
                    </Paper>                       
                </div>
            </Box>
        </MainLayout>
    )
}