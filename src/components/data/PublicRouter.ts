import { Home } from '../views/Home'
import { Locator } from '../views/Locator'
import { Characters } from '../views/Characters'
import { NoMatch } from '../views/NoMatch'
import { Scenario } from '../views/Scenario'
import { Dashboard } from '../views/Dashboard'
import { Directory } from '../views/Directory'
import { Reports } from '../views/Reports'
import { Settings } from '../views/Settings'
import { Users } from '../views/Users'
import { Map } from '../views/Map'


export function PublicRouter()
{
    return [
        {
            path: '/',
            element: Home
        },
        {
            path: '/dashboard',
            element: Dashboard
        },        
        {
            path: '/map',
            element: Map
        },        
        {
            path: '/scenario',
            element: Scenario
        },
        {
            path: '/locator',
            element: Locator
        },
        {
            path: '/directory',
            element: Directory
        },
        {
            path: '/reports',
            element: Reports
        },
        {
            path: '/settings',
            element: Settings
        },
        {
            path: '/users',
            element: Users
        },
        {
            path: '/character/:name',
            element: Characters
        },
        {
            path: '*',
            element: NoMatch
        },
    ]
}