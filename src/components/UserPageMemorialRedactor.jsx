import React, {useContext, useState} from 'react'
import MemorialHeaderInput from "./UI/inputs/MemorialHeaderInput"
import {memorialCustomHeaders} from "../utils/memorialCustomHeaders"
import '../styles/userPage.css'
import AuthButton from "./UI/buttons/AuthButton"
import AuthInput from "./UI/inputs/AuthInput"
import {createMemorial} from "../http/memorialAPI"
import {Context} from "../index"
import CommonTextarea from "./UI/inputs/CommonTextarea"
import {useNavigate} from "react-router-dom"
import {MAIN_ROUTE} from "../utils/consts";

const UserPageMemorialRedactor = () => {

    const navigate = useNavigate()

    const {user} = useContext(Context)
    const {memorial} = useContext(Context)


    const [isSelected, setIsSelected] = useState('')

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const selectMemorialHeader = (path) => {
        if (isSelected !== path) {
            setIsSelected(path)
        }
    }

    const create = (e) => {
        e.preventDefault()
        let data
        try {
            if (name.length < 255 && date.length >= 10 && description.length < 255 && isSelected !== '') {
                createMemorial(user.user.id, name, date, description, isSelected).then((data) => {
                    memorial.setMemorials(...memorial.memorials, data)
                }).finally(() => navigate(MAIN_ROUTE))
            } else {
                alert('Проверьте, все ли поля заполнены')
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div className="userPage__memorial__redactor">
            <div className="userPage__memorial__redactor__windows">
                <div className="userPage__redactor">
                    <div className="userPage__redactor__title">Редактор</div>
                    <div className="userPage__redactor__window">
                        <div className="userPage__redactor__window__img__header">
                            <img src={isSelected} alt=""/>
                        </div>
                        <div className="userPage__redactor__window__img"></div>
                    </div>

                    <div className="userPage__redactor__select">
                        {memorialCustomHeaders.map(({path, name}) =>
                            <MemorialHeaderInput
                                key={name}
                                id={name}
                                name="memorialCustomHead"
                                value={name}
                                path={path}
                                selectMemorialHeader={selectMemorialHeader}
                            />
                        )}
                    </div>

                </div>
                <div className="userPage__form">
                    <div className="userPage__form__title">Личные данные</div>
                    <AuthInput
                        type="text"
                        placeholder="Введите ФИО"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <AuthInput
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                    <div className="userPage__description">
                        <div className="userPage__form__desc">Доп. информация</div>
                        <CommonTextarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <AuthButton onClick={e => create(e)}>Сохранить</AuthButton>
        </div>
    )
}

export default UserPageMemorialRedactor