import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import ank from '../../assets/icons/ank.jpg';
import license from '../../assets/img/main/license.jpg';

import './mainDescr.sass';


const MainDescr: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className='description'>
            <div className="description__text">
                ООО «Инженерное бюро Цаммит» успешно выполняет в Москве и в российских регионах полный комплекс работ по проектированию инженерных систем зданий и сооружений, включая все проектные стадии. Коллектив квалифицированных специалистов нашей фирмы имеет большой опыт выполнения сложных инновационных проектов. В процессе совместной работы с немецкими специалистами наши сотрудники постоянно совершенствуют свои знания, участвуя в совместных разработках и используя новейшие технические решения. Начиная с 2000 года наши специалисты совместно с немецкими коллегами разработали более 100 российских и интернациональных проектов.
            </div>

            <h3 className="description__title">История</h3>
            <div className="description__text">
                Год основания головной фирмы IB-Zammit GmbH: 1991, Германия, Зальцгиттер.<br/>
                Год основания ООО "Инженерное бюро Цаммит": 2005, Россия, Москва.<br/>
                Руководитель: Давид Соколовски<br/>
            </div>

            <h3 className="description__title">Отделения и филиалы</h3>
            <ul className="description__list">
                <li>Испания – Памплона</li>
                <li>Китай – Чаньчунь</li>
                <li>Мексика – Пуэбла</li>
                <li>ОАЭ – Абу-Даби</li>
                <li>Польша – Познань</li>
                <li>Германия – Берлин, Зальцгиттер, Гамбург, Штутгарт, Бремен, Вольфсбург, Хемниц, Целле, Бергиш-Гладбах</li>
            </ul>

            <h3 className="description__title">Членство в ФСРП России и российско-германской ВТП / Награды и достижения</h3>
            <a className="description__link" href="https://russland.ahk.de/ru/" target="_blank">
                <img src={ank} alt="logo" />
                с 2010 года ООО "Инженерное бюро Цаммит" является членом Российско-Германской ВТП
            </a>

            <h3 className="description__title">Лицензирование деятельности</h3>
            <div className="description__text">Cвидетельство СРО</div>
            <img className="description__license" src={license} alt="license" onClick={() => setShow(prev => !prev)} />     

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="xl"
                centered
            >
                {/* <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Cвидетельство СРО
                </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <img className="description__license_large" src={license} alt="license" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MainDescr;