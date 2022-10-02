import React from 'react'
import '../styles/app.css'
import SearchInput from "./UI/inputs/SearchInput"


const NavbarForm = ({...props}) => {

    return (
        <SearchInput
            value={props.searchWords}
            type="text"
            placeholder="Найди своего друга..."
            onChange={(e) => props.setSearchWords(e.target.value)}
            onKeyPress={(e) => {
                if (e.code === "Enter")
                    e.preventDefault()
            }}
        />
    )
}

export default NavbarForm;