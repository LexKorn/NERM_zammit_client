import React, {useState, useEffect} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import {updateServise} from '../../http/serviseAPI';
import { IServise } from '../../types/types';

interface ModalUpdateServiseProps {
    show: boolean;
    onHide: () => void;
    servise: IServise;
};


const ModalUpdateServise: React.FC<ModalUpdateServiseProps> = ({show, onHide, servise}) => {
    const [title, setTitle] = useState<string>(servise.title);    
    const [description, setDescription] = useState<string>(servise.description);   // (() => {return servise.description})
    // @ts-ignore
    const [cover, setCover] = useState<File>(servise.cover);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setCover(files[0]);
        } 
    };

    // useEffect(() => {}, []);

    const editServise = () => {
        if (!title.trim() || !description.trim()) {
            return alert('Все поля обязательны для заполнения');
        } else if (!cover) {
            return alert('Изображение необходимо загрузить');
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('cover', cover);

        updateServise(servise.id, formData).then(() => {
            onHide();
        });
    };

    // console.log(servise);
    // console.log(servise.title);
    // console.log(servise.cover);
    // console.log(description);
        

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
                    Обновить услугу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название услуги"
                    />
                    <Form.Control as="textarea"
                        className="mt-3"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Введите описание услуги"
                        maxLength={700}
                    />
                    <label htmlFor="file" className="mt-3">Загрузите изображения</label>       
                    <Form.Control                        
                        type="file"
                        onChange={selectFile}
                    />                     
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success "} onClick={editServise}>Обновить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalUpdateServise;