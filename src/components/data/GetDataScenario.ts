export function GetDataScenario()
{
    return {
        td: {
            color: '#7C7C7C', 
            padding: '9px', 
            borderBottom: '1px solid #F6F6F6'
        },
        tablehead: {
            color: '#000', 
            padding: '0 9px', 
            fontWeight: 600, 
            borderBottom: '1px solid #F6F6F6', 
            fontSize: '13px'
        },
        head: [
            {name: 'ID', size: '200'},
            {name: 'Название сценария', size: ''},
            {name: '', size: '150'}
        ],
        body: [
            {
                id: 1,
                name: 'Оповещение отдела охраны'
            },
            {
                id: 2,
                name: 'Оповещение личного состава Управления'
            },
            {
                id: 3,
                name: 'Оповещение руководства'
            }
        ],
        button: {
            borderRadius: '10px',
            textTransform: 'capitalize',
            bgcolor: '#36B44C',
            px: 4
        },
        close: {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
        }
    }
}