import React, {useState, useEffect, useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { MAIN_ROUTE, PROJECT_ROUTE, SERVISES_ROUTE, SYSTEMS_ROUTE, VACANCY_ROUTE, ADMIN_ROUTE } from "../../utils/consts";
import logo from '../../assets/icons/ib-zammit_logo.jpg';
import { IContacts } from '../../types/types';
import { Context } from '../..';
import { fetchContacts } from '../../http/contactsAPI';

import './header.sass';


const Header: React.FC = () => {
    const location = useLocation();
    const {admin} = useContext(Context);
    const [classMenu, setClassMenu] = useState<string>('');
    const [contacts, setContacts] = useState<IContacts>({
        id: 1,
        phone: '+7 495 926 23 43',
        address: '125040, Москва, 3-я ул. Ямского Поля, д. 28, оф. 2031, Бизнес-центр "БИНОМ-СОД"',
        link: 'https://yandex.ru/maps/-/CCUNyMhCOB'
    });

    useEffect(() => {
        fetchContacts(1).then(data => setContacts(data));
    }, []);

    useEffect(() => {
        setClassMenu('');
    }, [location.pathname]);

    const menuHandler = () => {
        classMenu === '' ? setClassMenu('open-menu') : setClassMenu('');
    };

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
                    <p className="header__contacts_text">{contacts.phone}</p>
                    <a className="header__contacts_text email" href="mailto:moskau@ib-zammit.ru">moskau@ib-zammit.ru</a>
                </div>
            </div>

            <div className={"header__menu-burger" + ' ' + classMenu} onClick={() => menuHandler()}>
                <span></span>
            </div>

            <nav className={'header__nav' + ' ' + classMenu}>
                <ul className="header__menu">
                    <li className="header__menu_item">
                        <NavLink to={MAIN_ROUTE} className={location.pathname === MAIN_ROUTE ? "active" : ''} >
                            О КОМПАНИИ
                        </NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to={SYSTEMS_ROUTE} className={location.pathname === SYSTEMS_ROUTE ? "active" : ''} >
                            ИНЖЕНЕРНЫЕ СИСТЕМЫ
                        </NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to={SERVISES_ROUTE} className={location.pathname === SERVISES_ROUTE ? "active" : ''} >
                            УСЛУГИ
                        </NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to={PROJECT_ROUTE} className={location.pathname === PROJECT_ROUTE ? "active" : ''} >
                            ПРОЕКТЫ
                        </NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to={VACANCY_ROUTE} className={location.pathname === VACANCY_ROUTE ? "active" : ''} >
                            ВАКАНСИИ
                        </NavLink>
                    </li>
                    {admin._isAuth &&
                        <li className="header__menu_item">
                            <NavLink to={ADMIN_ROUTE} className={location.pathname === ADMIN_ROUTE ? "active" : ''} >
                                АДМИНКА
                            </NavLink>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;