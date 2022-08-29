import React, {useState} from 'react'
import '../styles/app.css'
import SearchInput from "./UI/inputs/SearchInput"

const NavbarForm = () => {

    const [searchWords, setSearchWords] = useState('')

    const search = (words) => {
        if (words.length > 4) {
            console.log(searchWords)
        }
        setSearchWords(words)
    }

    return (
        <SearchInput
            value={searchWords}
            type="text"
            placeholder="Найди своего друга..."
            onChange={e => search(e.target.value)}
            onKeyPress={(e) => {
                if (e.code === "Enter")
                    e.preventDefault()
            }}
        />
    )
}

export default NavbarForm;