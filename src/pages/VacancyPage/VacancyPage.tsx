import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {Container, Spinner} from 'react-bootstrap';

import List from '../../components/List/List';
import VacancyItem from '../../components/VacancyItem/VacancyItem';
import photo from '../../assets/img/vacancy.webp';
import { IVacancy } from '../../types/types';
import { fetchVacancies } from '../../http/vacancyAPI';

import './vacancyPage.sass';
import ModalVacancy from '../../components/Modals/ModalVacancy';


const VacancyPage: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy);
    const [vacancies, setVacancies] = useState<IVacancy[]>([]);

    useEffect(() => {
        fetchVacancies().then(data => {
            setVacancies(data);
            setLoading(false);
        });
    }, [visible]);

    const handler = (vacancy: IVacancy) => {
        setVisible(true);
        setVacancy(vacancy);
    };
    

    return (
        <Container className='vacancy'>
            <Helmet>
                <title>Цаммит. Вакансии</title>
                <meta name="description" content="Цаммит. Вакансии" />
            </Helmet>

            <img src={photo} className='vacancy__photo' alt="photo" />
            <h3 className="vacancy__title">Актуальные вакансии:</h3>

            {loading ? <Spinner /> :
                <List
                    items={vacancies} 
                    renderItem={(item: IVacancy) => 
                        <VacancyItem 
                            onClick={(item) => handler(item)} 
                            vacancy={item} 
                            key={item.id} 
                        />
                    } 
                />
            }

            <ModalVacancy show={visible} onHide={() => setVisible(false)} vacancy={vacancy} /> 
        </Container>
    );
};

export default VacancyPage;