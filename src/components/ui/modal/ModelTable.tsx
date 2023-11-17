import { useState } from 'react'
import { Close } from '../../ui/icons/uiKit'
import { GetTableRef } from '../../data/GetTableRef'
import { TextField, Box, Modal, Button, Alert } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PutHandbook } from '../../../api/requests/PutHandbook'
import { Handbook } from '../../../models/Interfaces'
import modal from '../modal/Modal.module.css'


type Props = {
    open: boolean;
    contact: Handbook[];
    setOpen: (newType: boolean) => void;
}

export function ModelTable({open, contact, setOpen}: Props)
{
    const {style} = GetTableRef()
    const [responce, setResponce] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Handbook>()

    const {id, rank, user, photo, name, phone, subdivision, location, status}: any = contact || {}

    const onSubmit: SubmitHandler<Handbook> = async(data) => {
        if (data) {
            const bookdata = await PutHandbook(data)
            console.log('Submit Handler:', bookdata)  
            setResponce(true)  
            setTimeout(() => setResponce(false), 2000)  
        }
    }

    return (
        <Modal open={open} onClose={setOpen}>
            <Box sx={style}>
                <div className={modal.flex}>
                    <h2>Обновить запись</h2>
                    <p onClick={() => setOpen(false)} style={{cursor: 'pointer'}}>
                        <Close />
                    </p>
                </div>
                {contact ?                 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display: 'none'}}>
                        <TextField
                            type="hidden"
                            defaultValue={id}
                            {...register('id')}
                        />                        
                    </div>
                    <div style={{display: 'none'}}>
                        <TextField
                            type="hidden"
                            defaultValue={photo}
                            {...register('photo')}
                        />                        
                    </div>
                    <div style={{display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'space-between'}}>
                        <label>
                            {photo ? <img src={photo} alt="Фотография" style={{borderRadius: '7px'}} /> : 'Выберите фото'}
                            <input type="file" accept=".jpg, .jpeg, .png" style={{display: 'none'}} />
                        </label>
                        {responce && <Alert severity="success">Запись успешно обновлена</Alert>}
                    </div>                     
                    <div>
                        <TextField
                            error={errors.rank ? true : false}
                            fullWidth
                            label="Выберите звание" 
                            variant="outlined"
                            defaultValue={rank}
                            placeholder="Выберите звание"
                            {...register('rank', { required: true })}
                            helperText={errors.rank && 'Выберите звание'}
                        />                        
                    </div>
                    <div style={{display: 'none'}}>
                        <TextField
                            type="hidden"
                            defaultValue={user}
                            {...register('user')}
                        />                        
                    </div>
                    <div>
                        <TextField
                            error={errors.name ? true : false}
                            fullWidth
                            label="Ф.И.О." 
                            variant="outlined"
                            defaultValue={name}
                            {...register('name', { required: true })}
                            helperText={errors.name && 'Введите имя контакта'}
                            placeholder="Ваше имя"
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <TextField
                            error={errors.phone ? true : false}
                            fullWidth
                            label="Телефоны" 
                            variant="outlined"
                            defaultValue={phone}
                            {...register('phone', { required: true })}
                            helperText={errors.phone && 'Номер телефона'}
                            placeholder="Номер телефона"
                            autoComplete='off'
                        />                        
                    </div>
                    <div>
                        <TextField
                            error={errors.subdivision ? true : false}
                            fullWidth
                            label="Подразделение" 
                            variant="outlined"
                            defaultValue={subdivision}
                            {...register('subdivision', { required: true })}
                            helperText={errors.subdivision && 'Выбрать подразделение'}
                            placeholder="Выбрать подразделение"
                            autoComplete='off'
                        />                        
                    </div>
                    <div>
                        <TextField
                            error={errors.location ? true : false}
                            fullWidth
                            label="Локация" 
                            variant="outlined"
                            defaultValue={location}
                            {...register('location', { required: true })}
                            helperText={errors.location && 'Напишите адрес'}
                            placeholder="Напишите адрес"
                            autoComplete='off'
                        />                        
                    </div>
                    <div style={{display: 'none'}}>
                        <TextField
                            type="hidden"
                            defaultValue={status}
                            {...register('status')}
                        />                        
                    </div>
                    <div>
                        <Button 
                            type="submit" 
                            size='large' 
                            className={modal['btn-info']}
                            variant="contained" 
                        >
                            Редактировать
                        </Button>
                    </div>
                </form> : 'Загрузка...'}
            </Box>
        </Modal>
    )
}