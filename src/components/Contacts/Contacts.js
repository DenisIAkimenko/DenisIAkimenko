import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contacts.css';
import { LeftCircleOutlined } from '@ant-design/icons';

export const Contacts = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(-1);
    };



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
                <p className="title">Контакты</p>
            </div>

            <div className="contact-text">
                Чтобы заказать работу или курс, просто свяжитесь со мной по любому виду связи.
            </div>

            <div className="mail-block">
                <p><strong>Почта:</strong> denisOverbarso@gmail.com</p>
                <p><strong>Telegram:</strong> @DenisIAkimenko</p>
                <p><strong>WhatsApp:</strong> +34 600390001</p>

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
