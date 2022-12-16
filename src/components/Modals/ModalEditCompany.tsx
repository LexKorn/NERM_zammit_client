import React, {useState} from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';
import { AxiosError } from 'axios';

import {updateCompany} from '../../http/companyAPI';

interface ModalEditCompanyProps {
    show: boolean;
    onHide: () => void;
};

interface IDepartment {
    id: number;
    department: string;
};


const ModalEditCompany: React.FC<ModalEditCompanyProps> = ({show, onHide}) => {
    const [description, setDescription] = useState<string>('ООО «Инженерное бюро Цаммит» успешно выполняет в Москве и в российских регионах полный комплекс работ по проектированию инженерных систем зданий и сооружений, включая все проектные стадии. Коллектив квалифицированных специалистов нашей фирмы имеет большой опыт выполнения сложных инновационных проектов. В процессе совместной работы с немецкими специалистами наши сотрудники постоянно совершенствуют свои знания, участвуя в совместных разработках и используя новейшие технические решения. Начиная с 2000 года наши специалисты совместно с немецкими коллегами разработали более 100 российских и интернациональных проектов.');    
    const [department, setDepartment] = useState<IDepartment[]>([
        {
            id: 1,
            department: 'Испания – Памплона'
        },
        {
            id: 2,
            department: 'Китай – Чаньчунь'
        },
        {
            id: 3,
            department: 'Мексика – Пуэбла'
        },
        {
            id: 4,
            department: 'ОАЭ – Абу-Даби'
        },
        {
            id: 5,
            department: 'Польша – Познань'
        },
        {
            id: 6,
            department: 'Германия – Берлин, Зальцгиттер, Гамбург, Штутгарт, Бремен, Вольфсбург, Хемниц, Целле, Бергиш-Гладбах'
        }
    ]);

    const addDepartment = () => {
        setDepartment([...department, {department: '', id: Date.now()}]);
    };

    const removeDepartment = (id: number) => {
        setDepartment(department.filter(item => item.id !== id));
    };

    const changeDepartment = (key: string, value: string, id: number) => {
        setDepartment(department.map(item => item.id === id ? {...item, [key]: value} : item));
    };

    const editCompany = () => {
        if (!description.trim()) {
            return alert('Описание компании обязательно для заполнения');
        } else if (department.length === 0) {
            return alert('Необходимо задать хотя бы 1 отделение');
        }

        try {
            const formData = new FormData();
            formData.append('description', description);
            formData.append('department', JSON.stringify(department));

            updateCompany(1, formData).then(() => {
                onHide();
            });
        } catch(err: unknown) {
            const error = err as AxiosError;
            alert(JSON.parse(error.request.response).message);
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
                    Изменить данные о компании
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control as="textarea"
                            type="text" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Введите новое описание" 
                            maxLength={1200}
                        />
                    </Form.Group>
                    
                    <Button 
                        className="mt-3 w-100"
                        variant="outline-secondary"
                        onClick={addDepartment}
                        >Добавить отделение / филиал
                    </Button>
                    {department.map(item =>
                        <Row className="mt-3" key={item.id}>
                            <Col md={9}>
                                <Form.Control
                                    value={item.department}
                                    onChange={e => changeDepartment('department', e.target.value, item.id)}
                                    placeholder="Введите отделение"
                                />
                            </Col>
                            <Col md={3}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeDepartment(item.id)}
                                    >Удалить
                                </Button>
                            </Col>
                        </Row>    
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-primary"} onClick={editCompany}>Обновить</Button>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditCompany;