import dayjs from 'dayjs'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { GetDataReports } from '../../data/GetDataReports'


type Props = {
    results: any | [];
    exports: string;
    GetReport: (id: string) => void;
}

export function TableReports({results, exports, GetReport}: Props) 
{
    const styles = GetDataReports()
    const { th, tablehead, head, classes } = styles

    const initials = (str: string) => {
        return str.split(/\s+/).map((w,i) => i ? w.substring(0,1).toUpperCase() + '.' : w).join(' ')
    }
    if(!results) {
        return (
            <div>Загрузка...</div>
        )
    }
    return (  
        <TableContainer sx={{mb: exports ? 10 : 0, width: '100%'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={tablehead}>#</TableCell>
                        {head.map((item, i) => (
                        <TableCell sx={tablehead} key={i} style={{width: item.size === '' ? 'auto' : `${item.size}px`}}>
                            {item.name}
                        </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {results?.map((row: any, index: number) => (
                <TableRow key={index}>
                    <TableCell sx={th}>
                        {index+1}
                    </TableCell>
                    <TableCell sx={th}>
                        {/* ({row.id}) */}
                        <u onClick={() => GetReport(row.id)} style={classes}>
                            {dayjs(row.datetime).format('YYYY-MM-DD, HH:mm:ss')}
                        </u>
                    </TableCell>
                    <TableCell sx={th}>
                        Исходящее {row.method} информирование
                    </TableCell>
                    <TableCell sx={th}>
                        {row.caller.split(',').length}
                    </TableCell>                                      
                    <TableCell sx={th}>
                        {initials(`${row.user.last_name} ${row.user.first_name}`)}
                    </TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}