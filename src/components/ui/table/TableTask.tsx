import { useState } from 'react'
import { GetTask } from '../../data/GetTask'
import { BlockStatus } from '../../ui/status/BlockStatus'
import { Box, TableContainer, Table, TableBody, TableRow, TableCell, TableHead, IconButton } from '@mui/material'
import { ActionPause, ActionPlay, ActionStop, EnterID } from '../../ui/icons/uiKit'
import { PriceFormat } from '../../helper/digital/PriceFormat'
import { ModalBox } from '../modal/ModalBox'


export function TableTask()
{
    const task = GetTask()
    const [open, setOpen] = useState(false)
    const tablerowstyle = {color: '#1C1C1C', fontWeight: 600, borderBottom: '1px solid #F6F6F6', padding: '9px'}
    const tablebody = {color: '#7C7C7C', fontWeight: 500, borderBottom: '1px solid #F6F6F6', padding: '9px'}
    return (
        <Box sx={{ display: 'flex', p: 2, mt: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'text.primary' }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={tablerowstyle}>ID</TableCell>
                            <TableCell sx={tablerowstyle}></TableCell>
                            <TableCell sx={tablerowstyle}>Состояние</TableCell>
                            <TableCell sx={tablerowstyle}>Оператор</TableCell>
                            <TableCell sx={tablerowstyle}>Дата и время</TableCell>
                            <TableCell sx={tablerowstyle}>
                                Кол-во всех абонентов <br />в зоне информирования
                            </TableCell>
                            <TableCell sx={tablerowstyle}>ФИО</TableCell>
                        </TableRow>
                    </TableHead>  
                    {task.length ? 
                    <TableBody>
                        {task.map((item, i) => (
                            <TableRow hover key={i}>
                                <TableCell sx={tablebody}>
                                    <strong style={{display: 'flex', gap: '10px'}}>
                                        {item.id} 
                                        <div style={{marginTop: '8px'}}>
                                            <EnterID />
                                        </div>
                                    </strong>
                                </TableCell>
                                <TableCell sx={tablebody}>
                                    <IconButton sx={{bgcolor: '#F6F6F6'}} onClick={() => setOpen(!open)}>
                                        {item.id == '01' && <ActionStop />}
                                        {item.id == '02' && <ActionPlay />}
                                        {item.id == '03' && <ActionPause />}                                        
                                    </IconButton>
                                </TableCell>
                                <TableCell sx={tablebody}><BlockStatus text={item.state} /></TableCell>
                                <TableCell sx={tablebody}>{item.operator}&#160;&#160;&#160;</TableCell>
                                <TableCell sx={tablebody}>{item.datetime}&#160;&#160;&#160;</TableCell>
                                <TableCell sx={tablebody}>{PriceFormat(String(item.quantity))}</TableCell>
                                <TableCell sx={tablebody}>{item.fullname}</TableCell>
                            </TableRow>                            
                        ))}
                    </TableBody> : '...'}                   
                </Table>
            </TableContainer>
            {open && <ModalBox state={open} />}
        </Box>
    )
}