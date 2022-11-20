import React from 'react';
import { NavLink } from 'react-router-dom';

import { MAIN_ROUTE, PROJECT_ROUTE, SERVISES_ROUTE, SYSTEMS_ROUTE, VACANCY_ROUTE } from "../../utils/consts";
import logo from '../../assets/icons/ib-zammit_logo.jpg';

import './header.sass';


const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className="header__info">
                <div className="header__logo">
                    <NavLink to={MAIN_ROUTE} className="header__logo_link">
                        <img className="header__logo_img" src={logo} alt="logo" />                    
                        <h1 className="header__logo_text">ООО «Инженерное бюро Цаммит»</h1>   
                    </NavLink>             
                </div>    
                <div className="header__contacts">
                    <h3 className="header__contacts_title">Контакты</h3>
                    <p className="header__contacts_phone">+7 495 926 23 43</p>
                    <a className="header__contacts_email" href="mailto:moskau@ib-zammit.ru">moskau@ib-zammit.ru</a>
                </div>
            </div>

            <div className="header__menu-burger">
                <span></span>
            </div>

            <nav className="header__nav">
                <ul className="header__menu">
                    <li className="header__menu_item"><NavLink to={MAIN_ROUTE} className="active">О КОМПАНИИ</NavLink></li>
                    <li className="header__menu_item"><NavLink to={SYSTEMS_ROUTE} >ИНЖЕНЕРНЫЕ СИСТЕМЫ</NavLink></li>
                    <li className="header__menu_item"><NavLink to={SERVISES_ROUTE} >УСЛУГИ</NavLink></li>
                    <li className="header__menu_item"><NavLink to={PROJECT_ROUTE} >ПРОЕКТЫ</NavLink></li>
                    <li className="header__menu_item"><NavLink to={VACANCY_ROUTE} >ВАКАНСИИ</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;