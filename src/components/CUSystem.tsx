import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

interface CUSystemProps {
    id: number;
    title: string;
    description: string;
    photo: FileList;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setPhoto: (photo: FileList) => void;
    handler: (id: number, system: FormData) => Promise<unknown>;
    modalTitle: string;
    btnName: string;
    show: boolean;
    onHide: () => void;
};


const CUSystem: React.FC<CUSystemProps> = ({id, title, description, photo, setTitle, setDescription, setPhoto, handler, modalTitle, btnName, show, onHide}) => {
    // const [title, setTitle] = useState<string>('');    
    // const [description, setDescription] = useState<string>(''); 
    // // @ts-ignore
    // const [photo, setPhoto] = useState<FileList>([]);

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const files: FileList | null = e.target.files;
        if (files) {
            setPhoto(files);
        }        
    };

    const onClick = () => {
        if (!title.trim() || !description.trim()) {
            return alert('Все поля обязательны для заполнения');
        } else if (photo.length === 0) {
            return alert('Изображение необходимо загрузить');
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        for (let i = 0; i < photo.length; i++) {
            formData.append('photo', photo[i]);
        }

        if (btnName === 'Добавить') {
            // @ts-ignore
            handler(formData)
                .then(() => {
                    onHide();
                    setTitle('');
                    setDescription('');
                    // @ts-ignore
                    setPhoto([]);
                })
                .catch(err => alert(err.response.data.message));
        } else if (btnName === 'Обновить') {
            handler(id, formData)
                .then(() => {
                    onHide();
                    setTitle('');
                    setDescription('');
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
                <Button variant={btnName === 'Добавить' ? "outline-success" : "outline-primary"} onClick={onClick}>{btnName}</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CUSystem;