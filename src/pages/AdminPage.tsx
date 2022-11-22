import React, {useState} from 'react';
import {Container, Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import ModalAddProject from '../components/Modals/ModalAddProject';
import ModalAddVacancy from '../components/Modals/ModalAddVacancy';
import ModalEditConacts from '../components/Modals/ModalEditConacts';


const AdminPage: React.FC = () => {
    const [projectVisible, setProjectVisible] = useState<boolean>(false);
    const [vacancyVisible, setVacancyVisible] = useState<boolean>(false);
    const [contactsVisible, setContactsVisible] = useState<boolean>(false);

    return (
        <Container style={{flex: 1}} className="d-flex flex-column">
            <Helmet>
                <title>Админ. панель</title>
                <meta name="description" content="Цаммит. Админ. панель" />
            </Helmet>
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
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setContactsVisible(true)}
                >
                Изменить контакты
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setVacancyVisible(true)}
                >
                Добавить услугу
            </Button>
            <Button 
                variant={"outline-secondary"} 
                className="mt-4 p-2 shadow"
                onClick={() => setVacancyVisible(true)}
                >
                Добавить систему
            </Button>
            <ModalAddProject show={projectVisible} onHide={() => setProjectVisible(false)} />            
            <ModalAddVacancy show={vacancyVisible} onHide={() => setVacancyVisible(false)} />
            <ModalEditConacts show={contactsVisible} onHide={() => setContactsVisible(false)} />
        </Container>
    );
};

export default AdminPage;