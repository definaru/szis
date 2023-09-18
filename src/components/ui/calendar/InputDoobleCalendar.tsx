import { useState } from 'react'
import { Typography, Box } from '@mui/material'
import DateTimePicker from 'react-datetime-picker'
import styles from '../../styles/MainLayout.module.css'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export function InputDoobleCalendar()
{
    let date = new Date()

    const [start, setStart] = useState<Value | string>(date)
    const [end, setEnd] = useState<Value | string>(date)

    return (
        <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '408px', gap: '15px'}}>
            <div>
                <DateTimePicker
                    locale="ru"
                    className={styles['date-time-picker']}
                    closeWidgets={false}
                    format="с dd MMM y"
                    onChange={setStart}
                    value={start}
                />                        
            </div>
            <div>
                <DateTimePicker
                    locale="ru"
                    className={styles['date-time-picker']}
                    closeWidgets={false}
                    format="до dd MMM y"
                    onChange={setEnd}
                    value={end}
                />
            </div>
        </Box>
    )
}