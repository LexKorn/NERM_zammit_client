import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';

import {createProject} from '../../http/projectAPI';

interface ModalAddProjectProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddProject: React.FC<ModalAddProjectProps> = ({show, onHide}) => {
    const [name, setName] = useState<string>('');    
    const [task, setTask] = useState<string>(''); 
    const [location, setLocation] = useState<string>('');    
    const [category, setCategory] = useState<string>(''); 
    // @ts-ignore
    const [photo, setPhoto] = useState<FileList>([]);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setPhoto(files);
        }        
    };

    const addProject = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('task', task);
        formData.append('location', location);
        formData.append('category', category);
        for (let i = 0; i < photo.length; i++) {
            formData.append('photo', photo[i]);
        }

        createProject(formData).then(data => {
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
                <Modal.Title id="contained-modal-name-vcenter">
                    Добавить новый проект
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Введите название проекта"
                    />
                    <Form.Control
                        className="mt-3"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="Введите цель проекта"
                    />
                    <Form.Control
                        className="mt-3"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Введите местоположение проекта"
                    />
                    <Form.Control
                        className="mt-3"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        placeholder="Введите категорию проекта"
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
                <Button variant={"outline-success "} onClick={addProject}>Добавить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddProject;