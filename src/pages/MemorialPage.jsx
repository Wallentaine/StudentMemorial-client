import React, {useEffect, useState} from 'react'
import '../styles/memorialPage.css'
import MemorialData from "../components/MemorialData"
import MemorialComments from "../components/MemorialComments"
import {useParams} from "react-router-dom"
import {fetchOneMemorial} from "../http/memorialAPI"

const MemorialPage = () => {

    const [memorial, setMemorial] = useState({})

    const {id} = useParams()

    useEffect(() => {
        fetchOneMemorial(id).then(data => setMemorial(data))
    }, [])

    return (
        <div className="MemorialPage">
            <MemorialData memorial={memorial}/>
            <MemorialComments/>
        </div>
    )
}

export default MemorialPage