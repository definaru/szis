import { Link } from 'react-router-dom'
import { Button } from '../ui/button/Button'
import { MainLayout } from '../layout/MainLayout'
import { Typography, Paper, Box, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { GetDataScenario } from '../data/GetDataScenario'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import contents from '../styles/MainLayout.module.css'


export function Scenario()
{    
    const tablehead = {color: '#000', padding: '0 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const td = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const head = [
        {
            name: 'ID',
            size: '200'
        },
        {
            name: 'Название сценария',
            size: ''
        },
        {
            name: '',
            size: '150'
        }
    ]

    const body = GetDataScenario()

    return (
        <MainLayout title='Выбор сценариев'>
            <Typography variant="h1" sx={{ color: '#1C1C1C', fontSize: '24px', fontWeight: 600}}>
                Сценарии информирования
            </Typography> 
            <hr className={contents['hr-line']} />
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
                                    <TableCell component="th" scope="row" sx={td}>
                                        <div style={{fontWeight: 600}}>0{index+1}</div>
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={td}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row" sx={td}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>                                                    
                                        </Box>
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
                                <Link to="/directory">
                                    <Button fullWidth color='info'>Справочник</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Paper>                       
                </div>
            </Box>
        </MainLayout>
    )
}