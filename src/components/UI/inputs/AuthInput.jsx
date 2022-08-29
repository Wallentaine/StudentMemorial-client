import React from 'react'
import classes from '../inputs/AuthInput.module.css'

const AuthInput = (props) => {
    return (
        <input
            className={classes.AuthInput}
            {...props}
        />
    )
}

export default AuthInput;