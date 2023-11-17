import { useState } from 'react'
import { Close } from '../icons/uiKit'
import { Box, Paper, Button, createTheme, ThemeProvider, IconButton } from '@mui/material'
import { GetTableRef } from '../../data/GetTableRef'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Handbook } from '../../../models/Interfaces'
import { FormInputText } from '../input/FormInputText'
import { FormInputDropdown } from '../select/FormInputDropdown'
import { BytesToSize } from '../../helper/digital/BytesToSize'
import { PostHandbook } from '../../../api/requests/PostHandbook'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'


type Props = {
    open: boolean;
    setOpen: (newType: boolean) => void;
    setAdd: (newType: any) => void;
}

export function CreatePerson({open, setOpen, setAdd}: Props)
{
    const form = GetTableRef()
    const [modified, setModified] = useState<any | null>()
    const [file, setFile] = useState<string | null>()
    const { register, handleSubmit, control, watch, reset, formState: { errors } } = useForm<Handbook>()
    const theme = createTheme({palette: {mode: 'light'}})
    
    const hendleFiles = (event: any) => {
        let image = URL.createObjectURL(event.target.files[0])
        setFile(image);
        setModified(event.target.files[0])
    }

    const { type_rank, type_division } = form
    const onSubmit: SubmitHandler<Handbook> = async(data) => {
        if (data) {
            const bookdata = await PostHandbook(data, modified)
            //console.log('Submit Post Handbook:', bookdata)
            setAdd(bookdata)
            reset()
            setOpen(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{ width: '800px', bgcolor: '#fff', boxShadow: 3, p: 2  }}>
                <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                    <strong>Создаём нового пользователя</strong>
                    <div style={{cursor: 'pointer'}}>
                        <div onClick={() => setOpen(false)}><Close /></div>
                    </div>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                        <label>
                            <input 
                                type="file" 
                                {...register('photo')}  
                                accept=".jpg, .jpeg, .png" 
                                onChange={hendleFiles}
                                style={{display: 'none'}}
                            />   
                            {file ? 
                                <img 
                                    alt="Preview" 
                                    src={file.toString()} 
                                    style={{
                                        borderRadius: '7px', 
                                        width: '130px'
                                    }} 
                                /> : 
                                <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                                    <IconButton sx={{p: 2}}>
                                        <AddAPhotoIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                    <div>
                                        Выберите фотографию<br />
                                        <small><i style={{color: '#999'}}>( Допустимый формат: .jpg, .jpeg, .png )</i></small>
                                    </div>
                                </div>
                            }                                                     
                        </label>
                        {modified &&
                            <div>
                                <p><b>Имя файла:</b> {modified?.name}</p>
                                <p><b>Размер файла:</b> {BytesToSize(modified?.size)}</p>
                                <p><b>Тип файла:</b> {modified?.type}</p>
                                <p><small><i style={{color: '#999'}}>( Для выбора другого фото, кликните по фотографии )</i></small></p>
                            </div>                        
                        }
                    </Box>
                    <div style={{width: '100%'}}>
                        <FormInputDropdown
                            name={'rank'}
                            control={control}
                            rules={{ required: 'Выберите звание' }}
                            label={"Звание:"}
                            list={type_rank}
                        />
                    </div>   
                    <div>
                        <FormInputText
                            name={'name'}
                            control={control}
                            rules={{ required: 'Обязательно укажите полное имя контакта' }}
                            label={"Ф.И.О.:"}
                        />
                    </div>  
                    <div>
                        <FormInputText
                            name={'phone'}
                            control={control}
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
                            label={"Номер телефона: (+79990009900)"}
                        />
                    
                    </div>
                    <div>
                        <FormInputDropdown
                            name={'subdivision'}
                            control={control}
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
                        />
                    </div>
                    <input type="hidden" {...register('status')} defaultValue={'false'} />  
                    <div>
                        <Button 
                            type="submit" 
                            size='large' 
                            style={{ borderRadius: '10px !important', textTransform: 'capitalize'}}
                            variant="contained" 
                        >
                            Создать
                        </Button>
                    </div>         
                </form>
            </Paper>            
        </ThemeProvider>

    )
}