import React, {useContext} from 'react'
import CommentTextarea from "./UI/inputs/CommentTextarea"
import AuthButton from "./UI/buttons/AuthButton"
import {observer} from "mobx-react-lite"
import {Context} from "../index"

const MemorialComments = observer(() => {

    const {user} = useContext(Context)

    return (
        <div className="memorialPage__comments">
            {user.isAuth &&
                <div className="memorialPage__comments__form">
                    <CommentTextarea placeholder='Введите пожелание...'></CommentTextarea>
                    <AuthButton>Отправить пожелание</AuthButton>
                </div>
            }
            <div className="memorialPage__comment">
                <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                <div className="memorialPage__comment__divideLine"></div>
                <div className="memorialPage__comment__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                    cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                    omnis praesentium quisquam similique tenetur veritatis vitae.
                </div>
                <div className="memorialPage__comment__divideLine"></div>
            </div>
        </div>
    )
})

export default MemorialComments