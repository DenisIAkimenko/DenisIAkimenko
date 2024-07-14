import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AvatarsMobile.css';
import {LeftCircleOutlined} from "@ant-design/icons";

export const AvatarsMobile = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className="main-page">
            <div>
                <header className="header-mobile">
                    <div className="my-name-avatar" onClick={handleButtonClick}>
                        <div className="d-ia-mobile">
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



            {/*<div className="buttons-module-mob">*/}
            {/*    <button className="button-avatars" onClick={handleButtonClick}>АВАТАРЫ</button>*/}
            {/*</div>*/}

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
