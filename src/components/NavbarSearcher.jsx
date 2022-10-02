import React, {useMemo, useState} from 'react'
import NavbarForm from "./NavbarForm"
import {Link, useNavigate} from "react-router-dom"
import {MEMORIALS_ROUTE} from "../utils/consts"
import {searchMemorials} from "../http/memorialAPI"

const NavbarSearcher = () => {

    const [searchWords, setSearchWords] = useState('')
    const [data, setData] = useState([])

    const navigate = useNavigate()

    useMemo(() => {
        if (searchWords === '' || searchWords.length < 5) {
            setData([])
        }
        if (searchWords.length >= 5) {
            setTimeout(() => {
                searchMemorials(searchWords).then((data) => {
                    setData(data)
                })
            }, 1000)
        }
    }, [searchWords])

    return (
        <div className="navbar__searcher">
            <NavbarForm searchWords={searchWords} setSearchWords={setSearchWords}/>
            <div className="searchedBlock">
                {data.map((item) =>
                    <Link
                        key={item.id}
                        to={MEMORIALS_ROUTE + '/' + item.id}
                        onClick={() => {
                            setData([])
                            setSearchWords('')
                        }}
                    >
                        <div className="searchedItem">{item.name + ' ' + new Date(item.date).toLocaleDateString()}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default NavbarSearcher