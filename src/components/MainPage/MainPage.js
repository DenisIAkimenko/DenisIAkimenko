import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import iAm from '../../files/iam.png';

export const MainPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/avatars'); // Замените '/avatars' на нужный вам маршрут
    };
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const userLang = navigator.language || navigator.languages[0];
        if (userLang.substring(0, 2) === 'ru') setLang('ru');
    }, []);

    const turnRu = () => {
        setLang('ru');
    }
    const turnEn = () => {
        setLang('en');
    }

    return (
        <div className="main-page">
            <div>
                <header className="header">
                    <div className="logo">
                        <img className="ai-am-header" src={iAm} alt="Main" />
                    </div>
                    <div>
                        <div className="d-ia">Denis IAkimenko</div>
                        <div className="ai-d">AI Developer</div>
                    </div>
                    <nav className="nav">
                        <a onClick={turnRu}>Ru</a>
                        <a onClick={turnEn}>En</a>
                    </nav>
                </header>
            </div>

            <div className="buttons-module-mob">
                <div className="info-main">
                    <div>
                        <p style={{color: 'green'}}>
                            {lang === 'ru' ?
                                'Привет! Меня зовут Денис, я увлекаюсь нейросетями и изучаю новые разработки и продукты от лучших AI компаний.' :
                                'Hi! My name is Denis, I am interested in neural networks and study new developments and products from the best AI companies.'
                            }
                        </p>
                        <p style={{color: 'blue'}}>
                            {lang === 'ru' ?
                                <>Я предлагаю свои услуги в обучении взаимодействию с искусственным интеллектом,
                                    в создании <strong>личных аватаров</strong>, видео с ними, генерации контента и <strong>голоса</strong>,
                                    созданию своих GPTs и написанию эффективных промптов.<br/>
                                    Так же произвожу <strong>любой контент под ключ</strong>.</> :
                                <>I offer my services in training interaction with artificial intelligence, in creating <strong>personal avatars</strong>, videos with them, generating content and <strong>voice</strong>,
                                    creating my own GPTs and writing effective prompts.<br/>
                                    I also create <strong>any type of turnkey content</strong>.</>
                            }
                        </p>
                        <p style={{color: 'gray'}}>
                            {lang === 'ru' ?
                                <>Обучение проходит в виде живого онлайн занятия, где вы получите практические знания без лишней теории, по конкретной выбранной теме.</> :
                                <>The training takes place in the form of a live online session, where you will gain practical knowledge without unnecessary theory on a specific chosen topic.</>
                            }
                        </p>
                        <p style={{color: 'green'}}>
                            {lang === 'ru' ?
                                <>Для того, чтобы связаться со мной, напишите мне на почту <div style={{display: 'inline', fontSize: '22px', }}><strong>denisoverbarso@gmail.com</strong></div></> :
                                <>To contact me, please send an email <div style={{display: 'inline', fontSize: '22px', }}><strong>denisoverbarso@gmail.com</strong></div></>
                            }
                        </p>
                    </div>
                </div>
            </div>


            <div className="buttons-module-mob">
                {lang === 'ru' ?
                    <p>Раздел находится в разработке</p> :
                    <p>The section is under development</p>
                }
                {/*/!*onClick={handleButtonClick}*!/*/}
                {/*<button className="button-avatars-mob">*/}
                {/*    {lang === 'ru' ?*/}
                {/*        'АВАТАРЫ' :*/}
                {/*        'AVATARS'*/}
                {/*    }*/}
                {/*</button>*/}
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

