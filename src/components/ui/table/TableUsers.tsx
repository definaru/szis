import { useState, useEffect } from 'react'
import { CircleIcon, UserDefault } from '../icons/uiKit'
import PhoneIcon from '@mui/icons-material/Phone'
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table, Typography, Box, Chip } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { GetAllUsers } from '../../../api/requests/GetAllUsers'
import { PhoneFormat } from '../../helper/digital/PhoneFormat'
import { TableUsersLoad } from './loading/TableUsersLoad'
import { Run } from '../../../api/Run'


export function TableUsers()
{
    const dispatch = useAppDispatch()
    const api_uri = Run()
    const { backend_url, preffix } = api_uri[0]
    const { data, isLoading, error } = useAppSelector(state => state.startReducer)
    const [ url, setUrl ] = useState<string>(backend_url+preffix+'users/')

    const {count, next, previous, results}: any = data

    const th = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const tablehead = {color: '#000', padding: '4px 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const avatar = {width: '50px', height: '50px', borderRadius: '50em', ObjectFit: 'cover'}
    const color = (text: string) => text === 'на сайте' ? '#36B44C' : '#CC2128'
    const head = [
        {
            name: '',
            size: ''
        },
        {
            name: '',
            size: '80'
        },
        {
            name: 'Ф.И.О.',
            size: ''
        },
        {
            name: 'Уровень доступа',
            size: ''
        },
        {
            name: 'Должность',
            size: '' 
        },
        {
            name: 'E-mail',
            size: '' 
        },
        {
            name: 'Внетренний телефон',
            size: '' 
        },     
        {
            name: 'Подразделение',
            size: '' 
        }
    ]
    //const body = GetDataUsers()

    useEffect(() => {
        dispatch(GetAllUsers(url))
    }, [url])

    return (
        <TableContainer sx={{width: '100%', mt: 2}}>
            {error ? error :
            <Table>
                <TableHead>
                    <TableRow>
                        {head.map((item, i) => (
                            <TableCell sx={tablehead} key={i} style={{width: item.size === '' ? 'auto' : `${item.size}px`}}>
                                {item.name}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLoading ? <TableUsersLoad count={count} /> :
                        <>
                        {results ? results.map((row: any, index: number) => (
                            <TableRow key={index}>
                                <TableCell sx={th}>
                                    <strong>{index+1}</strong>
                                </TableCell>
                                <TableCell sx={th}>
                                    {row.photo === null ? 
                                        <UserDefault color='#445490' size='50' /> :
                                        <img src={row.photo.avatar} style={avatar} alt={row.first_name} />
                                    }
                                </TableCell>
                                <TableCell sx={th}>
                                    <Typography variant='h6'>{row.first_name} {row.last_name}</Typography>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                                        <CircleIcon color={color('на сайте')} size='15' /> 
                                        <span style={{ lineHeight: 0 }}>на сайте</span>
                                    </Box>
                                </TableCell> 
                                <TableCell sx={th}>
                                    {row.is_superuser && <Chip label='Администратор' color="warning" />}
                                </TableCell>
                                <TableCell sx={th}>
                                    {row.position[0]}
                                </TableCell>
                                <TableCell sx={th}>
                                    <a href={`mailto:${row.email}`} target='_blank'>{row.email}</a>
                                </TableCell>   
                                <TableCell sx={th}>
                                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                        <PhoneIcon color='success' />
                                        <PhoneFormat phone={row.phones[0].phone} />
                                        {/* <a href="#">{row.phones[0].phone}</a> */}
                                        {row.phones[1] && <span>доп: {row.phones[1].phone}</span>}
                                    </Box>
                                </TableCell>
                                <TableCell sx={th}>
                                    <Typography variant='h6'>
                                        <a href="#">{row.phones[0].section[0].type}</a>
                                    </Typography>
                                </TableCell>  
                            </TableRow>
                        )) : ''}
                        </>
                    }
                </TableBody> 
            </Table>
            }
            {/* <pre>{JSON.stringify(results, null, 4)}</pre> */}
        </TableContainer>
    )
}