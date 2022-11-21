import React from 'react';
import Container from 'react-bootstrap/Container';
import {Helmet} from "react-helmet";

import MainSlider from '../components/MainSlider/MainSlider';
import MainDescr from '../components/MainDescr/MainDescr';
import MainContacts from '../components/MainContacts/MainContacts';


const MainPage: React.FC = () => {
    return (
        <div className="main" style={{flex: 1}}>
            <Helmet>
                <title>Инженерное бюро "Цаммит"</title>
                <meta name="description" content="Инженерное бюро Цаммит" />
            </Helmet>
            {/* <MainSlider /> */}
            <MainDescr />
            <MainContacts />
        </div>
    );
};

export default MainPage;