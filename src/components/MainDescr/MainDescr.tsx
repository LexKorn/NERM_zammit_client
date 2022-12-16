import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';

import ank from '../../assets/icons/ank.jpg';
import license from '../../assets/img/main/license.jpg';
import { ICompany } from '../../types/types';
import { fetchCompany } from '../../http/companyAPI';

import './mainDescr.sass';


const MainDescr: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);
    const [company, setCompany] = useState<ICompany>({
        id: 1,
        description: "ООО «Инженерное бюро Цаммит» успешно выполняет в Москве и в российских регионах полный комплекс работ по проектированию инженерных систем зданий и сооружений, включая все проектные стадии. Коллектив квалифицированных специалистов нашей фирмы имеет большой опыт выполнения сложных инновационных проектов. В процессе совместной работы с немецкими специалистами наши сотрудники постоянно совершенствуют свои знания, участвуя в совместных разработках и используя новейшие технические решения. Начиная с 2000 года наши специалисты совместно с немецкими коллегами разработали более 100 российских и интернациональных проектов.",
        department: [
            {
                id: 1,
                companyId: 1,
                department: 'Испания – Памплона'
            },
            {
                id: 2,
                companyId: 1,
                department: 'Китай – Чаньчунь'
            },
            {
                id: 3,
                companyId: 1,
                department: 'Мексика – Пуэбла'
            },
            {
                id: 4,
                companyId: 1,
                department: 'ОАЭ – Абу-Даби'
            },
            {
                id: 5,
                companyId: 1,
                department: 'Польша – Познань'
            },
            {
                id: 6,
                companyId: 1,
                department: 'Германия – Берлин, Зальцгиттер, Гамбург, Штутгарт, Бремен, Вольфсбург, Хемниц, Целле, Бергиш-Гладбах'
            }
        ]
    });

    useEffect(() => {
        fetchCompany(1).then(data => setCompany(data));
    }, []);


    return (
        <div className='description'>
            <div className="description__text">{company.description}</div>

            <h3 className="description__title">История</h3>
            <div className="description__text">
                Год основания головной фирмы IB-Zammit GmbH: 1991, Германия, Зальцгиттер.<br/>
                Год основания ООО "Инженерное бюро Цаммит": 2005, Россия, Москва.<br/>
                Руководитель: Давид Соколовски<br/>
            </div>

            <h3 className="description__title">Отделения и филиалы</h3>
            <ul className="description__list">
                {company.department && company.department.map(item =>
                    <li key={item.id}>{item.department}</li>    
                )}
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
                <Modal.Body>
                    <img className="description__license_large" src={license} alt="license" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MainDescr;