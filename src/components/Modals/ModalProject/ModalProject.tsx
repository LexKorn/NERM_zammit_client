import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

import { IProject } from '../../../types/types';
import Slider from '../../Slider';

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
                    <Slider height={390} slide1={project.photos[0]} slide2={project.photos[1]} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalProject;