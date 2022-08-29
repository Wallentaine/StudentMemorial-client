import React from 'react'
import '../styles/userPage.css'
import AuthButton from "../components/UI/buttons/AuthButton"
import AuthInput from "../components/UI/inputs/AuthInput"
import UserPageMemorialRedactor from "../components/UserPageMemorialRedactor"

const UserPage = () => {

    return (
        <div className="UserPage">
            <div className="userPage__memorial__redactor">
                <div className="userPage__memorial__redactor__windows">
                    <UserPageMemorialRedactor/>
                    <div className="userPage__form">
                        <div className="userPage__form__title">Личные данные</div>
                        <AuthInput type="text" placeholder="Введите ФИО"/>
                        <AuthInput type="date"/>
                    </div>
                </div>
                <AuthButton>Сохранить</AuthButton>
            </div>
        </div>
    )
}

export default UserPage