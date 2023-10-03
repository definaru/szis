import { Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { TreeView } from '@mui/x-tree-view/TreeView'
import { TreeItem } from '@mui/x-tree-view/TreeItem'


export function LeftMenu()
{
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
                <TreeItem nodeId="1" label="Отдел">
                    <TreeItem nodeId="2" label="Calendar" />
                </TreeItem>
                <TreeItem nodeId="5" label="Отдел оповещения">
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="8" label="Материалы" />
                    </TreeItem>
                </TreeItem>
            </TreeView>
        </Paper>
    )
}