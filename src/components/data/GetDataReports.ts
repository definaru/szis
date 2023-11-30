export function GetDataReports() 
{
    return {
        th: {
            color: '#7C7C7C', 
            padding: '9px', 
            borderBottom: '1px solid #F6F6F6'
        },
        tablehead: {
            color: '#000', 
            padding: '4px 9px', 
            fontWeight: 600, 
            borderBottom: '1px solid #F6F6F6', 
            fontSize: '13px'
        },
        icon: { 
            width: '40px', 
            paddingRight: '7px' 
        },
        classes: {
            color: '#006af2',
            cursor: 'pointer'
        },
        head: [
            {name: 'Дата', size: ''},
            {name: 'Событие', size: ''},
            {name: 'Количество сообщений', size: ''},
            {name: 'Оператор', size: ''}
        ],
        body: [
            {
                date: '2023-10-01',
                event: 'Исходящее USSD информирование',
                description: '1231',
                user: 'Иванов И.И.'
            },
            {
                date: '2023-10-02',
                event: 'Исходящее USSD информирование',
                description: '124',
                user: 'Иванов И.И.'
            },
            {
                date: '2023-10-03',
                event: 'Исходящее USSD информирование',
                description: '1',
                user: 'Сидоров И.Д.'
            },
            {
                date: '2023-10-04',
                event: 'Исходящее USSD информирование',
                description: '18',
                user: 'Иванов И.И.'
            },
            {
                date: '2023-10-05',
                event: 'Исходящее USSD информирование',
                description: '6',
                user: 'Иванов И.И.'
            }
        ]
    }
}