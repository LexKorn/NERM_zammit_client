import React, {useState, useContext} from 'react';
import {Container, Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

import ModalAddProject from '../components/Modals/ModalAddProject';
import ModalAddServise from '../components/Modals/ModalAddServise';
import ModalAddSlider from '../components/Modals/ModalAddSlider';
import ModalAddSystem from '../components/Modals/ModalAddSystem';
import ModalAddVacancy from '../components/Modals/ModalAddVacancy';
import ModalEditCompany from '../components/Modals/ModalEditCompany';
import ModalEditContacts from '../components/Modals/ModalEditContacts';
import {Context} from '../';
import {MAIN_ROUTE} from '../utils/consts';


const AdminPage: React.FC = () => {
    const [companyVisible, setCompanyVisible] = useState<boolean>(false);
    const [contactsVisible, setContactsVisible] = useState<boolean>(false);
    const [projectVisible, setProjectVisible] = useState<boolean>(false);
    const [serviseVisible, setServiseVisible] = useState<boolean>(false);
    const [sliderVisible, setSliderVisible] = useState<boolean>(false);
    const [systemVisible, setSystemVisible] = useState<boolean>(false);
    const [vacancyVisible, setVacancyVisible] = useState<boolean>(false);

    const {admin} =useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        admin.setIsAuth(false);
        localStorage.clear();
        navigate(MAIN_ROUTE);
    };

    return (
        <Container style={{flex: 1}} className="d-flex flex-column">
            <Helmet>
                <title>Админ. панель</title>
                <meta name="description" content="Цаммит. Админ. панель" />
            </Helmet>            
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setContactsVisible(true)}
                >
                Изменить контакты
            </Button>       
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setSliderVisible(true)}
                >
                Изменить главный слайдер
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setCompanyVisible(true)}
                >
                Изменить информацию о компании
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setSystemVisible(true)}
                >
                Добавить инженерную систему
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setServiseVisible(true)}
                >
                Добавить услугу
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setProjectVisible(true)}
                >
                Добавить проект
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setVacancyVisible(true)}
                >
                Добавить вакансию
            </Button>
            <Button 
                variant={"secondary"} 
                className="mt-4 p-2"
                style={{width: 100}}
                onClick={logOut}
                >
                Выйти
            </Button>
            <ModalAddProject show={projectVisible} onHide={() => setProjectVisible(false)} />        
            <ModalAddServise show={serviseVisible} onHide={() => setServiseVisible(false)} /> 
            <ModalAddSlider show={sliderVisible} onHide={() => setSliderVisible(false)} />
            <ModalAddSystem show={systemVisible} onHide={() => setSystemVisible(false)} />     
            <ModalAddVacancy show={vacancyVisible} onHide={() => setVacancyVisible(false)} />
            <ModalEditCompany show={companyVisible} onHide={() => setCompanyVisible(false)} />
            <ModalEditContacts show={contactsVisible} onHide={() => setContactsVisible(false)} />
        </Container>
    );
};

export default AdminPage;