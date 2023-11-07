import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { Table, TableBody, Typography, TableCell, TableContainer, TableRow, Paper, Box, Skeleton } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { AvatarController } from '../../controller/AvatarController'
import { PlanetController } from '../../controller/PlanetController'
import { CountController } from '../../controller/CountController'
import { AlertMessage } from '../ui/alert/AlertMessage'
import { NavigatePerson } from '../ui/navigate/NavigatePerson'
import { fetchUsers } from '../../store/reducers/ActionCreation'
import { TopTableSection } from '../ui/table/TopTableSection'

import content from '../styles/MainLayout.module.css'


export function Person()
{
    const dispatch = useAppDispatch()
    //const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    const [url, setUrl] = useState<string>('https://swapi.dev/api/people/?format=json')
    //const {count, next, previous, results }: any = users

    // useEffect(() => {
    //     dispatch(fetchUsers(url))
    // }, [url])

    return (
        <MainLayout title='Persons'>
            <Typography variant="h3" gutterBottom component="div">
                Персонажи
            </Typography>

            {/* {isLoading && <p>Обождите, грузится...</p>} */}
            {/* {error ? <AlertMessage message={error} /> :
                <Box component="div">
                    <p>Всего персонажей: {count}</p>
                    <NavigatePerson previous={previous} next={next} setUrl={setUrl} />            
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TopTableSection head={[]} />
                            <TableBody>
                                {results?.map((item: any, i: any) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row">
                                            <Box component="div" sx={{ pl: 10 }}>
                                                {isLoading ? 
                                                    <div style={{height: '290px', marginTop: '-74px'}}>
                                                        <Skeleton 
                                                            animation="wave" 
                                                            width={156} 
                                                            height={350} 
                                                            style={{padding: 0, margin: 0}}
                                                        />                                                        
                                                    </div> :
                                                    AvatarController(item.name)
                                                }
                                            </Box>
                                        </TableCell>
                                        <TableCell align="left">
                                            {isLoading ? 
                                            <Skeleton variant="text" width={240} height={40} /> :
                                            <Typography variant="h6" gutterBottom component="div">
                                                <NavLink 
                                                    to={`/character/${decodeURIComponent(item.name).replace(/ /g,'+')}`} 
                                                    className={content.link}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </Typography>}
                                        </TableCell>
                                        <TableCell align="left">
                                            {isLoading ? 
                                            <Skeleton variant="text" width={240} height={40} /> :
                                            <Typography variant="h6" gutterBottom component="div">
                                                {PlanetController(item.homeworld)}
                                            </Typography>}
                                        </TableCell>
                                        <TableCell align="center">
                                            {isLoading ? 
                                            <Skeleton variant="text" width={200} height={40} /> :
                                            <Typography variant="h6" gutterBottom component="div">
                                                <CountController count={item.films.length} />
                                            </Typography>}
                                        </TableCell>  
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>    
                    <NavigatePerson previous={previous} next={next} setUrl={setUrl} />     
                </Box>
            } */}
        </MainLayout>
    )
}