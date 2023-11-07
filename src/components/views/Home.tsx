import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TextField, FormControlLabel, Checkbox, Button, Alert } from '@mui/material'
import { LoadingButtons } from '../ui/button/LoadingButton'
import { ModalResetPassword } from '../ui/modal/ModalResetPassword'
import { GetAuthUser } from '../../api/requests/GetAuthUser'
import contents from '../styles/AuthLayout.module.css'
import { HighlightSpanKind } from 'typescript'


export type Inputs = {
    email: string,
    password: string,
    remember: string
};

interface Error {
    error?: boolean;
    message?: string;
}

// interface Token {
//     token: string;
//     user_id: number;
//     email: string;
//     username: string;
//     first_name: string;
//     last_name: string;
// }

export function Home()
{
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
        if (data) {
            const auth = await GetAuthUser(data)
            console.log('Auth:', auth)
            setIsAuth(auth)
            if(auth.token) {
                setTimeout(() => navigate("/dashboard"), 1000)
            }            
        }
    }
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [isAuth, setIsAuth] = useState<Error | any>({})

    // useEffect(() => {

    // }, [])

    return (
        <AuthLayout title='Вход'>
            <form onSubmit={handleSubmit(onSubmit)} className={contents.box}>
                {isAuth?.error && <Alert severity="error">{isAuth?.message}</Alert>}
                <p className={contents.title}>Войти</p>
                <div>
                    <TextField
                        error={errors.email ? true : false}
                        fullWidth
                        label="Ваш логин" 
                        variant="outlined"
                        defaultValue=""
                        placeholder="Ваш логин"
                        {...register('email', { required: true })}
                        helperText={errors.email && 'Введите ваш логин'}
                    />                    
                </div>
                <div>
                    <TextField 
                        error={errors.password ? true : false}
                        fullWidth
                        type="password"
                        label="Введите пароль" 
                        variant="outlined"
                        defaultValue=""
                        placeholder="Введите пароль"
                        {...register('password', { required: true })}
                        helperText={errors.password && 'Укажите ваш пароль'}
                    />
                </div>
                <div>
                    <div className={contents.flex}>
                        {loading ? 
                            <LoadingButtons /> :
                            <Button
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
                        <span 
                            style={{cursor: 'pointer'}} 
                            onClick={() => setOpen(true)}
                            className={contents.link}
                        >
                            Восстановление пароля
                        </span>
                    </p>                
                </div>
                {/* <pre>{JSON.stringify(isAuth, null, 4)}</pre> */}
            </form>
            <ModalResetPassword open={open} setOpen={setOpen} />
        </AuthLayout>
    )
}