import React from 'react';

import './mainContacts.sass';

const MainContacts: React.FC = () => {
    return (
        <div className='contacts'>
            <h3 className='contacts__title'>Контакты</h3>
            <div className="contacts__container">
                <div className='contacts__ru'>
                    <div className="contacts__header">Российская Федерация</div>
                    <div>ООО «Инженерное бюро Цаммит»</div>
                    <div>125040, Москва, 3-я ул. Ямского Поля, д. 28, оф. 2031, Бизнес-центр "БИНОМ-СОД"</div>
                    <div>Телефон: +7 495 926 23 43</div>
                    <div>E-mail: <a href="mailto:moskau@ib-zammit.ru">moskau@ib-zammit.ru</a></div>
                    <div>Web: <a href="http://ib-zammit.ru">www.ib-zammit.ru</a></div>
                </div>
                {/* <div className='contacts__de'>
                    <div className="contacts__header">Германия</div>
                    <div>Ingenieurbüro Zammit GmbH</div>
                    <div>An der Heerstraße 50 38228 Salzgitter</div>
                    <div>Тел.: +49 5341 8599 900</div>
                    <div></div>
                    <div>Факс: +49 5341 8599 909</div>
                    <div>Web: <a href="http://ib-zammit.de">www.ib-zammit.de</a></div>
                </div> */}
            </div>

            <a href="https://yandex.ru/maps/-/CCUNyMhCOB" target="_blank">ООО "ИБ-Цаммит" на карте Яндекс</a>            
        </div>
    );
};

export default MainContacts;