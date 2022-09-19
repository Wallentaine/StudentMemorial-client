import React from 'react'
import dgtu from "../assets/images/dgtu.png"

const MemorialData = () => {

    return (
        <div className="memorialPage__allData">
            <div className="memorialPage__fullName">фио</div>
            <div className="memorialPage__date">дата</div>
            <div className="memorialPage__info">
                <div className="memorialPage__memorial">
                    <div className="memorialPage__memorial__head"><img src={dgtu} alt=""/></div>
                    <div className="memorialPage__memorial__img"></div>
                </div>
                <div className="memorialPage__description">
                    <div className="memorialPage__description__title">Описание</div>
                    <div className="memorialPage__description__text">Опис</div>
                </div>
            </div>
        </div>
    )
}

export default MemorialData