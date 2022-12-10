import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';

import {createVacancy} from '../../http/vacancyAPI';

interface ModalAddVacancyProps {
    show: boolean;
    onHide: () => void;
};

interface ICondition {
    id: number;
    text: string;
};

interface IDuty {
    id: number;
    text: string;
};

interface IRequirement {
    id: number;
    text: string;
};


const ModalAddVacancy: React.FC<ModalAddVacancyProps> = ({show, onHide}) => {
    const [name, setName] = useState<string>('');    
    const [condition, setCondition] = useState<ICondition[]>([]);
    const [duty, setDuty] = useState<IDuty[]>([]);
    const [requirement, setRequirement] = useState<IRequirement[]>([]);

    const addCondition = () => {
        setCondition([...condition, {text: '', id: Date.now()}]);
    };

    const removeCondition = (id: number) => {
        setCondition(condition.filter(item => item.id !== id));
    };

    const changeCondition = (key: string, value: string, id: number) => {
        setCondition(condition.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addDuty = () => {
        setDuty([...duty, {text: '', id: Date.now()}]);
    };

    const removeDuty = (id: number) => {
        setDuty(duty.filter(item => item.id !== id));
    };

    const changeDuty = (key: string, value: string, id: number) => {
        setDuty(duty.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addRequirement = () => {
        setRequirement([...requirement, {text: '', id: Date.now()}]);
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

        createVacancy(formData).then(() => {
            onHide();
        });
    };

    // const addVacancy = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     onHide();
    // };

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
                    Добавить новую вакансию
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
                    {duty.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.text}
                                    onChange={e => changeDuty('text', e.target.value, item.id)}
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
                    {requirement.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.text}
                                    onChange={e => changeRequirement('text', e.target.value, item.id)}
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
                    {condition.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.text}
                                    onChange={e => changeCondition('text', e.target.value, item.id)}
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
                <Button variant={"outline-success "} onClick={addVacancy}>Добавить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddVacancy;