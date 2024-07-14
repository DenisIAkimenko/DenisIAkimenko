import React, {useEffect, useState} from 'react';
import './MainPageMobile.css';
import iAm from '../../files/iam.png';
import { useNavigate } from "react-router-dom";

export const MainPageMobile = () => {

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
        <div className="main-page-mob">
            <div>
                <div className='nav-mob'>
                    <nav className="nav">
                        <a onClick={turnRu}>Ru</a>
                        <a onClick={turnEn}>En</a>
                    </nav>
                </div>
                <header className="header-mob">
                    <div className="logo-mob">
                        <img className="ai-am-header-mob" src={iAm} alt="Main" />
                    </div>
                    <div className="title-mob">
                        <div className="d-ia-mob">Denis IAkimenko</div>
                        <div className="ai-d-mob">AI Developer</div>
                    </div>
                </header>
            </div>

            <div className="buttons-module-mob">
                <div className="info-main-mobile">
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
                                <>Для того, чтобы связаться со мной, напишите мне на почту <div style={{display: 'inline', fontSize: '11px', }}><strong>denisoverbarso@gmail.com</strong></div></> :
                                <>To contact me, please send an email <div style={{display: 'inline', fontSize: '11px', }}><strong>denisoverbarso@gmail.com</strong></div></>
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




            {/*<main className="content">*/}
            {/*    <main className="content-title">*/}
            {/*        <div>*/}
            {/*            <div>*/}
            {/*                <text className="main-title">Denis IAkimenko</text>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <text className="sub-title">AI Developer</text>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <img className="ai-am" src={iAm} alt="Main" />*/}

            {/*    </main>*/}

            {/*    <div className="main-section">*/}
            {/*        <img className="main-image" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/online-step2-card-tradein-202303?wid=750&hei=456&fmt=png-alpha&.v=1679589167296" alt="Main" />*/}
            {/*        <div className="main-text">*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="main-section">*/}
            {/*        <div className="main-text">*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.*/}
            {/*        </div>*/}
            {/*        <video controls className="square-video">*/}
            {/*            <source src={videoSrc} type="video/mp4" />*/}
            {/*            Your browser does not support the video tag.*/}
            {/*        </video>*/}
            {/*    </div>*/}
            {/*</main>*/}




            <div>
                <footer className="footer-mob">
                    <p>denisoverbarso@gmail.com</p>
                    <p>https://x.com/DenisIAkimenko</p>
                </footer>
            </div>
        </div>
    );
};
