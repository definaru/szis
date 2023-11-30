import { useState } from 'react'
import { Close } from '../../ui/icons/uiKit'
import { GetTableRef } from '../../data/GetTableRef'
import { Box, Modal, Button, Alert } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PutHandbook } from '../../../api/requests/PutHandbook'
import { Handbook } from '../../../models/Interfaces'
import modal from '../modal/Modal.module.css'
import { FormInputDropdown } from '../select/FormInputDropdown'
import { FormInputText } from '../input/FormInputText'


type Props = {
    open: boolean;
    contact: Handbook | any;
    setOpen: (newType: boolean) => void;
}

export function ModelTable({open, contact, setOpen}: Props)
{
    const {style, type_division, type_rank} = GetTableRef()
    const [responce, setResponce] = useState(false)
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Handbook>()

    const {id, rank, user, photo, name, phone, division, location, status}: any = contact

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
                
                {/* <pre>{JSON.stringify(contact, null, 4)}</pre> */}
                {/* {contact ? : 'Загрузка...'} */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{display: 'none'}}>
                        <input
                            type="hidden"
                            defaultValue={id}
                            {...register('id')}
                        />                        
                    </div>
                    <div style={{display: 'none'}}>
                        <input
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
                        <FormInputDropdown
                            name={'rank'}
                            control={control}
                            defaultValue={rank}
                            //rules={{ required: 'Выберите звание' }}
                            label={"Звания:"}
                            list={type_rank}
                        />
                    </div>
                    <div style={{display: 'none'}}>
                        <input
                            type="hidden"
                            defaultValue={user}
                            {...register('user')}
                        />                        
                    </div>
                    <div>
                        <FormInputText
                            name={'name'}
                            control={control}
                            label={"Ф.И.О.:"}
                            defaultValue={name}
                            rules={{ required: 'Введите имя контакта' }}
                        />
                    </div>
                    <div>
                        <FormInputText
                            name={'phone'}
                            control={control}
                            defaultValue={phone}
                            rules={
                                { 
                                    required: 'Укажите номер телефона контакта',
                                    pattern: {
                                        value: /[\d+]/,
                                        message: 'Допустимы только цифры и знак "+"'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "В телефоне не должно быть более 12 символов"
                                    }
                                }
                            }
                            label={"Номер телефона:"}
                        />                     
                    </div>
                    <div>
                        <FormInputDropdown
                            name={'division'}
                            control={control}
                            defaultValue={division}
                            rules={{ required: 'Выберите подразделение' }}
                            label={"Подразделение:"}
                            list={type_division}
                        />                      
                    </div>
                    <div>
                        <FormInputText
                            name={'location'}
                            control={control}
                            label={"Локация:"}
                            defaultValue={location}
                            rules={{ required: 'Напишите адрес' }}
                        />                     
                    </div>
                    <div style={{display: 'none'}}>
                        <input
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
                </form>
            </Box>
        </Modal>
    )
}