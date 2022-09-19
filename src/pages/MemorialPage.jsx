import React from 'react'
import '../styles/memorialPage.css'
import dgtu from '../assets/images/dgtu.png'
import CommentTextarea from "../components/UI/inputs/CommentTextarea"
import AuthButton from "../components/UI/buttons/AuthButton";

const MemorialPage = () => {
    return (
        <div className="MemorialPage">
            <div className="memorialPage__allData">
                <div className="memorialPage__fullName">Колесниченко Алексей Владимирович</div>
                <div className="memorialPage__date">30.11.1999</div>
                <div className="memorialPage__info">
                    <div className="memorialPage__memorial">
                        <div className="memorialPage__memorial__head"><img src={dgtu} alt=""/></div>
                        <div className="memorialPage__memorial__img"></div>
                    </div>
                    <div className="memorialPage__description">
                        <div className="memorialPage__description__title">Описание</div>
                        <div className="memorialPage__description__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                            cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                            omnis praesentium quisquam similique tenetur veritatis vitae.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                            cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                            omnis praesentium quisquam similique tenetur veritatis vitae.
                        </div>
                    </div>
                </div>
            </div>
            <div className="memorialPage__comments">
                <div className="memorialPage__comments__form">
                    <CommentTextarea placeholder='Введите пожелание...'></CommentTextarea>
                    <AuthButton>Отправить пожелание</AuthButton>
                </div>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                        cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                        omnis praesentium quisquam similique tenetur veritatis vitae.
                    </div>
                </div>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                        cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                        omnis praesentium quisquam similique tenetur veritatis vitae.
                    </div>
                </div>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                        cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                        omnis praesentium quisquam similique tenetur veritatis vitae.
                    </div>
                </div>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                        cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                        omnis praesentium quisquam similique tenetur veritatis vitae.
                    </div>
                </div>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                        cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                        omnis praesentium quisquam similique tenetur veritatis vitae.
                    </div>
                </div>
                <div className="memorialPage__comment">
                    <div className="memorialPage__comment__title">Колесниченко Алексей Владимирович</div>
                    <div className="memorialPage__comment__divideLine"></div>
                    <div className="memorialPage__comment__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis,
                        cupiditate debitis deleniti eius et ex facere, fugit harum id illo iste nostrum
                        omnis praesentium quisquam similique tenetur veritatis vitae.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemorialPage