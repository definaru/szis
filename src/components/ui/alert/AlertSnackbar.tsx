import React, { useState } from 'react'
import {Alert, IconButton} from '@mui/material'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import CloseIcon from '@mui/icons-material/Close'


interface State extends SnackbarOrigin {
    open: boolean;
    message: string;
}

interface Action {
    open: boolean;
    message: string;
    isError?: boolean;
}

export function AlertSnackbar({open = false, message = '', isError = false}: Action) 
{
    const [state, setState] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        message: ''
    })
    const { vertical, horizontal } = state
    
    const handleClose = () => setState({ ...state, open: false })

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )

    return (  
        <Snackbar
            open={open}
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={6000}
            onClose={handleClose}
            key={vertical + horizontal}
            action={action}
        >
            {isError ?
            <Alert sx={{width: '100%', bgcolor: '#b30404' }} severity="error">{message}</Alert> :
            <Alert sx={{width: '100%', bgcolor: '#007a15' }} severity="success">{message}</Alert>}
        </Snackbar>
    )
}