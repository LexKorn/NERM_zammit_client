import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';

import {updateCompany} from '../../http/companyAPI';

interface ModalEditCompanyProps {
    show: boolean;
    onHide: () => void;
};

interface IDepartment {
    id: number;
    text: string;
};


const ModalEditCompany: React.FC<ModalEditCompanyProps> = ({show, onHide}) => {
    const [description, setDescription] = useState<string>('');    
    const [department, setDepartment] = useState<IDepartment[]>([]);

    const addDepartment = () => {
        setDepartment([...department, {text: '', id: Date.now()}]);
    };

    const removeDepartment = (id: number) => {
        setDepartment(department.filter(item => item.id !== id));
    };

    const changeDepartment = (key: string, value: string, id: number) => {
        setDepartment(department.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const editCompany = () => {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('department', JSON.stringify(department));

        updateCompany(1, formData).then(() => {
            onHide();
        });
    };

    // const editCompany = (e: React.FormEvent) => {
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
                    Изменить данные о компании
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Введите новое описание" 
                        />
                    </Form.Group>
                    
                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addDepartment}
                        >Добавить отделение / филиал
                    </Button>
                    {department.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.text}
                                    onChange={e => changeDepartment('text', e.target.value, item.id)}
                                    placeholder="Введите отделение"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeDepartment(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-primary"} onClick={editCompany}>Обновить</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditCompany;