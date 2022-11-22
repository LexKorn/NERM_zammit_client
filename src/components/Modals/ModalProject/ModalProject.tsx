import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

import { IProject } from '../../../types/types';
import Slider from '../../Slider/Slider';

import './modalProject.sass';

interface ModalProjectProps {
    show: boolean;
    onHide: () => void;
    project: IProject;
};


const ModalProject: React.FC<ModalProjectProps> = ({show, onHide, project}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="xl"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {project.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {project.task} <br/>
                {project.location}
                <div className="modal-project">
                    {project.photos && <Slider height={400} slide1={project.photos[0]} slide2={project.photos[1]} />}
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
                                {project.info.volumes.map(item => 
                                    <li>{item}</li>
                                )}
                            </ul>
                        </div>
                        <div className='modal-project__info_1'>Проектные данные:</div>
                        <div className='modal-project__info_1'>
                            <ul className='modal-project__info_list'>
                                {project.info.information.map(item => 
                                    <li>{item}</li>
                                )}
                            </ul>
                        </div>
                    </div> }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalProject;