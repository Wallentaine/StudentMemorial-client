import React, {useContext, useState, useEffect} from 'react'
import {Context} from "../index"
import {fetchCommentsById} from "../http/commentsAPI"
import Spinner from "./UI/loaders/Spinner"
import CommentItem from "./CommentItem"
import CommentForm from "./CommentForm"

const MemorialComments = ({...props}) => {

    const {user} = useContext(Context)

    const [loading, setLoading] = useState(true)

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsById(props.id).then(data => setComments(data)).finally(() => setLoading(false))
    }, [props.id])

    if (loading) return <div className="memorialPage__comments"><Spinner/></div>

    return (
        <div className="memorialPage__comments">
            <div className="memorialPage__comments__title">Пожелания</div>

            {user.isAuth && (user.user.id !== props.memorial.userId) && !comments.find((item) => item.userId === user.user.id) &&
                <CommentForm comments={comments} setComments={setComments} memorial={props.memorial}/>
            }

            {comments.map(item =>
                <CommentItem key={item.id} message={item.message}/>
            )}

        </div>
    )
}

export default MemorialComments