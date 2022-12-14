import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import {createSystem} from '../../http/systemAPI';

interface ModalAddSystemProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddSystem: React.FC<ModalAddSystemProps> = ({show, onHide}) => {
    const [title, setTitle] = useState<string>('');    
    const [description, setDescription] = useState<string>(''); 
    // @ts-ignore
    const [photo, setPhoto] = useState<FileList>([]);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setPhoto(files);
        }        
    };

    const addSystem = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        for (let i = 0; i < photo.length; i++) {
            formData.append('photo', photo[i]);
        }

        createSystem(formData).then(() => {
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
                    Добавить новую систему
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
                    <Form.Control as="textarea"
                        className="mt-3"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Введите описание системы"
                        maxLength={700}
                    />
                    <label htmlFor="file" className="mt-3">Загрузите изображения</label>       
                    <Form.Control                        
                        type="file"
                        multiple
                        onChange={selectFile}
                    />                     
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success "} onClick={addSystem}>Добавить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddSystem;