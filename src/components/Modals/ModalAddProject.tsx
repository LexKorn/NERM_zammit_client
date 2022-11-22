import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

interface ModalAddProjectProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddProject: React.FC<ModalAddProjectProps> = ({show, onHide}) => {
    const addProject = (e: React.FormEvent) => {
        e.preventDefault();
        onHide();
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
                    Добавить новый проект
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => addProject(e)}>
                        Войти
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddProject;