import dayjs from 'dayjs'
import { Close } from '../icons/uiKit'
import { Typography, Paper, Box, Button } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GetDataScenario } from '../../data/GetDataScenario'
import { Inform } from '../../../models/Interfaces'
import { Authtification } from '../../../api/context/Authtification'
import { useEffect, useState } from 'react'
import styles from '../form/Form.module.css'
import { PutInformation } from '../../../api/requests/PutInformation'


type Props = {
    edit: any | null;
    setEdit: (newType: string) => void;
    Update: (id: number, next: string) => void;
    setMessage: (newType: any) => void;
}

export function FormScenario({edit, setEdit, Update, setMessage}: Props) 
{
    const auth = Authtification()
    const schema = GetDataScenario()
    const { button } = schema
    const datatime = dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ssZ') 
    const [ state, setState ] = useState<{}>('')
    const {id, name, script, message, method, caller}: any = state
    const [ modified, setModified ] = useState(method)
    const [ select, setSelect ] = useState(script)
    const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm<Inform>()

    const onSubmit: SubmitHandler<Inform> = async(data) => {
        if(data) {
            const res = await PutInformation(data)
            console.log('Submit PutInformation:', res)
            res.error === true ? setMessage(false) : setMessage(res)
        }
    }

    const handleOptionChange = (event: any) => {
        setModified(event.target.value)
    }

    useEffect(() => {
        setState(edit)
    }, [state, watch])

    return (
        <Paper sx={{ my: 3, bgcolor: '#fff', boxShadow: 3, p: 2, color: '#000'  }}>
            <Box sx={{display: 'grid', width: '800px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography sx={{color: '#1C1C1C', fontSize: '24px', fontWeight: 500}}>
                        Обновление сценария:
                    </Typography> 
                    <button onClick={() => setEdit('')} className={styles.close}>
                        <Close color='#000' />
                    </button>
                </Box>
                {state !== '' && 
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        {/* <pre>{JSON.stringify(edit, null, 1)}</pre> */}
                        <input type="hidden" {...register('id')} defaultValue={id} />
                        <input type="hidden" {...register('user')} defaultValue={auth.user_id} />
                        <input type="hidden" {...register('datetime')} defaultValue={datatime} />
                        <div className={styles.field}>
                            <label>Название сценария</label>
                            <input 
                                type="text" 
                                {...register('name', {
                                    required: 'Введите название сценария'
                                })} 
                                defaultValue={name} 
                                className={styles['form-control']}
                            />
                            {errors.message && <small className={styles.error}>{errors.message.message}</small>}
                        </div>
                        <div className={styles.field}>
                            <label>Сценарий оповещения</label>
                            <select 
                                {...register('script', {
                                    required: 'Выберите сценарий оповещения'
                                })} 
                                defaultValue={'' && select} 
                                className={styles['form-control']}
                                onChange={(e: any) => setSelect(e.target.value)}
                            >
                                <option value="" disabled>Выберите сценарий</option>
                                {['по геолокации', 'по абонентам'].map((item, i) => (
                                <option value={item} key={i}>{item}</option>
                                ))}
                            </select>
                            {errors.script && <small className={styles.error}>{errors.script.message}</small>}
                        </div>
                        <div className={styles.field}>
                            <label>Сообщение</label>
                            <input 
                                type="text" 
                                {...register('message', {
                                    required: 'Введите сообщение'
                                })} 
                                placeholder='Введите сообщение...'
                                defaultValue={message} 
                                className={styles['form-control']} 
                            />
                            {errors.message && <small className={styles.error}>{errors.message.message}</small>}
                        </div>
                        <div className={styles['radio-wrapper']}>
                            {['USSD', 'DSTK', 'SMS'].map((item, i) => (
                                <label key={i} style={{display: 'flex'}}>
                                    <input 
                                        type="radio" 
                                        {...register('method', {
                                            required: '← Выберите метод отправки'
                                        })}
                                        value={item} 
                                        style={{display: 'block'}} 
                                        defaultChecked={modified === item || method === item ? true : false} 
                                        onChange={handleOptionChange}
                                    />
                                    {item}
                                </label>                            
                            ))}
                            {errors.method && <small className={styles.error}>{errors.method.message}</small>}
                        </div>
                        <div className={styles.field}>
                            <label>Список абонентов</label>
                            <input 
                                type="text" 
                                {...register('caller', {
                                    required: 'Укажите список абонентов'
                                })} 
                                defaultValue={caller} 
                                className={styles['form-control']} 
                                placeholder='Укажите список абонентов...'
                            />
                            {errors.caller && <small className={styles.error}>{errors.caller.message}</small>}
                        </div>
                        
                        <div>
                            <Button
                                //onClick={() => Update(edit.id, "Duchess, and that's why" )}
                                color='success' 
                                variant='contained' 
                                type='submit'
                                sx={button}
                            >
                                Информировать
                            </Button>                                
                        </div>                                
                    </form>                
                }
            </Box>  
        </Paper>
    )
}