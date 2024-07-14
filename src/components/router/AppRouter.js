import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPageMobile } from '../MainPageMobile/MainPageMobile';
import { MainPage } from '../MainPage/MainPage';
import {Avatars} from "../Avatars/Avatars";
import {AvatarsMobile} from "../AvatarsMobile/AvatarsMobile";
import {Contacts} from "../Contacts/Contacts";

const AppRouter = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
        const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
        setIsMobile(mobile);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isMobile ? <MainPageMobile /> : <MainPage />} />
                <Route path="/avatars" element={isMobile ? <AvatarsMobile/> : <Avatars />} />
                <Route path="/contacts" element={isMobile ? null : <Contacts />} />
                {/*<Route path="/contact" element={<ContactPage />} />*/}
            </Routes>
        </Router>
    );
};

export default AppRouter;