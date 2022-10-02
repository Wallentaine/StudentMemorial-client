import React from 'react'
import classes from './CommonTextarea.module.css'


const CommonTextarea = ({children, ...props}) => {
    return (
        <textarea className={classes.CommonTextarea} {...props}>
            {children}
        </textarea>
    )
}

export default CommonTextarea