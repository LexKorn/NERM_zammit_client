import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';

import {updateVacancy} from '../../http/vacancyAPI';
import { IVacancy, IVacancyCondition, IVacancyDuty, IVacancyRequirement } from '../../types/types';

interface ModalAddVacancyProps {
    show: boolean;
    onHide: () => void;
    vacancy: IVacancy;
};

// interface ICondition {
//     id: number;
//     text: string;
// };

// interface IDuty {
//     id: number;
//     text: string;
// };

// interface IRequirement {
//     id: number;
//     text: string;
// };


const ModalUpdateVacancy: React.FC<ModalAddVacancyProps> = ({show, onHide, vacancy}) => {
    const [name, setName] = useState<string>(vacancy.name);    
    const [condition, setCondition] = useState<IVacancyCondition[]>(vacancy.condition);
    const [duty, setDuty] = useState<IVacancyDuty[]>(vacancy.duty);
    const [requirement, setRequirement] = useState<IVacancyRequirement[]>(vacancy.requirement);

    const addCondition = () => {
        setCondition([...condition, {condition: '', id: Date.now(), vacancyId: vacancy.id}]);
    };

    const removeCondition = (id: number) => {
        setCondition(condition.filter(item => item.id !== id));
    };

    const changeCondition = (key: string, value: string, id: number) => {
        setCondition(condition.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addDuty = () => {
        setDuty([...duty, {duty: '', id: Date.now(), vacancyId: vacancy.id}]);
    };

    const removeDuty = (id: number) => {
        setDuty(duty.filter(item => item.id !== id));
    };

    const changeDuty = (key: string, value: string, id: number) => {
        setDuty(duty.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addRequirement = () => {
        setRequirement([...requirement, {requirement: '', id: Date.now(), vacancyId: vacancy.id}]);
    };

    const removeRequirement = (id: number) => {
        setRequirement(requirement.filter(item => item.id !== id));
    };

    const changeRequirement = (key: string, value: string, id: number) => {
        setRequirement(requirement.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addVacancy = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('condition', JSON.stringify(condition));
        formData.append('duty', JSON.stringify(duty));
        formData.append('requirement', JSON.stringify(requirement));

        updateVacancy(vacancy.id, formData).then(() => {
            onHide();
        });
    };


    return (
        <Modal
            show={show}
            onHide={onHide}
            // @ts-ignore
            size="md"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Обновить вакансию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите название вакансии"
                    />

                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addDuty}
                        >Добавить обязанности
                    </Button>
                    {duty && duty.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.duty}
                                    onChange={e => changeDuty('duty', e.target.value, item.id)}
                                    placeholder="Введите обязанность"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeDuty(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}

                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addRequirement}
                        >Добавить требования
                    </Button>
                    {requirement && requirement.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.requirement}
                                    onChange={e => changeRequirement('requirement', e.target.value, item.id)}
                                    placeholder="Введите требование"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeRequirement(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}
                    
                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addCondition}
                        >Добавить условия
                    </Button>
                    {condition && condition.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.condition}
                                    onChange={e => changeCondition('condition', e.target.value, item.id)}
                                    placeholder="Введите условие"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeCondition(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-primary "} onClick={addVacancy}>Обновить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalUpdateVacancy;