import React, {useContext, useEffect, useState} from 'react'
import '../styles/memorial.css'
import MemorialItem from "../components/MemorialItem"
import {Context} from "../index"
import {fetchMemorials} from "../http/memorialAPI"
import {observer} from "mobx-react-lite";
import Spinner from "../components/UI/loaders/Spinner";

const Memorial = observer(() => {

    const {memorial} = useContext(Context)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchMemorials().then((data) => {
            memorial.setMemorials(data)
        }).finally(() => setLoading(false))
    }, [memorial])

    if (loading)
        return <div className="loader"><Spinner/></div>

    return (
        <div className="Memorials">
            {memorial.memorials.map(memorial =>
                <MemorialItem key={memorial.id} memorial={memorial}/>
            )}
        </div>
    )
})

export default Memorial