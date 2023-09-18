
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TextField, FormControlLabel, Checkbox, Button, Box, Modal } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import { Close } from '../ui/icons/uiKit'
import contents from '../styles/AuthLayout.module.css'

type Inputs = {
    email: string,
    password: string,
    remember: string
};

export function Home()
{
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        if (data) {
            setLoading(true)
            setTimeout(() => navigate("/dashboard"), 1000);
        }
    }
    const modal = {
        header: 'Восстановить пароль',
        text: 'Новый пароль будет выслан на вашу электронную почту',
        textbutton: 'Получить новый пароль'
    }
    const [open, setOpen] = useState(false)
    const [send, setSend] = useState(modal)
    const [loading, setLoading] =  useState(false)
    const isSend = () => setSend({
        header: 'Отлично! Проверьте почту.',
        text: 'Мы отправили новый пароль на вашу почту',
        textbutton: 'Вернуться'
    })
    const Restart = () => {
        setSend(modal)
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

    return (
        <AuthLayout title='Вход'>
            <form onSubmit={handleSubmit(onSubmit)} className={contents.box}>
                <p className={contents.title}>Войти</p>
                <p>
                    <TextField
                        fullWidth
                        label="Ваш логин" 
                        variant="outlined"
                        defaultValue="rodichkin"
                        placeholder="Ваш логин"
                        {...register("email")}
                        //InputProps={{readOnly: true}} 
                    />
                </p>
                <p>
                    <TextField 
                        id="outlined-read-only-input" 
                        fullWidth
                        type="password"
                        label="Введите пароль" 
                        variant="outlined"
                        defaultValue="Montserrat"
                        placeholder="Введите пароль"
                        {...register("password")}
                        //InputProps={{readOnly: true}}
                    />
                </p>
                <div>
                    <div className={contents.flex}>

                        {loading ? 
                            <LoadingButton
                                //color="primary"
                                size="large"
                                loading={true}
                                loadingPosition="start"
                                startIcon={<SaveIcon />}
                                variant="contained"
                                className={contents['btn-info']}
                                disabled
                            >
                                <span>Загружается...</span>
                            </LoadingButton> :
                            <Button 
                                //color="info"
                                size="large"
                                type="submit"
                                variant="contained" 
                                className={contents['btn-info']}
                            >
                                &#160;&#160;&#160;&#160;Войти&#160;&#160;&#160;&#160;
                            </Button> 
                        }
                        <FormControlLabel
                            {...register("remember")}
                            control={<Checkbox color="info" />} 
                            className={contents.checkbox} 
                            label="Запомнить меня" 
                        />                          
                    </div>
                    <p className={contents['text-center']}>
                        <a 
                            href="#" 
                            onClick={() => setOpen(true)}
                            className={contents.link}
                        >
                            Восстановление пароля
                        </a>
                    </p>                
                </div>                
            </form>
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
                        defaultValue="name@mail.com"
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
        </AuthLayout>
    )
}