export function GetTableRef()
{
    return {
        th: {
            color: '#7C7C7C', 
            padding: '9px', 
            borderBottom: '1px solid #F6F6F6',
            cursor: 'pointer'
        },
        tablehead: {
            color: '#000', 
            padding: '4px 9px', 
            fontWeight: 600, 
            borderBottom: '1px solid #F6F6F6', 
            fontSize: '13px'
        },
        style: {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            bgcolor: '#0D1535',
            border: '2px solid #0D1535',
            borderRadius: '7px',
            boxShadow: 24,
            p: 4,
        },
        rows: [
            {name: 'ID', size: ''},
            {name: 'в/зв', size: '' },
            {name: 'Фото', size: ''},
            {name: 'ФИО', size: ''},
            {name: 'Номер телефона', size: ''},
            {name: 'Подразделение', size: ''}
        ],
        row: [
            {name: 'ID', size: ''},
            {name: 'в/зв', size: ''},
            {name: 'Фото', size: ''},
            {name: 'Фамилия', size: ''},
            {name: 'Имя', size: ''},
            {name: 'Отчество', size: ''},
            {name: 'Номер телефона', size: ''},
            {name: 'Подразделение', size: ''},
            {name: 'Локация', size: ''}
        ],
        type_rank: [
            {key: 'зяд.', value: 'Рядовой'},
            {key: 'ефр.', value: 'Ефрейтор'},
            {key: 'мл. ст', value: 'Младший сержант'},
            {key: 'с-т', value: 'Сержант'},
            {key: 'ст. с-т', value: 'Старший сержант'},
            {key: 'стр.', value: 'Старшина'},
            {key: 'п-к', value: 'Прапорщик'},
            {key: 'ст. п-к', value: 'Старший прапорщик'},
            {key: 'мл. л-т', value: 'Младший лейтенант'},
            {key: 'л-т', value: 'Лейтенант'},
            {key: 'ст. л-т', value: 'Старший лейтенант'},
            {key: 'м-р.', value: 'Майор'},
            {key: 'кп.', value: 'Капитан'},
            {key: 'кп. м-р', value: 'Капитан Майор'},
            {key: 'п-пк', value: 'Подполковник'},
            {key: 'п-к.', value: 'Полковник'},
            {key: 'грл. м-р.', value: 'Генерал майор'},
            {key: 'грл. л-т', value: 'Генерал лейтенант'},
            {key: 'грл. п-к.', value: 'Генерал полковник'},
            {key: 'грл. ар.', value: 'Генерал армии'},
            {key: 'мрл. РФ', value: 'Маршал Российской Федерации'}
        ],
        type_division: [
            {key: 'Инженер', value: 'Инженер'},
            {key: 'Руководство', value: 'Руководство'},
            {key: 'Монтажник службы', value: 'Монтажник службы'},
            {key: 'Механик службы', value: 'Механик службы'},
            {key: 'Бригадир службы', value: 'Бригадир службы'},
            {key: 'Начальник отдела', value: 'Начальник отдела'},
            {key: 'Отдел охраны', value: 'Отдел охраны'},
            {key: 'Отдел связи', value: 'Отдел связи'}
        ]
    }
}