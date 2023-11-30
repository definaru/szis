import { useState, useEffect } from 'react'
import { Button } from '../../ui/button/Button'
import { Box, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Alert, IconButton, Checkbox } from '@mui/material'
import { DeleteHandbook, GetHandbook } from '../../../api/requests/GetHandbook'
import { UserDefault } from '../icons/uiKit'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { PhoneFormat } from '../../helper/digital/PhoneFormat'
import { PersonCard } from '../block/PersonCard'
import { SearchForm } from '../block/SearchForm'
import { GetTableRef } from '../../data/GetTableRef';
import { ModelTable } from '../modal/ModelTable'
import { Handbook } from '../../../models/Interfaces'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { CreatePerson } from '../block/CreatePerson'


interface Tables {
    width?: number;
    bottom?: boolean;
    row: string;
}

export function TableReference({width = 100, bottom = true, row = ''}: Tables)
{
    const dispatch = useAppDispatch()
    const { data, isLoading, error } = useAppSelector(state => state.startReducer)

    const { results }: any = data // count, next, previous

    const [ open, setOpen ] = useState(false)
    const [ create, setCreate ] = useState(false)
    const [ user, setUser ] = useState<string | null | any>(null)
    const [ list, setList ] = useState(results)
    const [ edit, setEdit ] = useState()
    const [checked, setChecked] = useState<any>([])
    const { th, tablehead, rows } = GetTableRef()

    const Delete = (idx: string) => {
        setUser(null)
        setList(list.filter((item: any) => item.id !== idx))
        dispatch(DeleteHandbook(idx))
    }

    const Edit = (idx: any) => {
        setOpen(true)
        setEdit(results.find((item: Handbook) => item.id === idx))
    }

    const SelectContact = (name: string) => {
        setUser(results.find((p: any) => p.name.includes(name))) //name
        setCreate(false)
    }

    const CreateContact = () => {
        setUser(null)
        setCreate(true)
    }

    const isChecked = (id: any) => checked.includes(id)

    useEffect(() => {
        dispatch(GetHandbook())
    }, [user, edit, open])

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex'}}><SearchForm /> {isLoading && <Box sx={{p: 1, ml: 4}}>Загрузка...</Box>}</div> 
                <button onClick={() => CreateContact()}>Добавить запись</button>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '25px' }}>
                <div style={{width: `${width}%`}}>
                    {error && <Alert severity="error">{error}</Alert>}
                    
                    <TableContainer sx={{mb: 10, width: '100%'}}>
                        {list ? <Table>
                            <TableHead>
                                <TableRow>
                                    {rows.map((item, i) => (
                                        <TableCell sx={tablehead} key={i} style={{width: item.size === '' ? 'auto' : `${item.size}px`}}>
                                            {item.name === 'ID' ? <div>&#160;&#160;&#160;&#160;{item.name}</div> : item.name}
                                        </TableCell>
                                    ))}
                                    {/* {row === 'Info' && 
                                        <TableCell sx={tablehead}>
                                            <Map color='#006AF2' />
                                        </TableCell>                            
                                    } */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {list.map((row: any, index: number) => (
                                    <TableRow 
                                        key={index}  
                                        sx={{backgroundColor: user === row.name ? '#f1f1f1' : '#fff'}}
                                    >
                                        <TableCell sx={th}>
                                            <Checkbox
                                                color="info"
                                                checked={isChecked(row.id) ? true : false}
                                                onClick={() => setChecked([...checked, row.id])}
                                            /> 
                                            {/* {row.id} */}
                                        </TableCell>
                                        <TableCell sx={th} onClick={() => SelectContact(row.name)}>
                                            {row.rank}
                                        </TableCell>
                                        <TableCell sx={th} onClick={() => SelectContact(row.name)}>
                                            {row.photo ?
                                                <img src={row.photo} alt="" style={{width: '45px', height: '45px', borderRadius: '50em'}} /> :
                                                <UserDefault size={'45'} color={'#CDAFAE'} />
                                            }
                                        </TableCell> 
                                        <TableCell sx={th} onClick={() => SelectContact(row.name)}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell sx={th}>
                                            {row.phone ? 
                                                <PhoneFormat phone={row.phone} /> : '-- || --'
                                            }
                                        </TableCell>
                                        <TableCell sx={th}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                                {row.division ?? '-- || --'}
                                                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                                                    <IconButton onClick={() => Edit(row.id)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => Delete(row.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>                                                    
                                                </Box>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>                                     
                        </Table> : ''}
                    </TableContainer>
                    {user &&
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', mb: 2 }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <div onClick={() => Delete(user.id)}>
                                <Button color='error'>Удалить</Button>
                            </div>
                            <IconButton sx={{color: '#000', bgcolor: '#fff', boxShadow: 2}}>
                                <MoreHorizIcon />
                            </IconButton>
                            <div onClick={() => CreateContact()}>
                                <Button color='info'>Добавить</Button>
                            </div>
                        </Box>
                        <div>
                            {bottom && <Button>Информировать</Button>}
                        </div>
                    </Box>}
                </div>
                {user !== null && <PersonCard person={user} />}
                {create && 
                <CreatePerson
                    setOpen={setCreate} 
                    list={list} 
                    setList={setList} 
                />}
            </Box>  
            {edit && <ModelTable open={open} setOpen={setOpen} contact={edit} />}
        </div>
    )
}