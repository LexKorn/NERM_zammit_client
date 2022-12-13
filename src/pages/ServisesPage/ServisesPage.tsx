import React, {useContext, useState, useEffect} from 'react';
import {Tab, Nav, Row, Col, Button, Spinner} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import ModalUpdateServise from '../../components/Modals/ModalUpdateServise';
import { IServise } from '../../types/types';
import { Context } from '../..';
import { fetchServises, deleteServise } from '../../http/serviseAPI';

import './servisesPage.sass';


const ServisesPage: React.FC = () => {
    const {admin} = useContext(Context);
    const [servise, setServise] = useState<IServise>({} as IServise);
    const [servises, setServises] = useState<IServise[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [toggle, setToggle] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        fetchServises().then((data) => {
            setServises(data);
            setLoading(false);
        });
    }, [toggle, visible]);

    const removeServise = (servise: IServise) => {
        if (window.confirm('Вы действительно хотите удалить услугу?')) {
            deleteServise(servise.id).then(() => setToggle(!toggle));
        }  
    };

    const editServise = (servise: IServise) => {
        if (window.confirm('Вы действительно хотите изменить услугу?')) {
            setServise(servise);
            setVisible(true);
        }
    };


    return (
        <div className='servises' style={{flex: 1}}>
            <Helmet>
                <title>Цаммит. Услуги</title>
                <meta name="description" content="Цаммит. Услуги" />
            </Helmet>
            
            {loading ? <Spinner/> : 
                <>
                    {servises.length > 0 && <Tab.Container id="left-tabs-example" defaultActiveKey={servises[0].id}>
                        <Row>
                            <Col sm={3} className='tabs__col'>
                                <Nav variant="pills" className="flex-column">
                                    {servises.map(item =>
                                        <Nav.Item className='tabs__item' key={item.id}>
                                            <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                                        </Nav.Item>
                                    )}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    {servises.map(item => 
                                        <Tab.Pane eventKey={item.id} key={item.id}>
                                            <img src={process.env.REACT_APP_API_URL + item.cover} alt={item.title} className='tabs__img'/>
                                            <p>{item.description}</p>
                                            {admin.isAuth &&
                                                <div style={{marginTop: 15}}>
                                                    <Button 
                                                        variant={"outline-danger"} 
                                                        onClick={() => removeServise(item)} 
                                                        >Удалить
                                                    </Button>
                                                    <Button 
                                                        variant={"outline-primary"} 
                                                        style={{marginLeft: 10}} 
                                                        onClick={() => editServise(item)} 
                                                        >Обновить
                                                    </Button>
                                                </div>
                                            }
                                        </Tab.Pane>
                                    )}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>}
                </>                
            }
            <ModalUpdateServise 
                show={visible} 
                onHide={() => setVisible(false)} 
                servise={servise}
            />
        </div>
    );
};

export default ServisesPage;