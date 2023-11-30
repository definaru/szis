import { Button as DivButton } from '@mui/material'
import contents from '../button/Button.module.css'


interface ViewButton {
    children: React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    href?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'success' | 'error' | 'info' | 'warning' | string;
    onClick?: () => void;
}

export function Button({
    children,
    fullWidth = false, 
    disabled = false, 
    href = '', 
    size = 'small', 
    variant = 'contained', 
    color = 'success',
    onClick
}: ViewButton)
{

    let colors
    switch (color) {
        case 'info':
            colors = 'btn-info';
            break;
        case 'success':
            colors = 'btn-success';
            break;
        case 'warning':
            colors = 'btn-warning';
            break;
        case 'error':
            colors = 'btn-danger';
            break;
        default:
            colors = 'btn-success';
    }    

    return (
        <DivButton 
            fullWidth={fullWidth}
            disabled={disabled} 
            sx={{textTransform: 'inherit'}} 
            className={contents[`${colors}`]} 
            variant={variant} 
            size={size}
        >
            &#160;&#160;{children}&#160;&#160;
        </DivButton>
    )
}