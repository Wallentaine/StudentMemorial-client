import React, {useContext, useEffect} from 'react'
import '../styles/memorial.css'
import MemorialItem from "../components/MemorialItem"
import {Context} from "../index"
import {fetchMemorials} from "../http/memorialAPI"
import {observer} from "mobx-react-lite";

const Memorial = observer(() => {

    const {memorial} = useContext(Context)

    useEffect(() => {
        fetchMemorials().then((data) => {
            memorial.setMemorials(data)
        })
    }, [memorial])

    return (
        <div className="Memorials">
            {memorial.memorials.map(memorial =>
                <MemorialItem key={memorial.id} memorial={memorial}/>
            )}
        </div>
    )
})

export default Memorial