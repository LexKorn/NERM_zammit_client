import React, {useState, useContext} from 'react';
import {Modal, Button} from 'react-bootstrap';

import { IVacancy } from '../../types/types';
import {Context} from '../..';
import { deleteVacancy } from '../../http/vacancyAPI';
import ModalUpdateVacancy from './ModalUpdateVacancy';

interface ModalVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};


const ModalVacancy: React.FC<ModalVacancyProps> = ({show, onHide, vacancy}) => {
    const {admin} = useContext(Context);
    const [vacancyUpdateVisible, setVacancyUpdateVisible] = useState<boolean>(false);

    const removeVacancy = () => {
        if (window.confirm('Вы действительно хотите удалить вакансию?')) {
            deleteVacancy(vacancy.id);
            onHide();
        }        
    };

    const editVacancy = () => {
        if(window.confirm('Вы действительно хотите изменить вакансию?')) {
            setVacancyUpdateVisible(true);
        }
    };

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
                        {vacancy.duty && vacancy.duty.map(item =>
                            <li key={item.id}>{item.duty}</li>
                        )}
                    </ul>
                </div>
                <div><b>Требования:</b>
                    <ul>
                        {vacancy.requirement && vacancy.requirement.map(item =>
                            <li key={item.id}>{item.requirement}</li>
                        )}
                    </ul>
                </div>
                <div><b>Условия:</b>
                    <ul>
                        {vacancy.condition && vacancy.condition.map(item =>
                            <li key={item.id}>{item.condition}</li>
                        )}
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {admin.isAuth &&
                    <div>
                        <Button variant={"outline-danger "} onClick={removeVacancy}>Удалить</Button>
                        <Button variant={"outline-primary "} style={{marginLeft: 10}} onClick={editVacancy}>Обновить</Button>
                    </div>
                }
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
            <ModalUpdateVacancy show={vacancyUpdateVisible} onHide={() => setVacancyUpdateVisible(false)} vacancy={vacancy}  />
        </Modal>
    );
};

export default ModalVacancy;