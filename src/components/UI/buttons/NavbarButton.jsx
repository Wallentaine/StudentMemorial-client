import React from 'react'
import classes from "./NavbarButton.module.css"

const NavbarButton = ({children, ...props}) => {
    return (
        <button className={classes.NavbarButton} {...props}>
            {children}
        </button>
    )
}

export default NavbarButton;