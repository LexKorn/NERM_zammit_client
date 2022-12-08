import React from 'react';

import { IContacts } from '../../types/types';

import './mainContacts.sass';


const MainContacts: React.FC = () => {
    const contacts: IContacts = {
        id: 1,
        phone: '+7 495 926 23 43',
        address: '125040, Москва, 3-я ул. Ямского Поля, д. 28, оф. 2031, Бизнес-центр "БИНОМ-СОД"',
        link: 'https://yandex.ru/maps/-/CCUNyMhCOB'
    };

    return (
        <div className='contacts'>
            <h3 className='contacts__title'>Контакты</h3>
            <div className="contacts__container">
                <div className='contacts__ru'>
                    <div className="contacts__header">Российская Федерация</div>
                    <div>ООО «Инженерное бюро Цаммит»</div>
                    <div>{contacts.address}</div>
                    <div>Телефон: {contacts.phone}</div>
                    <div>E-mail: <a href="mailto:moskau@ib-zammit.ru">moskau@ib-zammit.ru</a></div>
                    <div>Web: <a href="http://ib-zammit.ru">www.ib-zammit.ru</a></div>
                </div>
            </div>

            <a href={contacts.link} target="_blank">ООО "ИБ-Цаммит" на карте Яндекс</a>            
        </div>
    );
};

export default MainContacts;