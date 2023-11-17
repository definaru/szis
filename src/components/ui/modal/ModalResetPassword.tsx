import { useState } from 'react'
import { TextField, Button, Box, Modal } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Close } from '../../ui/icons/uiKit'
import { LoadingButtons } from '../button/LoadingButton'
import { Pattern } from '../../helper/validator/EmailValidation'
import { ResetPassword } from '../../../api/requests/ResetPassword'
import { GetResetPasswordText } from '../../data/GetResetPasswordText'
import contents from '../../styles/AuthLayout.module.css'


type Props = {
    open: boolean;
    setOpen: (newType: boolean) => void;
}

export type Inputs = {
    email: string
}

export function ModalResetPassword({open, setOpen}: Props)
{
    const resetdata = GetResetPasswordText()
    const { required_email, required_pattern, modal, style } = resetdata
    const [ send, setSend ] = useState(modal)    
    const [ error, setError ] = useState<any>(null)    
    const [ loading, setLoading ] = useState(false)

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        setLoading(true)
        setTimeout(() => setLoading(false), 1300)
        const pass = await ResetPassword(data)
        if(pass.is_valid) {
            setSend({
                header: pass.header,
                message: pass.message,
                textbutton: 'Вернуться',
                is_valid: pass.is_valid
            })
            setError(null)
            reset()
        } else {
            setError(pass)
        }
    }

    const Restart = () => {
        setSend(modal)
        setOpen(false)
        setError(null)
    }

    const HelperTextError = () => {
        if(errors.email) return errors.email.message;
        if (error) return error.message;
    }


    return (
        <Modal open={open} className={contents.modal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={style}>
                    <div className={contents.flex}>
                        <h2>{send.header}</h2>
                        <p onClick={Restart}>
                            <Close />
                        </p>
                    </div>

                    <p className={contents.description}>
                        {send.message}
                    </p>
                    <TextField
                        error={errors.email || error ? true : false}
                        fullWidth
                        label="Электронная почта"
                        defaultValue=""
                        {...register('email', { 
                            required: required_email,
                            pattern: {
                                value: Pattern,
                                message: required_pattern
                            }
                        })}
                        helperText={HelperTextError()}
                        placeholder="Ваша электронная почта"
                        autoComplete='off'
                    />
                    {send.textbutton !== 'Вернуться' ?
                    <Box sx={{ mt: 2 }}>
                        {loading ?
                            <LoadingButtons /> :
                            <Button
                                size="large"
                                type="submit"
                                variant="contained" 
                                className={contents.info}
                            >
                                {send.textbutton}
                            </Button>
                        }
                    </Box> : 
                    <Button
                        className={contents.success}
                        size="large" 
                        sx={{ mt: 2 }}
                        variant="contained"
                        onClick={Restart}
                    >
                        {send.textbutton}
                    </Button>}
                </Box>                
            </form>
        </Modal>
    )
}