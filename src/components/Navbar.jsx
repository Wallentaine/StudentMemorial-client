import React from 'react'
import '../styles/navbar.css'
import {Link} from "react-router-dom"
import NavbarButton from "./UI/buttons/NavbarButton"
import {useNavigate} from "react-router-dom"
import {AUTH_ROUTE, MAIN_ROUTE, USER_MEMORIAL_ROUTE} from "../utils/consts"
import {useContext} from 'react'
import {Context} from "../index"
import {observer} from "mobx-react-lite"
import NavbarSearcher from "./NavbarSearcher";

const Navbar = observer(() => {

    const {user} = useContext(Context)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
        navigate(MAIN_ROUTE)
    }

    return (
        <div className="Navbar">

            <div className="navbar__logo">
                <Link to="/" className="navbar__logo__link">Студенческий мемориал</Link>
            </div>

            <NavbarSearcher/>

            {user.isAuth
                ?   <div className="navbar__links">
                        <Link className="links" to={USER_MEMORIAL_ROUTE}>Мой мемориал</Link>
                        <NavbarButton onClick={logout}>Выйти</NavbarButton>
                    </div>
                :   <div className="navbar__links">
                        <NavbarButton onClick={() => {navigate(AUTH_ROUTE)}}>Войти в аккаунт</NavbarButton>
                    </div>
            }

            <div className="navbar__underLine"></div>
        </div>
    )
})

export default Navbar