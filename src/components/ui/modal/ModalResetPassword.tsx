import { useState } from 'react'
import { TextField, Button, Box, Modal } from '@mui/material'
import { Close } from '../../ui/icons/uiKit'
import contents from '../../styles/AuthLayout.module.css'

type Props = {
    open: boolean;
    setOpen: (newType: boolean) => void;
}

export function ModalResetPassword({open, setOpen}: Props)
{
    const modal = {
        header: 'Восстановить пароль',
        text: 'Новый пароль будет выслан на вашу электронную почту',
        textbutton: 'Получить новый пароль'
    }
    const [send, setSend] = useState(modal)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 425,
        bgcolor: '#0D1535',
        border: 'none',
        borderRadius: '12px',
        boxShadow: 24,
        p: 3,
    }
    
    
    const Restart = () => {
        setSend(modal)
        setOpen(false)
    }
    const isSend = () => setSend({
        header: 'Отлично! Проверьте почту.',
        text: 'Мы отправили новый пароль на вашу почту',
        textbutton: 'Вернуться'
    })

    return (
        <Modal open={open} className={contents.modal}>
            <Box sx={style}>
                <div className={contents.flex}>
                    <h2>{send.header}</h2>
                    <p onClick={Restart}>
                        <Close />
                    </p>
                </div>

                <p className={contents.description}>
                    {send.text}
                </p>
                <TextField
                    fullWidth
                    label="Электронная почта"
                    defaultValue="" // name@mail.com
                    placeholder="Ваша электронная почта"
                />
                {
                    send.textbutton === 'Вернуться' ? 
                        <Button
                            className={contents.success}
                            size="large" 
                            sx={{ mt: 2 }}
                            variant="contained"
                            onClick={Restart}
                        >
                            {send.textbutton}
                        </Button> :
                        <Button
                            className={contents.info}
                            size="large" 
                            sx={{ mt: 2 }}
                            variant="contained"
                            onClick={isSend}
                        >
                            {send.textbutton}
                        </Button>
                }

            </Box>
        </Modal>
    )
}