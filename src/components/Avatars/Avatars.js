import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Avatars.css';
import { LeftCircleOutlined } from '@ant-design/icons';
import iAm from '../../files/iam.png';
import videoSrc from "../../files/avatar-denis.mp4";
import programmerFat from '../../files/video-developer.mp4';
import canal1 from '../../files/therd.MP4';
import insta from '../../files/instagr.mp4';
import { Card, List } from 'antd';

const data = [
    {
        title: 'Структура занятия',
        content: 'Занятие проходит в виде личной встречи. Это не записанный курс. ' +
            'Мы последовательно проходим каждый этап в создании аватара. ' +
            'От создания шаблона нужного голоса и звукового фона до монтажа видео на фоне или создания студии для аватара. ' +
            'Занятие в среднем длится 1,5 часа, но время может отличаться. Все люди разные и мне важно, чтобы каждый кто проходит мое занятие понял и записал себе последовательность действий. ' +
            'Мы будем повторять действия на вашем компьютере вместе, чтобы вы самостоятельно прошли все варианты создания своего аватара.'
    },
    {
        title: 'После онлайн занятия',
        content: 'Вы начнете создавать абсолютно любых аватаров для своих соцсетей, для бизнеса или для дополнительно зароботка.'
    },
    {
        title: 'Что используем в работе',
        content: 'Инструмент, который позволяет оживить аватаров - приложение "D-iD". Вы можете изучить его самостоятельно. На онлайн занятии мы так же кратко рассмотрим аналоги, ' +
            'обсудим разницу, плюсы и минусы.'
    },
    {
        title: 'Почему этот урок подходит',
        content: 'Сейчас я предлагаю живую индивидуальную встречу. Это продуктвнее, чем записанный курс. ' +
            'Сразу во время обучения можно задать все вопросы и не тратить время на поиск дополнительной информации после занятия.' +
            'В ближайшее время я запишу курс для того, чтобы маштабировать свой проект. '
    },
];

export const Avatars = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };

    const handleButtonClick2 = () => navigate('/contacts');



    return (
        <div className="main-page-avatar">
            <div>
                <header className="header">
                    <div className="my-name-avatar" onClick={handleButtonClick}>
                        <div className="d-ia">
                            <LeftCircleOutlined />
                            &nbsp;
                            IAkimenko
                        </div>
                    </div>
                    <nav className="nav">
                        <a >Ru</a>
                        <a >En</a>
                    </nav>
                </header>
            </div>

            <div className="avatar-title">
                <p className="title">Личный Аватар. Ваше лицо. Ваш голос. Любой язык.</p>
            </div>

            {/*<div className="buttons-module-mob">*/}
            {/*    <button className="button-avatars" onClick={handleButtonClick}>АВАТАРЫ</button>*/}
            {/*</div>*/}

            <div className="buttons-module-avatar">
                <div className="frame-avatar">
                    <video controls className="video-avatar-denis">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
                <div className="frame-avatar">
                    <video controls className="video-avatar-denis">
                        <source src={canal1} type="video/mp4" />
                    </video>
                </div>
                <div className="frame-avatar-text">
                    <p className="price">Цена обучения <strong>5000</strong>₽ </p>
                    <p className="price">Обучение проходит в виде онлайн занятия.</p>
                    <p>Для записи, нажмите на кнопку </p>
                    <button className="button" onClick={handleButtonClick2}>Записаться</button>
                </div>
                <div className="frame-avatar">
                    <video controls className="video-avatar-fat">
                        <source src={programmerFat} type="video/mp4" />
                    </video>
                </div>
                <div className="frame-avatar">
                    <video controls className="video-avatar-inst">
                        <source src={insta} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="card-block">
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className="text-card">
                                    {item.content}
                                </p>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>


            <div>
                <footer className="footer-mob">
                    <p>denisoverbarso@gmail.com</p>
                    <br/>
                    <p>https://x.com/DenisIAkimenko</p>
                </footer>
            </div>
        </div>
    );
};
