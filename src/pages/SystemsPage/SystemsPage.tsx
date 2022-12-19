import React, {useContext, useState, useEffect} from 'react';
import {Accordion, Container, Button, Spinner} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import Slider from '../../components/Slider/Slider';
import ModalUpdateSystem from '../../components/Modals/ModalUpdateSystem';
import { ISystem } from '../../types/types';
import { Context } from '../..';
import { fetchSystems, deleteSystem } from '../../http/systemAPI';

import './systemsPage.sass';


const SystemsPage: React.FC = () => {
    const {admin} = useContext(Context);
    const [system, setSystem] = useState<ISystem>({} as ISystem);
    const [systems, setSystems] = useState<ISystem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [toggle, setToggle] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        fetchSystems().then((data) => {
            setSystems(data);
            setLoading(false);
        });
    }, [toggle, visible]);

    const removeSystem = (system: ISystem) => {
        if (window.confirm('Вы действительно хотите удалить систему?')) {
            deleteSystem(system.id).then(() => setToggle(!toggle));
        }  
    };

    const editSystem = (system: ISystem) => {
        if (window.confirm('Вы действительно хотите изменить систему?')) {
            setSystem(system);
            setVisible(true);
        }
    };


    return (
        <Container className='systems' style={{flex: 1}}>
            <Helmet>
                <title>Цаммит. Инженерные системы</title>
                <meta name="description" content="Цаммит. Инженерные системы" />
            </Helmet>

            {loading ? <Spinner/> :
                <Accordion defaultActiveKey="10" flush style={{maxWidth: 900, margin: '0 auto'}}>
                    {systems && systems.map(item =>
                        <Accordion.Item eventKey={`${item.id}`} key={item.id}>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>
                                <Slider photos={item.photo} page="systems" />
                                <ul className="systems__list">
                                    {item.description && item.description.map(elm =>
                                        <li key={elm.id}>{elm.description}</li>
                                    )}
                                </ul>
                                {admin.isAuth &&
                                    <div style={{marginTop: 15}}>
                                        <Button variant={"outline-danger"} onClick={() => removeSystem(item)} >Удалить</Button>
                                        <Button variant={"outline-primary"} style={{marginLeft: 10}} onClick={() => editSystem(item)} >Обновить</Button>
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            }
            <ModalUpdateSystem 
                show={visible} 
                onHide={() => setVisible(false)} 
                system={system}
            />
        </Container>
    );
};

export default SystemsPage;