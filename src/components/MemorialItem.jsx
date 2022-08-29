import React from 'react'
import '../styles/memorial.css'
import {Link} from "react-router-dom"
import {MEMORIALS_ROUTE} from "../utils/consts";
import dgtu from '../assets/images/dgtu.png'

const MemorialItem = () => {

    let index = 2

    return (
        <div className="memorial__item__block">
            <Link to={MEMORIALS_ROUTE + '/' + index} className="memorial__item__link">
                <div className="memorial__item__custom__head">
                    <img src={dgtu} alt=""/>
                </div>
                <div className="memorial__item"></div>
                <div className="memorial__item__nameTag">
                    Колесниченко Алексей Владимирович
                </div>
                <div className="memorial__item__date">
                    30.11.1999
                </div>
            </Link>
        </div>
    )
}

export default MemorialItem;