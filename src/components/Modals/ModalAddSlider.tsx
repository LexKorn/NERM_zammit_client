import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import {createSlider} from '../../http/sliderAPI';

interface ModalAddSliderProps {
    show: boolean;
    onHide: () => void;
};


const ModalAddSlider: React.FC<ModalAddSliderProps> = ({show, onHide}) => {
    const [title, setTitle] = useState<string>('');
    // @ts-ignore
    const [photo, setPhoto] = useState<File>(null);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setPhoto(files[0]);
        } 
    };

    const addSlider = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('photo', photo);

        createSlider(formData).then(() => {
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
                    Добавить новый слайд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Введите название объекта"
                    />
                    <label htmlFor="file" className="mt-3">Загрузите изображение</label>       
                    <Form.Control                        
                        type="file"
                        onChange={selectFile}
                    />                     
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success "} onClick={addSlider}>Добавить</Button>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddSlider;