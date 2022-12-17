import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col, Dropdown} from 'react-bootstrap';

import {createProject} from '../../http/projectAPI';
import {Categories} from '../../types/types';

interface ModalAddProjectProps {
    show: boolean;
    onHide: () => void;
};

interface IVolume {
    id: number;
    text: string;
};

interface IInform {
    id: number;
    text: string;
};


const ModalAddProject: React.FC<ModalAddProjectProps> = ({show, onHide}) => {
    const [name, setName] = useState<string>('');    
    const [task, setTask] = useState<string>(''); 
    const [location, setLocation] = useState<string>('');    
    const [category, setCategory] = useState<string>('');
    const [customer, setCustomer] = useState<string>('');    
    const [designer, setDesigner] = useState<string>(''); 
    const [period, setPeriod] = useState<string>(''); 
    const [volume, setVolume] = useState<IVolume[]>([]);
    const [inform, setInform] = useState<IInform[]>([]);
    // @ts-ignore
    const [photo, setPhoto] = useState<FileList>([]);

    const addVolume = () => {
        setVolume([...volume, {text: '', id: Date.now()}]);
    };

    const removeVolume = (id: number) => {
        setVolume(volume.filter(item => item.id !== id));
    };

    const changeVolume = (key: string, value: string, id: number) => {
        setVolume(volume.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addInform = () => {
        setInform([...inform, {text: '', id: Date.now()}]);
    };

    const removeInform = (id: number) => {
        setInform(inform.filter(item => item.id !== id));
    };

    const changeInform = (key: string, value: string, id: number) => {
        setInform(inform.map(item => item.id === id ? {...item, [key]: value} : item));
    };

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
        formData.append('volume', JSON.stringify(volume));
        formData.append('inform', JSON.stringify(inform));

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

                    <Dropdown className="mt-3 mb-3">
                        <Dropdown.Toggle variant={"outline-dark"}>{category || 'Выберите категорию объекта'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* @ts-ignore */}
                            {Object.values(Categories).map(category => 
                                <Dropdown.Item 
                                    onClick={() => setCategory(category)} 
                                    key={category} >
                                        {category}
                                </Dropdown.Item>                                
                            )}
                        </Dropdown.Menu>
                    </Dropdown>  

                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addVolume}
                        >Добавить объём проектирования
                    </Button>
                    {volume.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.text}
                                    onChange={e => changeVolume('text', e.target.value, item.id)}
                                    placeholder="Введите работу"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeVolume(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}

                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addInform}
                        >Добавить проектные данные
                    </Button>
                    {inform.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.text}
                                    onChange={e => changeInform('text', e.target.value, item.id)}
                                    placeholder="Введите данные"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeInform(item.id)}
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
                <Button variant={"outline-success "} onClick={addProject}>Добавить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddProject;