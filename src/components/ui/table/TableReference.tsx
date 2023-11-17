import { useState, useEffect } from 'react'
import { Map } from '../../ui/icons/uiKit'
import { Button } from '../../ui/button/Button'
import { Box, TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Alert, IconButton } from '@mui/material'
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
    const [ user, setUser ] = useState<string | null>(null)
    const [ list, setList ] = useState(results)
    const [ edit, setEdit ] = useState(results)
    const [ add, setAdd] = useState(null)
    const { th, tablehead, rows } = GetTableRef()

    //const result = list?.find((person: any) => person.name === user )
    const result = list ? list?.find((p: any) => p.name.includes(user)) : []

    const Delete = (idx: any) => {
        setUser(null)
        setList(list.filter((item: any) => item.id !== idx))
        dispatch(DeleteHandbook(idx))
    }

    const Edit = (idx: any) => {
        setOpen(true)
        setEdit(results.find((item: Handbook) => item.id === idx))
    }

    const SelectContact = (name: string) => {
        setUser(name)
        setCreate(false)
    }

    const CreateContact = () => {
        setUser(null)
        setCreate(true)
    }

    useEffect(() => {
        dispatch(GetHandbook())
        setList(data?.results)
        if(add !== null) {
            list ? setList([...list, add]) : setList(add)
            setTimeout(() => setAdd(null), 1000)
        }
    }, [add, user, edit])

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
                            {list ? 
                            <TableBody>
                                {list.map((row: any, index: number) => (
                                    <TableRow 
                                        key={index}  
                                        sx={{backgroundColor: user === row.name ? '#f1f1f1' : '#fff'}}
                                    >
                                        <TableCell sx={{padding: '9px 0', borderBottom: '1px solid #fff'}}>
                                            <input type="radio" name="radio" id="radio" />
                                        </TableCell>
                                        <TableCell sx={th} onClick={() => SelectContact(row.name)}>
                                            0{row.id}
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
                                                {row.subdivision}
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
                            </TableBody> : ''}                                      
                        </Table>
                    </TableContainer>
                    {user &&
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', mb: 2 }}>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                            <div onClick={() => Delete(result.id)}>
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
                {user !== null && <PersonCard person={result} />}
                {create && <CreatePerson open={create} setOpen={setCreate} setAdd={setAdd} />}
            </Box>  
            <ModelTable open={open} setOpen={setOpen} contact={edit} />          
        </div>
    )
}