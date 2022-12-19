import React, {useContext, useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { AxiosError } from 'axios';

import {MAIN_ROUTE} from '../../utils/consts';
import {Context} from '../..';
import {updateLogin} from '../../http/adminAPI';

interface ModalLoginUpdateProps {
    show: boolean;
    onHide: () => void;
};


const ModalLoginUpdate: React.FC<ModalLoginUpdateProps> = ({show, onHide}) => {
    const {admin} = useContext(Context);
    const navigate = useNavigate();
    const [password, setPassword] = useState<string>('');
    const [passwordR, setPasswordR] = useState<string>('');

    const email: string = admin.email;

    const loginHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password === passwordR) {
            try {
                await updateLogin(email, password, admin.id);
                admin.setIsAuth(false);
                onHide();
                navigate(MAIN_ROUTE);
    
            } catch (err: unknown) {
                const error = err as AxiosError;
                alert(JSON.parse(error.request.response).message);
            } 
        } else {
            alert('Пароли не совпали. Повторите попытку')
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
                    Сменить пароль
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Новый пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter password" 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Повторите новый пароль</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={passwordR}
                            onChange={e => setPasswordR(e.target.value)}
                            placeholder="Enter password" 
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={(e) => loginHandler(e)}>
                        Обновить
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalLoginUpdate;