import LoadingButton from '@mui/lab/LoadingButton'
import SaveIcon from '@mui/icons-material/Save'
import contents from '../../styles/AuthLayout.module.css'


export function LoadingButtons()
{
    return (
        <LoadingButton
            size="large"
            loading={true}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
            className={contents['btn-info']}
            disabled
        >
            <span>Загрузка...</span>
        </LoadingButton>
    )
}