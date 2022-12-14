import React from 'react';
import {Modal, Button, Form, Row, Col, Dropdown} from 'react-bootstrap';

import {Categories, IVolume, IInform, IProjectPhoto} from '../types/types';

interface CUProjectProps {
    id: number;
    name: string;
    task: string;
    location: string;
    category: string;
    customer: string;
    designer: string;
    period: string;
    volume: IVolume[];
    inform: IInform[];
    photo: IProjectPhoto[];
    setName: (name: string) => void;
    setTask: (task: string) => void;
    setLocation: (location: string) => void;
    setCategory: (category: string) => void;
    setCustomer: (customer: string) => void;
    setDesigner: (designer: string) => void;
    setPeriod: (period: string) => void;
    setVolume: (volume: IVolume[]) => void;
    setInform: (inform: IInform[]) => void;
    setPhoto: (photo: IProjectPhoto[]) => void;
    handler: (id: number, project: FormData) => Promise<unknown>;
    modalTitle: string;
    btnName: string;
    show: boolean;
    onHide: () => void;
};


const CUProject: React.FC<CUProjectProps> = ({id, name, task, location, category, customer, designer, period, volume, inform, photo, setName, setTask, setLocation, setCategory, setCustomer, setDesigner, setPeriod, setVolume, setInform, setPhoto, handler, modalTitle, btnName, show, onHide}) => {
    const addVolume = () => {
        setVolume([...volume, {volume: '', id: Date.now()}]);
    };

    const removeVolume = (id: number) => {
        setVolume(volume.filter(item => item.id !== id));
    };

    const changeVolume = (key: string, value: string, id: number) => {
        setVolume(volume.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const addInform = () => {
        setInform([...inform, {inform: '', id: Date.now()}]);
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
            // @ts-ignore
            setPhoto(files);
        }        
    };

    const onClick = () => {
        if (!name.trim() || !task.trim() || !location.trim() || !category.trim() || !customer.trim() || !designer.trim() || !period.trim()) {
            return alert('?????? ???????? ?????????????????????? ?????? ????????????????????');
        } else if (volume.length === 0) {
            return alert('???????????????????? ???????????? ???????? ???? 1 ????????????');
        } else if (inform.length === 0) {
            return alert('???????????????????? ???????????? ???????? ???? 1 ?????????????????? ????????????');
        } else if (photo.length === 0) {
            return alert('?????????????????????? ???????????????????? ??????????????????');
        }

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
            // @ts-ignore
            formData.append('photo', photo[i]);
        }

        if (btnName === '????????????????') {
            // @ts-ignore
            handler(formData)
                .then(() => {
                    onHide();
                    setName('');
                    setTask('');
                    setLocation('');
                    setCategory('');
                    setCustomer('');
                    setDesigner('');
                    setPeriod('');
                    setVolume([]);
                    setInform([]);
                    // @ts-ignore
                    setPhoto([]);
                })
                .catch(err => alert(err.response.data.message));
        } else if (btnName === '????????????????') {
            handler(id, formData)
                .then(() => {
                    onHide();
                    setName('');
                    setTask('');
                    setLocation('');
                    setCategory('');
                    setCustomer('');
                    setDesigner('');
                    setPeriod('');
                    setVolume([]);
                    setInform([]);
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
                <Modal.Title id="contained-modal-name-vcenter">
                    {modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="?????????????? ???????????????? ??????????????"
                    />
                    <Form.Control
                        className="mt-3"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="?????????????? ???????? ??????????????"
                    />
                    <Form.Control
                        className="mt-3"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="?????????????? ???????????????????????????? ??????????????"
                    />                    
                    <Form.Control
                        className="mt-3"
                        value={customer}
                        onChange={e => setCustomer(e.target.value)}
                        placeholder="?????????????? ??????????????????"
                    />
                    <Form.Control
                        className="mt-3"
                        value={designer}
                        onChange={e => setDesigner(e.target.value)}
                        placeholder="?????????????? ???????????????????????????? / ??????????????????????"
                    />
                    <Form.Control
                        className="mt-3"
                        value={period}
                        onChange={e => setPeriod(e.target.value)}
                        placeholder="?????????????? ?????????? ????????????????????"
                    />

                    <Dropdown className="mt-3 mb-3">
                        <Dropdown.Toggle variant={"outline-dark"}>{category || '???????????????? ?????????????????? ??????????????'}</Dropdown.Toggle>
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
                        >???????????????? ?????????? ????????????????????????????
                    </Button>
                    {volume.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.volume}
                                    onChange={e => changeVolume('volume', e.target.value, item.id)}
                                    placeholder="?????????????? ????????????"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeVolume(item.id)}
                                    >??????????????
                                </Button>
                            </Col>
                        </Row>    
                    )}

                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addInform}
                        >???????????????? ?????????????????? ????????????
                    </Button>
                    {inform.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control 
                                    value={item.inform}
                                    onChange={e => changeInform('inform', e.target.value, item.id)}
                                    placeholder="?????????????? ????????????"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeInform(item.id)}
                                    >??????????????
                                </Button>
                            </Col>
                        </Row>    
                    )}

                    <label htmlFor="file" className="mt-3">?????????????????? ??????????????????????</label>       
                    <Form.Control                        
                        type="file"
                        multiple
                        onChange={selectFile}
                    />                     
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={btnName === '????????????????' ? "outline-success" : "outline-primary"} onClick={onClick}>{btnName}</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>??????????????</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CUProject;