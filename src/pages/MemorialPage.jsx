import React, {useEffect, useState} from 'react'
import '../styles/memorialPage.css'
import MemorialData from "../components/MemorialData"
import MemorialComments from "../components/MemorialComments"
import {useParams} from "react-router-dom"
import {fetchOneMemorial} from "../http/memorialAPI"
import Spinner from "../components/UI/loaders/Spinner"

const MemorialPage = () => {

    const [memorial, setMemorial] = useState({})

    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        fetchOneMemorial(id).
        then(data => setMemorial(data)).
        finally(() => setLoading(false))
    }, [id])

    if (loading)
        return <div className="loader"><Spinner/></div>

    return (
        <div className="MemorialPage">
            <MemorialData memorial={memorial}/>
            <MemorialComments id={id} memorial={memorial}/>
        </div>
    )
}

export default MemorialPage