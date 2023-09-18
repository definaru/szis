import { AppBar, Typography, Button, Toolbar } from '@mui/material'


interface Navigate {
    previous: string;
    next: string;
    setUrl: (e: string) => void
}

export function NavigatePerson({previous, next, setUrl}: Navigate)
{
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        disabled={previous ? false : true}
                        onClick={() => setUrl(previous)}
                    >
                        Предыдущий
                    </Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        disabled={next ? false : true}
                        onClick={() => setUrl(next)}
                    >
                        Следующий
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}