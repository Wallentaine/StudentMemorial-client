import React, {useContext, useState} from 'react'
import CommentTextarea from "./UI/inputs/CommentTextarea"
import AuthButton from "./UI/buttons/AuthButton"
import {createNewComment} from "../http/commentsAPI"
import {Context} from "../index"


const CommentForm = ({comments, setComments, memorial}) => {

    const {user} = useContext(Context)

    const [message, setMessage] = useState('')

    const addComment = (e) => {
        e.preventDefault()
        if (message !== '') {
            createNewComment(user.user.id, memorial.id, message).then((data) => {
                setComments([...comments, data])
                setMessage('')
            })
        }
    }

    return (
        <div className="memorialPage__comments__form">
            <CommentTextarea
                placeholder='Введите пожелание...'
                value={message}
                onChange={e => {
                    setMessage(e.target.value)
                }}
            >
            </CommentTextarea>
            <AuthButton onClick={e => addComment(e)}>Отправить пожелание</AuthButton>
        </div>
    )
}

export default CommentForm