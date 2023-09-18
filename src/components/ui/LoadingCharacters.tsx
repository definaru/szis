import { Typography, Box, Grid, Skeleton } from '@mui/material'

export function LoadingCharacters()
{
    return (
        <>
            <Typography variant="h4" gutterBottom component="div">
                <div style={{display: 'flex'}}>
                    <Skeleton variant="text" width={200} height={60} style={{marginRight: '20px'}} />
                    <Skeleton variant="text" width={200} height={60} />
                </div>
            </Typography>    
            <Box sx={{ flexGrow: 1, py: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Skeleton animation="wave" variant="rectangular" width={300} height={400} />
                    </Grid>
                    <Grid item xs={8}>
                        <Skeleton variant="text" animation="wave" width={200} height={50} />
                        <Skeleton variant="text" animation="wave" width={200} height={50} />
                        <Skeleton variant="text" animation="wave" width={200} height={50} />
                        <Skeleton variant="text" animation="wave" width={200} height={50} />
                        <Skeleton variant="text" animation="wave" width={200} height={50} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}