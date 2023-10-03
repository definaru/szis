import { Dashboard, Map, Scenario, Locator, Directory, Reports, Settings, Users } from '../ui/icons/uiKit'

export function GetMenu()
{
    return [
        {
            url: '/dashboard',
            name: 'Dashboard',
            icon: Dashboard
        },
        {
            url: '/map', // Карта
            name: 'Массовое информирование',
            icon: Map
        },
        {
            url: '/scenario',
            name: 'Выбор сценариев',
            icon: Scenario
        },
        {
            url: '/info',
            name: 'Информирование',
            icon: Map
        },
        {
            url: '/locator',
            name: 'Трекинг', // (локатор)
            icon: Locator
        },
        {
            url: '/directory',
            name: 'Справочник', // Телефонный справочник (верхний)
            icon: Directory // Сценарии информирования
        },
        {
            url: '/reports',
            name: 'Отчеты',
            icon: Reports
        },
        {
            url: '/settings',
            name: 'Настройки',
            icon: Settings
        },
        {
            url: '/users',
            name: 'Пользователи',
            icon: Users
        }
    ]
}