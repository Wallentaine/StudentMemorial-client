import React from 'react'
import '../styles/memorial.css'
import {Link} from "react-router-dom"
import {MEMORIALS_ROUTE} from "../utils/consts";
import dgtu from '../assets/images/dgtu.png'

const MemorialItem = ({memorial}) => {

    const memorialDate = new Date(memorial.date).toLocaleDateString()

    return (
        <div className="memorial__item__block">
            <Link to={MEMORIALS_ROUTE + '/' + memorial.id} className="memorial__item__link">
                <div className="memorial__item__custom__head">
                    <img src={dgtu} alt=""/>
                </div>
                <div className="memorial__item"></div>
                <div className="memorial__item__nameTag">
                    {memorial.description}
                </div>
                <div className="memorial__item__date">
                    {memorialDate}
                </div>
            </Link>
        </div>
    )
}

export default MemorialItem;