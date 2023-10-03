import { Box, Paper } from '@mui/material'
import contents from '../../styles/MainLayout.module.css'

interface Person {
    photo: string;
    name: string;
    division: string;
    phone: string;
    location: string;
}

interface Card {
    label?: boolean;
    user: Person | null;
}

export function PersonCard({label = true, user = null}: Card)
{
    return (
        <Paper sx={{ width: '700px', bgcolor: '#fff', boxShadow: 3, p: 2  }}>
            <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                <div>
                    <img src={user?.photo} alt={user?.name} />
                </div>
                <div style={{position: 'relative', width: '100%'}}>
                    <ul className={contents['person-card']}>
                        <li>
                            <strong>ФИО</strong>
                            <p>{user?.name}</p>
                        </li>
                        <li>
                            <strong>Подразделение</strong>
                            <p>{user?.division}</p>
                        </li>
                        <li>
                            <strong>Номер телефона</strong>
                            <p>{user?.phone}</p>
                        </li>
                        <li>
                            <strong>Локация</strong>
                            <p>{user?.location}</p>
                        </li>
                    </ul>   
                    {label &&
                        <div className={`${contents.label} ${contents['label-success']}`}>
                            На работе
                        </div>                     
                    }
                </div>
            </Box>
            <img src="/img/map.png" style={{width: '100%', marginTop: '10px'}} alt="Карта" />           
        </Paper>  
    )
}