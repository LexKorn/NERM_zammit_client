import React, {useState} from 'react';
import {Accordion, Container} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IProject, Categories } from '../types/types';
import ModalProject from '../components/Modals/ModalProject/ModalProject';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import {ice1, kinoEkrn, angara1, epsilon1 } from '../assets/img/projects/index';


const ProjectsPage: React.FC = () => {
    const testProjects: IProject[] = [
        {
            id: 1,
            name: 'Ледовый дворец',
            task: 'Строительство спортивно-тренировочного центра',
            location: 'Москва, Россия',
            category: Categories.CULTURES,
            photos: [
                {
                    id: 1,
                    projectId: 1,
                    photo: ice1
                },
                {
                    id: 2,
                    projectId: 1,
                    photo: kinoEkrn
                }
            ],
            info: {
                id: 1,
                customer: 'OOO «АПИА-СПОРТ»',
                designer: 'ООО «АКРО-М»',
                period: '2017',
                volumes: [
                    {
                        id: 1,
                        infoId: 1,
                        volume: 'Разработка проектной и рабочей документации инженерных систем:'
                    },
                    {
                        id: 2,
                        infoId: 1,
                        volume: 'вентиляция и кондиционирование'
                    },
                    {
                        id: 3,
                        infoId: 1,
                        volume: 'отопления и теплоснабжения'
                    },
                    {
                        id: 4,
                        infoId: 1,
                        volume: 'сетей связи'
                    }
                ],
                informs: [
                    {
                        id: 1,
                        infoId: 1,
                        inform: 'Общая площадь: 7.676 м²'
                    }
                ]
            }
        },
        {
            id: 2,
            name: 'Кинотеатры Байконур, Киргизия, Экран',
            task: 'Строительство Многофункциональных Общественных Центров шаговой доступности с кинотеатрами',
            location: 'Москва, Россия',
            category: Categories.MFC,
            photos: [
                {
                    id: 3,
                    projectId: 2,
                    photo: ice1
                },
                {
                    id: 4,
                    projectId: 2,
                    photo: kinoEkrn
                },
                {
                    id: 5,
                    projectId: 2,
                    photo: angara1
                },
                {
                    id: 6,
                    projectId: 2,
                    photo: epsilon1
                }
            ],
            info: {
                id: 2,
                customer: 'ADG Group',
                designer: 'ADG Group',
                period: '2020',
                volumes: [
                    {
                        id: 5,
                        infoId: 2,
                        volume: 'Разработка рабочей документации инженерных систем:'
                    },
                    {
                        id: 6,
                        infoId: 2,
                        volume: 'вентиляция и кондиционирование'
                    },
                    {
                        id: 7,
                        infoId: 2,
                        volume: 'отопления и теплоснабжения'
                    },
                    {
                        id: 8,
                        infoId: 2,
                        volume: 'электрооборудования'
                    }
                ],
                informs: [
                    {
                        id: 2,
                        infoId: 2,
                        inform: 'Кинозалы: 5-6'
                    }
                ]
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
                        <ProjectContainer projects={testProjects} category={Categories.CULTURES} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{Categories.MFC}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.MFC} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>{Categories.OFFICES}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.OFFICES} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>{Categories.HOTELS}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.HOTELS} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>{Categories.RESIDENCES}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.RESIDENCES} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>{Categories.WILLAGES}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.WILLAGES} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>{Categories.INDUSTRIES}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.INDUSTRIES} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>{Categories.AVIA}</Accordion.Header>
                    <Accordion.Body>
                        <ProjectContainer projects={testProjects} category={Categories.AVIA} onClick={handler} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <ModalProject show={visible} onHide={() => setVisible(false)} project={project} />
        </Container>
    );
};

export default ProjectsPage;