import React, {useState} from 'react';
import {Accordion, Container} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IProject, Categories } from '../types/types';
import ModalProject from '../components/Modals/ModalProject/ModalProject';
import {ice1, kinoEkrn} from '../assets/img/projects/index';

import './projectsPage.sass';


const ProjectsPage: React.FC = () => {
    const testProjects: IProject[] = [
        {
            id: 1,
            name: 'Ледовый дворец',
            task: 'Строительство спортивно-тренировочного центра',
            location: 'Москва, Россия',
            photos: [ice1, kinoEkrn],
            category: Categories.CULTURES,
            info: {
                customer: 'OOO «АПИА-СПОРТ»',
                designer: 'ООО «АКРО-М»',
                period: '2017',
                volumes: ['Разработка проектной и рабочей документации инженерных систем:', 'вентиляция и кондиционирование', 'отопления и теплоснабжения', 'водоснабжения и водоотведения', 'электрооборудования', 'сетей связи', 'наружных сетей инженерных систем'],
                information: ['Общая площадь: 7.676 м²']
            }
        },
        {
            id: 2,
            name: 'Кинотеатры Байконур, Киргизия, Экран',
            task: 'Строительство Многофункциональных Общественных Центров шаговой доступности с кинотеатрами',
            location: 'Москва, Россия',
            photos: [ice1, kinoEkrn],
            category: Categories.CULTURES,
            info: {
                customer: 'ADG Group',
                designer: 'ADG Group',
                period: 'с 2020',
                volumes: ['Разработка рабочей документации инженерных систем кинотеатров:', 'вентиляция и кондиционирование', 'отопления и теплоснабжения', 'водоснабжения и канализация', 'электрооборудования', 'системы связи', 'автоматизация и диспетчеризация'],
                information: ['Кинозалы: 5-6']
            }
        }
    ];

    const [visible, setVisible] = useState<boolean>(false);
    const [project, setProject] = useState<IProject>({} as IProject);

    const handler = (project: IProject) => {
        setVisible(true);
        setProject(project);
    };

    return (
        <Container style={{flex: 1}}>
            <Helmet>
                <title>Цаммит. Проекты</title>
                <meta name="description" content="Цаммит. Проекты" />
            </Helmet>

            <Accordion defaultActiveKey="10" flush style={{maxWidth: 900, margin: '0 auto'}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{Categories.CULTURES}</Accordion.Header>
                    <Accordion.Body>
                        <div className="project__container">
                            {testProjects.filter((project: IProject) => project.category === Categories.CULTURES)
                                .map((item: IProject) => 
                                    <div className='project__item' key={item.id} onClick={() => handler(item)} >
                                        <img src={item.photos[0]} alt="photo" className='project__item_photo' />
                                        <div className='project__item_name'>{item.name}</div>
                                    </div>
                                )
                            }
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{Categories.MFC}</Accordion.Header>
                    <Accordion.Body>
                        {testProjects.filter(project => project.category === Categories.MFC)
                            .map(item => 
                                <div className='project__item' key={item.id} onClick={() => handler(item)} >
                                    <img src={item.photos[1]} alt="photo" className='project__item_photo' />
                                    <div className='project__item_name'>{item.name}</div>
                                </div>
                            )
                        }
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>{Categories.OFFICES}</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>{Categories.HOTELS}</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>{Categories.RESIDENCES}</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>{Categories.WILLAGES}</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>{Categories.INDUSTRIES}</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>{Categories.AVIA}</Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <ModalProject show={visible} onHide={() => setVisible(false)} project={project} />
        </Container>
    );
};

export default ProjectsPage;