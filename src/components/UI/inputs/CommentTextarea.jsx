import React from 'react'
import classes from '../inputs/CommentTextarea.module.css'

const CommentTextarea = ({children, ...props}) => {
    return (
        <textarea
            className={classes.CommentTextarea}
            {...props}
        >
            {children}
        </textarea>
    )
}

export default CommentTextarea