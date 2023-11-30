import { Box, Button } from '@mui/material'

type Props = {
    exports: string;
}

export function ButtonsExport({exports}: Props) 
{
    const classes = {color: '#fff', borderRadius: '10px', textTransform: 'none', px: 4}
    const getExport = () => {
        const href = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PREFFIX}/information/?format=${exports}`
        return window.open(href, '_blank')?.focus();
    }

    return (  
        <Box sx={{ display: 'flex', gap: 2}}>
            <Button 
                sx={classes}
                variant="contained" 
                color="success" 
                onClick={() => getExport()}
            >
                Скачать .{exports} файл
            </Button>
            <Button 
                color='info'
                sx={classes}
                variant="contained" 
            >
                Показать
            </Button>
        </Box> 
    )
}