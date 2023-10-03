import { Map } from '../../ui/icons/uiKit'
import { Button } from '../../ui/button/Button'
import { Box, TableContainer, TableHead, TableRow, TableCell, TableBody, IconButton, Table } from '@mui/material'
import { GetDataReference } from '../../data/GetDataReference'
import { UserDefault } from '../icons/uiKit'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface Table {
    width?: number;
    bottom?: boolean;
    row: string;
}

export function TableReference({width = 100, bottom = true, row = ''}: Table)
{
    const th = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const tablehead = {color: '#000', padding: '4px 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const head = [
        {
            name: 'ID',
            size: ''
        },
        {
            name: 'в/зв',
            size: '' 
        },
        {
            name: 'Фото',
            size: '' 
        },
        {
            name: 'ФИО',
            size: '' 
        },
        {
            name: 'Номер телефона',
            size: '' 
        },
        {
            name: 'Подразделение',
            size: '' 
        }
    ]

    const headref = [
        {
            name: 'ID',
            size: ''
        },
        {
            name: 'в/зв',
            size: '' 
        },
        {
            name: 'Фото',
            size: '' 
        },
        {
            name: 'Фамилия',
            size: '' 
        },
        {
            name: 'Имя',
            size: '' 
        },
        {
            name: 'Отчество',
            size: '' 
        },
        {
            name: 'Номер телефона',
            size: '' 
        },
        {
            name: 'Подразделение',
            size: '' 
        },
        {
            name: 'Локация',
            size: '' 
        }
    ]
    const rows = row === 'Info' ? headref : head
    const body = GetDataReference()

    return (
        <div style={{width: `${width}%`}}>
            <TableContainer sx={{mb: 10, width: '100%'}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{padding: '9px 0', borderBottom: '1px solid #fff'}} />
                            {rows.map((item, i) => (
                                <TableCell sx={tablehead} key={i} style={{width: item.size === '' ? 'auto' : `${item.size}px`}}>
                                    {item.name}
                                </TableCell>
                            ))}
                            {row === 'Info' && 
                                <TableCell sx={tablehead}>
                                    <Map color='#006AF2' />
                                </TableCell>                            
                            }
                        </TableRow>
                    </TableHead>
                    {body ? 
                    <TableBody>
                        {body.map((drow, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{padding: '9px 0', borderBottom: '1px solid #fff'}}>
                                <input type="radio" name="radio" id="radio" />
                            </TableCell>
                            <TableCell sx={th}>
                                {drow.id}
                            </TableCell>
                            <TableCell sx={th}>
                                {drow.status}
                            </TableCell>
                            <TableCell sx={th}>
                                <UserDefault color={drow.avatar} />
                            </TableCell> 
                            {row === 'Info' ? 
                                <>
                                    <TableCell sx={th}>{drow.name.split(" ")[0]}</TableCell>
                                    <TableCell sx={th}>{drow.name.split(" ")[1]}</TableCell>
                                    <TableCell sx={th}>{drow.name.split(" ")[2]}</TableCell>
                                </> :
                                <TableCell sx={th}>{drow.name}</TableCell>
                            }                                       
                            <TableCell sx={th}>
                                {drow.phone}
                            </TableCell>
                            <TableCell sx={th}>
                                {drow.position}
                            </TableCell>
                            {
                                row === 'Info' && 
                                <>
                                    <TableCell sx={th}>
                                        Москва, ул. Комсомольский проспект, 32 
                                    </TableCell>                                
                                    <TableCell sx={th}>
                                        <a href="#" style={{color: '#006AF2', textDecoration: 'underline'}}>44.228720, 124.825550</a> 
                                    </TableCell>                                
                                </>
                            }
                        </TableRow>
                        ))}
                    </TableBody> : ''}                                      
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', mb: 2 }}>
                <Box sx={{ display: 'flex', gap: '15px' }}>
                    <Button color='error'>Удалить</Button>
                    <IconButton sx={{color: '#000', bgcolor: '#fff', boxShadow: 2}}>
                        <MoreHorizIcon />
                    </IconButton>
                    <Button color='info'>Добавить</Button> 
                </Box>
                <div>
                    {bottom && <Button>Информировать</Button>}
                </div>
            </Box>                              
        </div>
    )
}