import { Paper, Typography } from '@mui/material'
import { TreeView } from '@mui/x-tree-view/TreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { GetDivision } from '../../../api/requests/GetDivision'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'


export function LeftMenu()
{
    const dispatch = useAppDispatch()
    const [ open, setOpen ] = useState(false)
    const { res, isLoading, error } = useAppSelector(state => state.materialReducer)
    const { results }: any = res

    useEffect(() => {
        if(open) {
            dispatch(GetDivision())
        }
    }, [open])

    return (
        <Paper sx={{ width: '100%', bgcolor: '#fff', boxShadow: 2  }}>
            <Typography variant="h6" sx={{px: 2, py: 1, color: '#1C1C1C', fontSize: '22px', fontWeight: 600, borderBottom: '1px solid #F6F6F6'}}>
                Департамент
            </Typography>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem nodeId="1" label="Отделы" onClick={() => setOpen(prev => !prev)}>
                    {isLoading && <TreeItem nodeId="2" label='Загрузка...' />}
                    {results?.map((item: any, i: number) => (
                        <TreeItem key={i} nodeId={`${i+1+item.id}`} label={item.value} />
                    ))}  
                    {error && <TreeItem nodeId="200" label={error} />}                  
                </TreeItem>
            </TreeView>
            {/* {process.env.NODE_ENV === 'development' ? 'is development' : process.env.REACT_APP_BASE_URL} */}

        </Paper>
    )
}