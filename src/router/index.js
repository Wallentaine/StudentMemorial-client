import {
    AUTH_ROUTE,
    ERROR_ROUTE,
    MAIN_ROUTE,
    MEMORIAL_ROUTE,
    MEMORIALS_ROUTE,
    USER_MEMORIAL_ROUTE
} from "../utils/consts"
import Error from "../pages/Error"
import Memorial from "../pages/Memorial"
import Auth from "../pages/Auth"
import UserPage from "../pages/UserPage"
import MemorialPage from "../pages/MemorialPage"

export const unauthorizedRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
]

export const privateRoutes = [
    {
        path: USER_MEMORIAL_ROUTE,
        Component: UserPage
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Memorial
    },
    {
        path: MEMORIALS_ROUTE,
        Component: Memorial
    },
    {
        path: MEMORIAL_ROUTE + '/:id',
        Component: MemorialPage
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
]