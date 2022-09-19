import React, {useContext} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {unauthorizedRoutes, privateRoutes, publicRoutes} from "../router"
import {ERROR_ROUTE} from "../utils/consts"
import {Context} from "../index"
import {observer} from "mobx-react-lite"


const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {!user.isAuth && unauthorizedRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Navigate to={ERROR_ROUTE}/>}/>
        </Routes>
    )
})

export default AppRouter