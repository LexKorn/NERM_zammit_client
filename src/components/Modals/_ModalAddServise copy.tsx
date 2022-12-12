import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import {createServise} from '../../http/serviseAPI';

interface ModalAddServiseProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddServise: React.FC<ModalAddServiseProps> = ({show, onHide}) => {
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<string>(''); 
    // @ts-ignore
    const [cover, setCover] = useState<File>(null);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setCover(files[0]);
        } 
    };

    const addServise = () => {
        if (!title.trim() || !description.trim()) {
            return alert('Все поля обязательны для заполнения');
        } else if (!cover) {
            return alert('Изображение необходимо загрузить');
        }
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('cover', cover);

        createServise(formData).then(() => {
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
                    Добавить новую услугу
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
                <Button variant={"outline-success "} onClick={addServise}>Добавить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddServise;