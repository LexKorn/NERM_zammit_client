import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';

import { IDescription } from '../types/types';

interface CUSystemProps {
    id: number;
    title: string;
    description: IDescription[];
    photo: FileList;
    setTitle: (title: string) => void;
    setDescription: (description: IDescription[]) => void;
    setPhoto: (photo: FileList) => void;
    handler: (id: number, system: FormData) => Promise<unknown>;
    modalTitle: string;
    btnName: string;
    show: boolean;
    onHide: () => void;
};


const CUSystem: React.FC<CUSystemProps> = ({id, title, description, photo, setTitle, setDescription, setPhoto, handler, modalTitle, btnName, show, onHide}) => {

    const addDescription = () => {
        setDescription([...description, {description: '', id: Date.now()}]);
    };

    const removeDescription = (id: number) => {
        setDescription(description.filter(item => item.id !== id));
    };

    const changeDescription = (key: string, value: string, id: number) => {
        setDescription(description.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setPhoto(files);
        }        
    };

    const onClick = () => {
        if (!title.trim()) {
            return alert('Название системы обязательно для заполнения');
        } else if (description.length === 0) {
            return alert('Описание системы обязательно для заполнения');
        } else if (photo.length === 0) {
            return alert('Изображение необходимо загрузить');
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', JSON.stringify(description));
        for (let i = 0; i < photo.length; i++) {
            formData.append('photo', photo[i]);
        }

        if (btnName === 'Добавить') {
            // @ts-ignore
            handler(formData)
                .then(() => {
                    onHide();
                    setTitle('');
                    setDescription([]);
                    // @ts-ignore
                    setPhoto([]);
                })
                .catch(err => alert(err.response.data.message));
        } else if (btnName === 'Обновить') {
            handler(id, formData)
                .then(() => {
                    onHide();
                    setTitle('');
                    setDescription([]);
                    // @ts-ignore
                    setPhoto([]);
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название системы"
                    />

                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addDescription}
                        >Добавить описание системы
                    </Button>
                    {description && description.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control as="textarea"
                                    value={item.description}
                                    onChange={e => changeDescription('description', e.target.value, item.id)}
                                    placeholder="Введите описание"
                                    maxLength={700}
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeDescription(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}

                    <label htmlFor="file" className="mt-3">Загрузите изображения</label>       
                    <Form.Control                        
                        type="file"
                        multiple
                        onChange={selectFile}
                    />                     
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={btnName === 'Добавить' ? "outline-success" : "outline-primary"} onClick={onClick}>{btnName}</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CUSystem;