import { TableRow, TableCell, TableBody, Skeleton } from '@mui/material'

interface Count {
    count: number;
}

export function TableUsersLoad({count = 3}: Count)
{
    const th = {color: '#7C7C7C', padding: '9px', borderBottom: '1px solid #F6F6F6'}
    return (
        <TableBody>
        {[...Array(count)].map((e, i) => (
            <TableRow key={i}>
                <TableCell sx={th}>
                    <Skeleton variant="rounded" width={20} height={20} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="circular" width={50} height={50} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="text" sx={{ fontSize: '2em' }} width={'60%'} style={{backgroundColor: '#ddd'}} />
                    <Skeleton variant="text" sx={{ fontSize: '1em' }} width={100} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="rounded" width={'55%'} height={35} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="text" sx={{ fontSize: '1em' }} width={'80%'} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="text" sx={{ fontSize: '1em' }} width={'80%'} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="text" sx={{ fontSize: '1em' }} width={'60%'} style={{backgroundColor: '#ddd'}} />
                </TableCell>
                <TableCell sx={th}>
                    <Skeleton variant="text" sx={{ fontSize: '2em' }} width={'60%'} style={{backgroundColor: '#ddd'}} />
                </TableCell>
            </TableRow>                        
        ))}
        </TableBody>
    )
}