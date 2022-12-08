import React, {useContext, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { AxiosError } from 'axios';

import {ADMIN_ROUTE} from '../../utils/consts';
import {Context} from '../..';
import {login} from '../../http/adminAPI';

interface ModalLoginProps {
    show: boolean;
    onHide: () => void;
};


const ModalLogin: React.FC<ModalLoginProps> = ({show, onHide}) => {
    const {admin} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            admin.setIsAuth(true);
            onHide();
            navigate(ADMIN_ROUTE);

        } catch (err: unknown) {
            const error = err as AxiosError;
            alert(JSON.parse(error.request.response).message);
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
                    Вход для адмиистратора
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter email" 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter password" 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => loginHandler(e)}>
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

export default ModalLogin;