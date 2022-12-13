import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { AxiosError } from 'axios';

import { updateContacts } from '../../http/contactsAPI';

interface ModalEditContactsProps {
    show: boolean;
    onHide: () => void;
};


const ModalEditContacts: React.FC<ModalEditContactsProps> = ({show, onHide}) => {
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [link, setLink] = useState<string>('');

    const editContacts = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('phone', phone);
            formData.append('address', address);
            formData.append('link', link);

            await updateContacts(1, formData).then(() => {
                onHide();
            });
            
        } catch(err: unknown) {
            const error = err as AxiosError;
            alert(JSON.parse(error.request.response).message);
        }        
    };

    // const editContacts = (e: React.FormEvent) => {
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
                    Изменить контактные данные
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Введите новый телефон" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Адрес</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Введите новый адрес" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Ссылка на карту</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={link}
                            onChange={e => setLink(e.target.value)}
                            placeholder="Введите новую ссылку на карту" 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-primary"} onClick={editContacts}>Обновить</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditContacts;