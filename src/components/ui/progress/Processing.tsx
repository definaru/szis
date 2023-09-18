import { Box } from '@mui/material'

interface Bar {
    start: number;
}

export function Processing({start = 0}: Bar)
{
    const wrapper = {
        height: '20px',
        position: 'relative',
        color: '#9C9C9C', 
        bgcolor: '#F6F6F6',
        borderRadius: '20px',
        fontSize: '14px',
        lineHeight: '11px',
        textAlign: 'center'
    }

    const progress = {
        height: '100%',
        boxShadow: '0 0 10px #00000026',
        position: 'absolute',
        borderRadius: '20px',
        bgcolor: '#364687',
        py: 1,
        px:2        
    }

    const bar = {
        position: 'relative',
        filter: `brightness(${start+50}%)`,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }

    return (
        <Box sx={wrapper}>
            <Box sx={progress} style={{width: `${start}%`}} />  
            <Box sx={bar}>Processing {start}/100</Box>
        </Box>
    )
}