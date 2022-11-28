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
    const [customer, setCustomer] = useState<string>('');    
    const [designer, setDesigner] = useState<string>(''); 
    const [period, setPeriod] = useState<string>(''); 
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
        formData.append('customer', customer);
        formData.append('designer', designer);
        formData.append('period', period);

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
                        placeholder="Введите название объекта"
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
                        placeholder="Введите местоположение объекта"
                    />
                    <Form.Control
                        className="mt-3"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        placeholder="Введите категорию объекта"
                    />
                    <Form.Control
                        className="mt-3"
                        value={customer}
                        onChange={e => setCustomer(e.target.value)}
                        placeholder="Введите заказчика"
                    />
                    <Form.Control
                        className="mt-3"
                        value={designer}
                        onChange={e => setDesigner(e.target.value)}
                        placeholder="Введите проектировщика / архитектора"
                    />
                    <Form.Control
                        className="mt-3"
                        value={period}
                        onChange={e => setPeriod(e.target.value)}
                        placeholder="Введите сроки выполнения"
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