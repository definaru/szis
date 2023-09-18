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
            url: '/map',
            name: 'Карта',
            icon: Map
        },
        {
            url: '/scenario',
            name: 'Выбор сценариев',
            icon: Scenario
        },
        {
            url: '/locator',
            name: 'Локатор',
            icon: Locator
        },
        {
            url: '/directory',
            name: 'Справочник',
            icon: Directory
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