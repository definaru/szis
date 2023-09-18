import { Typography } from '@mui/material'

interface Block {
    text: string;
}

export function BlockStatus({text}: Block)
{
    let colors

    switch (text) {
        case 'Удалено':
            colors = {mx: 1, px: 2, color: '#CC2128', bgcolor: '#FFC0C3', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
            break;
        case 'Ошибка':
            colors = {mx: 1, px: 2, color: '#CC2128', bgcolor: '#FFC0C3', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
            break;
        case 'В процессе':
            colors = {mx: 1, px: 2, color: '#D9AE00', bgcolor: '#FFF5CC', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
            break;
        case 'Приостановить':
            colors = {mx: 1, px: 2, color: '#D9AE00', bgcolor: '#FFF5CC', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
            break;
        case 'Успешно':
            colors = {mx: 1, px: 2, color: '#36B44C', bgcolor: '#CDFFD6', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
            break;
        case 'Отправить в работу':
            colors = {mx: 1, px: 2, color: '#36B44C', bgcolor: '#CDFFD6', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
            break;
        default:
            colors = {mx: 1, px: 2, color: '#999', bgcolor: '#ddd', borderRadius: '5px', lineHeight: '28px', display: 'inherit', boxShadow: 1};
    }
    
    return ( 
        // Удалено | Приостановить | Отправить в работу - text
        // #FFC0C3 | #FFF5CC | #CDFFD6 - background
        // #CC2128 | #D9AE00 | #36B44C - text color
        <Typography component='div' sx={colors}>{text}</Typography>
    )
}