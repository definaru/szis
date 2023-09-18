import { useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Typography, Button, Box, Paper, Toolbar, Grid, Skeleton } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchOneCharacters } from '../../store/reducers/ActionCreation'
import { AvatarController } from '../../controller/AvatarController'
import { FilmsController } from '../../controller/FilmsController'
import { AlertMessage } from '../ui/alert/AlertMessage'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { LoadingCharacters } from '../ui/LoadingCharacters'
//import contents from '../styles/MainLayout.module.css'


export function Characters() // LoadingCharacters.tsx
{
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const names = params.name
    
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)

    const { results }: any = users
    const { name, height, mass, hair_color, skin_color, eye_color, films }: any = results[0]

    useEffect(() => {
        dispatch(fetchOneCharacters(names))
    }, [names])

    return (
        <MainLayout title='...'>
            <Toolbar>
                <Box component="div" sx={{ flexGrow: 1, mb: 5}}>
                    <Button onClick={() => navigate(-1)} startIcon={<ChevronLeftIcon />}>
                        {`Go Back`}
                    </Button>
                </Box>
            </Toolbar>
            
            {error ? 
            <AlertMessage message={error} /> :
            <Paper>
                <Box component="div" sx={{ p: 5 }}>
                    {isLoading ? 
                    <LoadingCharacters /> :
                    <>
                        <Typography variant="h4" gutterBottom component="div">
                            <strong>Характеристики:</strong> {name}
                        </Typography>    
                        <Box sx={{ flexGrow: 1, py: 5 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    {name && AvatarController(name, 300, 400)}
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="subtitle1" gutterBottom component="div">
                                        <p><b>Рост:</b> {height} см</p>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">
                                        <p><b>Вес:</b> {mass} кг</p>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">
                                        <p><b>Цвет волос:</b> {hair_color}</p>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">
                                        <p><b>Цвет глаз:</b> {eye_color}</p>
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div">
                                        <p><b>Цвет кожи:</b> {skin_color}</p>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </>}
                    <hr />
                    {FilmsController(films)}
                </Box>
            </Paper>}       
        </MainLayout>
    )
}