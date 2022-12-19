import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';

import { ICondition, IDuty, IRequirement } from '../types/types';

interface CUVacancyProps {
    id: number;
    name: string;
    condition: ICondition[];
    duty: IDuty[];
    requirement: IRequirement[];
    setName: (name: string) => void;
    setCondition: (condition: ICondition[]) => void;
    setDuty: (duty: IDuty[]) => void;
    setRequirement: (requirement: IRequirement[]) => void;
    handler: (id: number, vacancy: FormData) => Promise<unknown>;
    modalTitle: string;
    btnName: string;
    show: boolean;
    onHide: () => void;
};


const CUVacancy: React.FC<CUVacancyProps> = ({id, name, condition, duty, requirement, setName, setCondition, setDuty, setRequirement, handler, modalTitle, btnName, show, onHide}) => {

    const addCondition = () => {
        setCondition([...condition, {condition: '', id: Date.now()}]);
    };

    const removeCondition = (id: number) => {
        setCondition(condition.filter(item => item.id !== id));
    };

    const changeCondition = (key: string, value: string, id: number) => {
        setCondition(condition.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addDuty = () => {
        setDuty([...duty, {duty: '', id: Date.now()}]);
    };

    const removeDuty = (id: number) => {
        setDuty(duty.filter(item => item.id !== id));
    };

    const changeDuty = (key: string, value: string, id: number) => {
        setDuty(duty.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addRequirement = () => {
        setRequirement([...requirement, {requirement: '', id: Date.now()}]);
    };

    const removeRequirement = (id: number) => {
        setRequirement(requirement.filter(item => item.id !== id));
    };

    const changeRequirement = (key: string, value: string, id: number) => {
        setRequirement(requirement.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const onClick = () => {
        if (!name.trim()) {
            return alert('Название вакансии обязательно для заполнения');        
        } else if (duty.length === 0) {
            return alert('Необходимо задать хотя бы 1 обязанность');
        } else if (requirement.length === 0) {
            return alert('Необходимо задать хотя бы 1 требование');
        } else if (condition.length === 0) {
            return alert('Необходимо задать хотя бы 1 условие');
        }
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('condition', JSON.stringify(condition));
        formData.append('duty', JSON.stringify(duty));
        formData.append('requirement', JSON.stringify(requirement));

        if (btnName === 'Добавить' || btnName === 'Дублировать') {
            // @ts-ignore
            handler(formData)
                .then(() => {
                    onHide();
                    setName('');
                    setCondition([]);
                    setDuty([]);
                    setRequirement([]);
                })
                .catch(err => alert(err.response.data.message));
        } else if (btnName === 'Обновить') {
            handler(id, formData)
                .then(() => {
                    onHide();
                    setName('');
                    setCondition([]);
                    setDuty([]);
                    setRequirement([]);
                })
                .catch(err => alert(err.response.data.message));
        }
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
                    {modalTitle}
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
                                <Form.Control as="textarea"
                                    value={item.duty}
                                    onChange={e => changeDuty('duty', e.target.value, item.id)}
                                    placeholder="Введите обязанность"
                                    maxLength={500}
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
                                <Form.Control as="textarea"
                                    value={item.requirement}
                                    onChange={e => changeRequirement('requirement', e.target.value, item.id)}
                                    placeholder="Введите требование"
                                    maxLength={500}
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
                                <Form.Control as="textarea"
                                    value={item.condition}
                                    onChange={e => changeCondition('condition', e.target.value, item.id)}
                                    placeholder="Введите условие"
                                    maxLength={500}
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
                <Button 
                    variant={btnName === 'Добавить' ? "outline-success" : btnName === 'Обновить' ? "outline-primary" :  "outline-info"} 
                    onClick={onClick}>
                        {btnName}
                </Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CUVacancy;