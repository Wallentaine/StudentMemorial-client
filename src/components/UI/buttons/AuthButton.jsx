import React from 'react'
import classes from "./AuthButton.module.css";

const AuthButton = ({children, ...props}) => {
    return (
        <button className={classes.AuthButton} {...props}>
            {children}
        </button>
    )
}

export default AuthButton