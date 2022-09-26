import React, {useContext, useEffect, useState} from 'react'
import '../styles/userPage.css'
import AuthButton from "../components/UI/buttons/AuthButton"
import AuthInput from "../components/UI/inputs/AuthInput"
import UserPageMemorialRedactor from "../components/UserPageMemorialRedactor"
import {observer} from "mobx-react-lite"
import {Context} from "../index"
import MemorialData from "../components/MemorialData"
import MemorialComments from "../components/MemorialComments"
import {fetchMemorialByUserId} from "../http/memorialAPI"
import Spinner from "../components/UI/loaders/Spinner"

const UserPage = observer(() => {

    const {user} = useContext(Context)

    const [memorial, setMemorial] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMemorialByUserId(user.user.id).then((data) => {
            if (data) {
                setMemorial(data)
            }
        }).finally(() => setLoading(false))
    }, [])

    if (loading)
        return <div className="UserPage"><Spinner/></div>

    if (memorial.id) {
        return (
            <div className="UserPage">
                <MemorialData memorial={memorial}/>
                <MemorialComments id={memorial.id} memorial={memorial}/>
            </div>
        )
    } else {
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
})

export default UserPage