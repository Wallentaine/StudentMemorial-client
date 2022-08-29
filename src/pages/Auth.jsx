import React, {useState} from 'react'
import '../styles/auth.css'
import AuthForm from '../components/AuthForm'

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="Auth">
            <div className="auth__modal">
                <div className="auth__title">{isLogin ? "Авторизация" : "Регистрация"}</div>
                <AuthForm title={isLogin ? "Войти" : "Зарегистрироваться"} isLogin={isLogin}/>
                <div className="auth__isSet__account">
                    <span>{isLogin ? "Нет аккаунта?" : "Есть аккаунт?"}</span>
                    <button onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Регистрация" : "Войти"}</button>
                </div>
            </div>
        </div>
    )
}

export default Auth