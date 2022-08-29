import React, {useContext, useState} from 'react'
import AuthInput from "./UI/inputs/AuthInput"
import AuthButton from "./UI/buttons/AuthButton"
import {useNavigate} from "react-router-dom"
import {MAIN_ROUTE} from "../utils/consts"
import {login, registration} from "../http/userAPI"
import {Context} from "../index"

const AuthForm = ({...props}) => {

    const {user} = useContext(Context)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = async (e) => {
        e.preventDefault()
        let data
        try {
            if (props.isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <form>
            <AuthInput
                type="text"
                placeholder="Введите email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <AuthInput
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <AuthButton onClick={auth}>{props.title}</AuthButton>
        </form>
    )
}

export default AuthForm