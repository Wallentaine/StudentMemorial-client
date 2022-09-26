import React from 'react'

const CommentItem = ({...props}) => {


    return (
        <div className="memorialPage__comment">
            <div className="memorialPage__comment__title"></div>
            <div className="memorialPage__comment__divideLine"></div>
            <div className="memorialPage__comment__text">{props.message}</div>
            <div className="memorialPage__comment__divideLine"></div>
        </div>
    )
}

export default CommentItem