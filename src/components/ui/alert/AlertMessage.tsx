import Stack from '@mui/material/Stack'
import Alert, { AlertColor } from '@mui/material/Alert'


interface AlertData {
    message: string;
    color?: AlertColor;
}

export function AlertMessage({message, color = 'error'}: AlertData)
{
    return (
        <Stack sx={{ width: '100%', mb: 50 }} spacing={2}>
            <Alert severity={color}>{message}</Alert>
        </Stack>
    )
}