import { Box } from '@mui/material'
import { Button } from '../../ui/button/Button'
import contents from '../../styles/MainLayout.module.css'


export function SearchForm()
{
    return (
        <Box sx={{ display: 'flex', gap: '10px', mb: 3 }}>
            <input 
                type="search" 
                name="search" 
                defaultValue={''}
                className={contents.search} 
                autoComplete='off'
                placeholder='Поиск' 
            />
            <Button color='info'>Искать</Button>                
        </Box>
    )
}