import { TableContainer, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material'
import { UserDefault } from '../icons/uiKit'
import { Status } from '../label/Status'

export function TableLocator({width = 100})
{
    const th = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    const tablehead = {color: '#000', padding: '4px 9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6', fontSize: '13px'}
    const body = [
        {
            id: '01',
            avatar: '#A1F649',
            user: 'Иванов Филипп Семёнович - 7(495)377-04-31',
            location: 'Москва, ул. Комсомольский проспект, 32',
            status: 'В отделе'
        },
        {
            id: '02',
            avatar: '#445490',
            user: 'Яковлев Григорий Елисеевич - 7(495)083-56-97',
            location: 'Москва, ул. Комсомольский проспект, 32',
            status: 'На вызове'
        },
        {
            id: '03',
            avatar: '#CDAFAE',
            user: 'Григорьева Елена Кирилловна - 7(495)672-32-75',
            location: 'Москва, ул. Комсомольский проспект, 32',
            status: 'На вызове'
        }
    ]
    const head = [
        {
            name: 'ID',
            size: ''
        },
        {
            name: '',
            size: ''
        },
        {
            name: 'Данные',
            size: '390' 
        },
        {
            name: 'Локация',
            size: '180' 
        },
        {
            name: 'Статус',
            size: '' 
        }
    ]

    return (
        <div style={{width: `${width}%`}}>
            <TableContainer sx={{width: '100%', mt: 2}}>
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
                    {body ? 
                    <TableBody>
                        {body.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell sx={th}>
                                <strong>0{index+1}</strong>
                            </TableCell>
                            <TableCell sx={th}>
                                <UserDefault color={row.avatar} size='40' />
                            </TableCell>
                            <TableCell sx={th}>
                                {row.user}
                            </TableCell>                                     
                            <TableCell sx={th}>
                                {row.location}
                            </TableCell>
                            <TableCell sx={th}>
                                <Status text={`${row.status}`} />
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody> : ''}  
                </Table>
            </TableContainer>
        </div>
    )
}