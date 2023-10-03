import * as React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import type {} from '@mui/x-tree-view/themeAugmentation'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Public from './routes/Public'


export default function App() 
{
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
            },
            components: {
                MuiTreeItem: {
                    styleOverrides: {
                        label: {
                            padding: '7px 0'
                        },
                        content: {
                            padding: '0 15px',
                            borderBottom: '1px solid #F6F6F6',
                            '&:active': {
                                color: '#222',
                                backgroundColor: '#F6F6F6',
                            }                          
                        },
                        root: {
                            backgroundColor: '#fff',
                            color: '#7C7C7C'
                        }
                    }
                }
            }
        }),
        [prefersDarkMode],
    )

    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Public />
        </ThemeProvider>
    )
}