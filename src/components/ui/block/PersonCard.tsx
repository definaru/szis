import { Box, Paper } from '@mui/material'
import { Status } from '../label/Status'
import { Person } from '../../../models/Interfaces'
import contents from '../../styles/MainLayout.module.css'


interface Card {
    label?: boolean;
    person: Person | null;
}

export function PersonCard({person = null}: Card)
{
    const { photo, name, phone, subdivision, location, status }: any = person
    const photouser = photo === null ? '/img/user/default.png' : photo

    return (
        <Paper sx={{ width: '800px', bgcolor: '#fff', boxShadow: 3, p: 2  }}>
            <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                <div>
                    <img src={photouser} alt={name} style={{width: '130px', borderRadius: '7px'}} />
                </div>
                <div style={{position: 'relative', width: '100%'}}>
                    <ul className={contents['person-card']}>
                        <li>
                            <strong>ФИО</strong>
                            <p>{name}</p>
                        </li>
                        <li>
                            <strong>Подразделение</strong>
                            <p>{subdivision}</p>
                        </li>
                        <li>
                            <strong>Номер телефона</strong>
                            <p>{phone}</p>
                        </li>
                        {location &&
                            <li>
                                <strong>Локация</strong>
                                <p>{location}</p>
                            </li>                        
                        }
                    </ul>   
                    <div className={contents.label}>
                        {status && <Status text='На работе' />}
                    </div>
                </div>
            </Box>
            {location &&
                <img 
                    src="/img/map.png" 
                    style={{width: '100%', marginTop: '20px'}} 
                    alt="Карта" 
                /> 
            }
        </Paper>  
    )
}