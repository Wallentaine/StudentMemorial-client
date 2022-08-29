import React, {useState} from 'react'
import MemorialHeaderInput from "./UI/inputs/MemorialHeaderInput"
import {memorialCustomHeaders} from "../utils/memorialCustomHeaders"
import '../styles/userPage.css'

const UserPageMemorialRedactor = () => {

    const [isSelected, setIsSelected] = useState('')

    const selectMemorialHeader = (path) => {
        if (isSelected !== path) {
            setIsSelected(path)
        }
    }

    return (
        <div className="userPage__redactor">
            <div className="userPage__redactor__title">Редактор</div>
            <div className="userPage__redactor__window">
                <div className="userPage__redactor__window__img__header">
                    <img src={isSelected} alt=""/>
                </div>
                <div className="userPage__redactor__window__img">

                </div>
            </div>
            <div className="userPage__redactor__select">
                {memorialCustomHeaders.map(({path, name}) =>
                    <MemorialHeaderInput key={name} id={name} name="memorialCustomHead" value={name} path={path} selectMemorialHeader={selectMemorialHeader}/>
                )}
            </div>
        </div>
    )
}

export default UserPageMemorialRedactor