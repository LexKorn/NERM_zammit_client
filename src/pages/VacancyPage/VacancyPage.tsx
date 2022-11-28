import React, {useState} from 'react';
import {Helmet} from "react-helmet";
import Container from 'react-bootstrap/Container';

import List from '../../components/List/List';
import VacancyItem from '../../components/VacancyItem/VacancyItem';
import photo from '../../assets/img/vacancy.webp';
import { IVacancy } from '../../types/types';

import './vacancyPage.sass';
import ModalVacancy from '../../components/Modals/ModalVacancy';


const VacancyPage: React.FC = () => {
    const vacancies: IVacancy[] = [
        {
            id: 1,
            name: 'Инженер-проектировщик ОВиК',
            duties: [
                {
                    id: 1,
                    vacancyId: 1,
                    duty: 'Разработка проектной документации инженерных систем (все стадии проектирования) зданий и сооружений различного назначения.'
                },
                {
                    id: 2,
                    vacancyId: 1,
                    duty: 'Выполнение необходимых расчетов систем, сбор нагрузок, подбор оборудования, составление спецификаций.'
                },
                {
                    id: 3,
                    vacancyId: 1,
                    duty: 'Участие в предпроектных обследованиях, составление и согласование Технических заданий на проектирование, выдача заданий на проектирование смежным разделам, согласование проектных решений в надзорных органах, осуществление авторского надзора, проверка проектной документации на соответствие норм и правил.'
                }
            ],
            requirements: [
                {
                    id: 1,
                    vacancyId: 1,
                    requirement: 'Высшее профильное образование.'
                },
                {
                    id: 2,
                    vacancyId: 1,
                    requirement: 'Знание нормативной документации (ГОСТ, СНиП, СП) в области проектирования.'
                },
                {
                    id: 3,
                    vacancyId: 1,
                    requirement: 'Уверенный пользователь MS Office, AutoCAD, опыт работы в MagiCAD и Autodesk Revit приветствуется.'
                }, 
                {
                    id: 4,
                    vacancyId: 1,
                    requirement: 'Коммуникабельность, способность работать самостоятельно и в коллективе.'
                },
            ],
            conditions: [
                {
                    id: 1,
                    vacancyId: 1,
                    condition: 'Полная занятость, график 5/2.'
                },
                {
                    id: 2,
                    vacancyId: 1,
                    condition: 'Оформление Трудового договора в соответствии с законодательством РФ.'
                },
                {
                    id: 3,
                    vacancyId: 1,
                    condition: 'Работа в современной немецко-российской компании, работающей на основе российского законодательства и занимающейся современным проектированием музеев, резорт-отелей, гостиницами, частными жилыми комплексами и объектами в области промышленности.'
                }, 
                {
                    id: 4,
                    vacancyId: 1,
                    condition: 'Компания готова рассмотреть зарплатные ожидания успешного кандидата.'
                }
            ]
        },
        {
            id: 2,
            name: 'Инженер-проектировщик слаботочных систем',
            duties: [
                {
                    id: 1,
                    vacancyId: 1,
                    duty: 'Разработка проектной документации инженерных систем (все стадии проектирования) зданий и сооружений различного назначения.'
                },
                {
                    id: 2,
                    vacancyId: 1,
                    duty: 'Выполнение необходимых расчетов систем, сбор нагрузок, подбор оборудования, составление спецификаций.'
                },
                {
                    id: 3,
                    vacancyId: 1,
                    duty: 'Участие в предпроектных обследованиях, составление и согласование Технических заданий на проектирование, выдача заданий на проектирование смежным разделам, согласование проектных решений в надзорных органах, осуществление авторского надзора, проверка проектной документации на соответствие норм и правил.'
                }
            ],
            requirements: [
                {
                    id: 1,
                    vacancyId: 1,
                    requirement: 'Высшее профильное образование.'
                },
                {
                    id: 2,
                    vacancyId: 1,
                    requirement: 'Знание нормативной документации (ГОСТ, СНиП, СП) в области проектирования.'
                },
                {
                    id: 3,
                    vacancyId: 1,
                    requirement: 'Уверенный пользователь MS Office, AutoCAD, опыт работы в MagiCAD и Autodesk Revit приветствуется.'
                }, 
                {
                    id: 4,
                    vacancyId: 1,
                    requirement: 'Коммуникабельность, способность работать самостоятельно и в коллективе.'
                },
            ],
            conditions: [
                {
                    id: 1,
                    vacancyId: 1,
                    condition: 'Полная занятость, график 5/2.'
                },
                {
                    id: 2,
                    vacancyId: 1,
                    condition: 'Оформление Трудового договора в соответствии с законодательством РФ.'
                },
                {
                    id: 3,
                    vacancyId: 1,
                    condition: 'Работа в современной немецко-российской компании, работающей на основе российского законодательства и занимающейся современным проектированием музеев, резорт-отелей, гостиницами, частными жилыми комплексами и объектами в области промышленности.'
                }, 
                {
                    id: 4,
                    vacancyId: 1,
                    condition: 'Компания готова рассмотреть зарплатные ожидания успешного кандидата.'
                }
            ]
        }
    ];

    const [visible, setVisible] = useState<boolean>(false);
    const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy);

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

            <ModalVacancy show={visible} onHide={() => setVisible(false)} vacancy={vacancy} /> 
        </Container>
    );
};

export default VacancyPage;