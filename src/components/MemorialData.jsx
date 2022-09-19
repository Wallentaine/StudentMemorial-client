import React from 'react'
import dgtu from "../assets/images/dgtu.png"

const MemorialData = ({...props}) => {

    const memorialDate = new Date(props.memorial.date).toLocaleDateString()

    return (
        <div className="memorialPage__allData">
            <div className="memorialPage__fullName">{props.memorial.name}</div>
            <div className="memorialPage__date">{memorialDate}</div>
            <div className="memorialPage__info">
                <div className="memorialPage__memorial">
                    <div className="memorialPage__memorial__head"><img src={dgtu} alt=""/></div>
                    <div className="memorialPage__memorial__img"></div>
                </div>
                <div className="memorialPage__description">
                    <div className="memorialPage__description__title">Описание</div>
                    <div className="memorialPage__description__text">{props.memorial.description}</div>
                </div>
            </div>
        </div>
    )
}

export default MemorialData