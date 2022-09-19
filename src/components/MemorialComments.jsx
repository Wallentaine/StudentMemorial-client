import React, {useContext, useState, useEffect} from 'react'
import CommentTextarea from "./UI/inputs/CommentTextarea"
import AuthButton from "./UI/buttons/AuthButton"
import {Context} from "../index"
import {useParams} from "react-router-dom";
import {fetchCommentsById} from "../http/commentsAPI";

const MemorialComments = () => {

    const {user} = useContext(Context)

    const {id} = useParams()

    const [comments, setComments] = useState([])



    useEffect(() => {
        fetchCommentsById(id).then(data => setComments(data))
    }, [])

    console.log(comments)

    return (
        <div className="memorialPage__comments">
            {user.isAuth &&
                <div className="memorialPage__comments__form">
                    <CommentTextarea placeholder='Введите пожелание...'></CommentTextarea>
                    <AuthButton>Отправить пожелание</AuthButton>
                </div>
            }
            {comments.map(item =>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title"></div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">{item.message}</div>
                    <div className="memorialPage__comment__divideLine"></div>
                </div>
            )}
        </div>
    )
}

export default MemorialComments