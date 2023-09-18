import React, { useState } from 'react'
import { TextField, Button, Box, Modal, Typography } from '@mui/material'
import contents from '../../styles/AuthLayout.module.css'
import { Close } from '../icons/uiKit'

type Props = {
    state: boolean;
}

export function ModalBox({ state }: Props)
{
    const [open, setOpen] = useState(state)
    const Restart = () => {
        setOpen(false)
    }
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

    function getRandomArbitrary(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <Modal open={open} className={contents.modal}>
            <Box sx={style}>
                <div className={contents.flex}>
                    <h2>Двухфакторная аутентификация</h2>
                    <p onClick={Restart}>
                        <Close />
                    </p>
                </div>

                <p className={contents.description}>
                    Мы отправили код на номер +7(495)083-56-97
                </p>
                <TextField
                    fullWidth
                    label="Код подтверждения"
                    defaultValue={getRandomArbitrary(100000, 999999)}
                    placeholder="Код подтверждения"
                />
                <Typography sx={{py: 1}}>
                    <a href="#" style={{color: '#63A7FF', fontWeight: 300, fontSize: '14px'}}>Отправить код повторно</a>
                </Typography>
                <Button
                    className={contents.info}
                    size="large"
                    variant="contained"
                    onClick={Restart}
                >
                    Продолжить
                </Button>
            </Box>
        </Modal>
    )
}