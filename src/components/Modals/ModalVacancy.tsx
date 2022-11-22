import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

import { IVacancy } from '../../types/types';

interface ModalVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};


const ModalVacancy: React.FC<ModalVacancyProps> = ({show, onHide, vacancy}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {vacancy.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div><b>Обязанности:</b><br/>{vacancy.duty}</div>
                <div><b>Требования:</b><br/>{vacancy.requirement}</div>
                <div><b>Условия:</b><br/>{vacancy.conditions}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalVacancy;