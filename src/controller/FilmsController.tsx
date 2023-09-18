import { Avatar, Box, Paper, Grid, Skeleton } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { GetDataFilms } from '../components/data/GetDataFilms'
import { styled } from '@mui/material/styles'


export function FilmsController(name: any)
{

    const films = GetDataFilms()
    const color = { bgcolor: deepPurple[500], width: '100%', height: 370, fontSize: 80 }
    
    const film = (data: string) => {
        const res = films.filter(n => n.url.includes(data))[0]
        //console.log('res', [].concat(res: any).sort((a: number, b: number) => a.episode_id > b.episode_id ? 1 : -1) )
        //.sort((a: number, b: number) => (a.episode_id - b.episode_id))
        return res
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    }));

    return (
        <Box sx={{ flexGrow: 1, py: 5 }}>
            <Grid container spacing={3}>
                {name.map((item: any, idx: number) => ( 
                    <Grid item xs={3} key={idx}>
                        <Item>
                            <p>
                                {name ?
                                    <Avatar
                                        alt={film(item).name}
                                        src={film(item).poster}
                                        variant='rounded'
                                        sx={color}
                                    /> :
                                    <Skeleton animation="wave" variant="rectangular" width={234} height={370} />                                   
                                }
                            </p>  
                            {name ?
                                <p>{film(item).name}</p> :
                                <p>
                                    <Skeleton animation="wave" height={30} />
                                    <Skeleton animation="wave" height={30} />
                                </p>
                            }
                            {/* {<pre>{JSON.stringify(film(item), null, 4)}</pre>} */}                              
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}