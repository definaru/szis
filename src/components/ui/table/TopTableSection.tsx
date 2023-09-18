import { TableCell, TableHead, TableBody, TableRow, TableContainer } from '@mui/material'
import { ReactChild, ReactFragment, ReactPortal, Key } from 'react'

interface ArrayHead {
    head: string[],
    body?: Array<string[]> // | ...never[]...string[]
    
}

export function TopTableSection({head = [], body = []}: ArrayHead)
{
    const tableStylefirst = {
        color: '#000', 
        padding: '9px 6px', 
        fontWeight: 600, 
        borderBottom: '1px solid #F6F6F6',    
        borderLeft: '7px solid #fff',
        borderRight: '7px solid #fff',
    }
    const tableStyle = {
        color: '#000', 
        padding: '9px 6px', 
        fontWeight: 600, 
        borderBottom: '1px solid #F6F6F6',    
        borderLeft: '7px solid #fff',
        borderRight: '7px solid #fff',
        width: '300px'
    }
    const tablecellfirst = {
        color: '#7C7C7C', 
        padding: '9px 6px', 
        borderBottom: '1px solid #F6F6F6', 
        borderLeft: '7px solid #fff',
        borderRight: '7px solid #fff',
    }
    const tablecell = {
        color: '#7C7C7C', 
        padding: '9px 6px', 
        borderBottom: '1px solid #F6F6F6', 
        borderLeft: '7px solid #fff',
        borderRight: '7px solid #fff',
    }

    return (
        <TableContainer sx={{my: 1}}>
            <TableHead>
                <TableRow>
                    <TableCell sx={{color: '#000', bgcolor: '#F6F6F6', padding: '9px', fontWeight: 600, borderBottom: '1px solid #F6F6F6'}}>ID</TableCell>
                    {head.map((item, i) => (
                        <TableCell key={i} sx={i > 2 ? tableStyle : tableStylefirst}>{item}</TableCell>
                    ))}
                </TableRow>
            </TableHead>   
            {body ? 
            <TableBody>
                {body.map((row, index) => (
                <TableRow
                    key={index}
                    //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row" sx={{color: '#000', bgcolor: '#F6F6F6', padding: '9px', borderBottom: '1px solid #F6F6F6'}}>
                        0{index+1}
                    </TableCell>
                    <TableCell sx={tablecellfirst}>
                        {row[0]}
                    </TableCell>
                    <TableCell sx={tablecellfirst}>
                        {row[1]}
                    </TableCell>
                    <TableCell sx={tablecell}>
                        {row[2]}
                    </TableCell>
                    <TableCell sx={tablecell}>
                        {row[3]}
                    </TableCell>
                    <TableCell sx={tablecell}>
                        {row[4]}
                    </TableCell>
                    <TableCell sx={tablecell}>
                        {row[5]}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody> 
            : ''} 
        </TableContainer>
    )
}