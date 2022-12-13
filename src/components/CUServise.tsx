import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

interface CUServiseProps {
    id: number;
    title: string;
    description: string;
    cover: File;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setCover: (cover: File) => void;
    handler: (id: number, servise: FormData) => Promise<unknown>;
    modalTitle: string;
    btnName: string;
    show: boolean;
    onHide: () => void;
};


const CUServise: React.FC<CUServiseProps> = ({id, title, description, cover, setTitle, setDescription, setCover, handler, modalTitle, btnName, show, onHide}) => {
    
    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setCover(files[0]);
        } 
    };

    const onClick = () => {
        if (!title.trim() || !description.trim()) {
            return alert('Все поля обязательны для заполнения');
        } else if (!cover) {
            return alert('Изображение необходимо загрузить');
        }
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('cover', cover);

        if (btnName === 'Добавить') {
            // @ts-ignore
            handler(formData)
                .then(() => {
                    onHide();
                    setTitle('');
                    setDescription('');
                    // @ts-ignore
                    setCover(null);
                })
                .catch(err => alert(err.response.data.message));
        } else if (btnName === 'Обновить') {
            handler(id, formData)
                .then(() => {
                    onHide();
                    setTitle('');
                    setDescription('');
                    // @ts-ignore
                    setCover(null);
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
                <Button variant={btnName === 'Добавить' ? "outline-success" : "outline-primary"} onClick={onClick}>{btnName}</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CUServise;