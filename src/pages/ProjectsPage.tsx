import React, {useState, useEffect} from 'react';
import {Accordion, Container, Spinner} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import { IProject, Categories } from '../types/types';
import { fetchProjects } from '../http/projectAPI';
import ModalProject from '../components/Modals/ModalProject/ModalProject';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';


const ProjectsPage: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [project, setProject] = useState<IProject>({} as IProject);
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        fetchProjects().then(data => {
            setProjects(data);
            setLoading(false);
        })
    }, [visible]);

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

            {loading ? <Spinner /> :
            <Accordion defaultActiveKey="10" flush style={{maxWidth: 900, margin: '0 auto'}}>
                {/* @ts-ignore */}
                {Object.values(Categories).map((category, i) =>
                    <Accordion.Item eventKey={`${i}`} key={i} >
                        <Accordion.Header>{category}</Accordion.Header>
                        <Accordion.Body>
                            <ProjectContainer projects={projects} category={category} onClick={handler} />
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>}

            <ModalProject show={visible} onHide={() => setVisible(false)} project={project} />
        </Container>
    );
};

export default ProjectsPage;