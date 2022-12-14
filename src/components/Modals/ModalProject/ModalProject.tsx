import React, {useState, useContext} from 'react';
import {Modal, Button} from 'react-bootstrap';

import { IProject } from '../../../types/types';
import { Context } from '../../..';
import { deleteProject } from '../../../http/projectAPI';
import Slider from '../../Slider/Slider';
import ModalUpdateProject from '../ModalUpdateProject';

import './modalProject.sass';

interface ModalProjectProps {
    show: boolean;
    onHide: () => void;
    project: IProject;
};


const ModalProject: React.FC<ModalProjectProps> = ({show, onHide, project}) => {
    const {admin} = useContext(Context);
    const [projectUpdateVisible, setProjectUpdateVisible] = useState<boolean>(false);

    const removeProject = () => {
        if (window.confirm('Вы действительно хотите удалить проект?')) {
            deleteProject(project.id);
            onHide();
        }        
    };

    const editProject = () => {
        if(window.confirm('Вы действительно хотите изменить проект?')) {
            setProjectUpdateVisible(true);
        }
    };

    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {project.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {project.task} <br/>
                {project.location}
                <div className="modal-project">
                    {project.photo && <Slider photos={project.photo} page="projects" />}
                    {project.info && <div className="modal-project__info">
                        <div className='modal-project__info_1'>Заказчик:</div>
                        <div className='modal-project__info_1'>{project.info.customer}</div>
                        <div className='modal-project__info_2'>Генеральный проектировщик:</div>
                        <div className='modal-project__info_2'>{project.info.designer}</div>
                        <div className='modal-project__info_1'>Сроки выполнения:</div>
                        <div className='modal-project__info_1'>{project.info.period}</div>
                        <div className='modal-project__info_2'>Объемы проектирования:</div>
                        <div className='modal-project__info_2'>
                            <ul className='modal-project__info_list'>
                                {project.info.volume.map(item => 
                                    <li key={item.id}>{item.volume}</li>
                                )}
                            </ul>
                        </div>
                        <div className='modal-project__info_1'>Проектные данные:</div>
                        <div className='modal-project__info_1'>
                            <ul className='modal-project__info_list'>
                                {project.info.inform.map(item => 
                                    <li key={item.id}>{item.inform}</li>
                                )}
                            </ul>
                        </div>
                    </div> }
                </div>
            </Modal.Body>
            <Modal.Footer>
                {admin.isAuth &&
                    <div>
                        <Button variant={"outline-danger "} onClick={removeProject}>Удалить</Button>
                        <Button variant={"outline-primary "} style={{marginLeft: 10}} onClick={editProject}>Обновить</Button>
                    </div>
                }
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
            <ModalUpdateProject show={projectUpdateVisible} onHide={() => setProjectUpdateVisible(false)} project={project}  />
        </Modal>
    );
};

export default ModalProject;