import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

import { IVacancy } from '../../types/types';

interface ModalVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};


const ModalVacancy: React.FC<ModalVacancyProps> = ({show, onHide, vacancy}) => {
    // const {user} = useContext(Context);
    const isAuth: boolean = true;

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
                <div><b>Обязанности:</b>
                    <ul>
                        {vacancy.duties && vacancy.duties.map(item =>
                            <li key={item.id}>{item.duty}</li>
                        )}
                    </ul>
                </div>
                <div><b>Требования:</b>
                    <ul>
                        {vacancy.requirements && vacancy.requirements.map(item =>
                            <li key={item.id}>{item.requirement}</li>
                        )}
                    </ul>
                </div>
                <div><b>Условия:</b>
                    <ul>
                        {vacancy.conditions && vacancy.conditions.map(item =>
                            <li key={item.id}>{item.condition}</li>
                        )}
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {isAuth &&
                    <div>
                        <Button variant={"outline-danger "} onClick={onHide}>Удалить</Button>
                        <Button variant={"outline-primary "} style={{marginLeft: 10}} onClick={onHide}>Обновить</Button>
                    </div>
                }
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalVacancy;