export function GetDataInfo()
{
    return [
        {
            operator: 'Билайн',
            action: true,
            process: 10,
            uid_message: 'Код',
            location: 'Москва, ул. Комсомольский проспект, 32',
            abonent_on_zone: 2000,
            abonent_off_zone: 2000,
            send_message: 2000,
            received: 2000,
            not_delivered: 2000
        },
        {
            operator: 'МТС',
            action: false,
            process: 50,
            uid_message: 'Код',
            location: '',
            abonent_on_zone: 1000,
            abonent_off_zone: 1000,
            send_message: 1000,
            received: 1000,
            not_delivered: 1000
        },
        {
            operator: 'Мегафон',
            action: true,
            process: 80,
            uid_message: 'Код',
            location: '',
            abonent_on_zone: 3000,
            abonent_off_zone: 3000,
            send_message: 3000,
            received: 3000,
            not_delivered: 3000
        },
        {
            operator: 'Теле2',
            action: true,
            process: 100,
            uid_message: 'Код',
            location: '',
            abonent_on_zone: 4000,
            abonent_off_zone: 4000,
            send_message: 4000,
            received: 4000,
            not_delivered: 4000
        }
    ]
}