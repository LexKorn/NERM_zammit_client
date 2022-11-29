import React from 'react';
import {Tab, Nav, Row, Col, Container, Button} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import {first, second, third, fourth, fifth, sixth, seventh} from '../../assets/img/servises/index';
import { IServise } from '../../types/types';

import './servisesPage.sass';


const ServisesPage: React.FC = () => {
    // const {user} = useContext(Context);
    const isAuth: boolean = true;

    const servises: IServise[] = [
        {
            id: 1,
            title: 'Разработка проектной и рабочей документации',
            description: 'Наша цель – выполнение работ в полном соответствии с требованиями клиента. На всех этапах проектирования мы предъявляем повышенные требования к качеству. Наша сертифицированная система качественного исполнения гарантирует последовательный и скоординированный процесс проектирования и монтажа.',
            cover: first
        },
        {
            id: 2,
            title: 'Технические консультации',
            description: 'Наши специалисты проконсультируют Вас по техническим вопросам и помогут выбрать наиболее оптимальное решение.',
            cover: second
        },
        {
            id: 3,
            title: 'Сбор данных и подготовка ТЗ',
            description: 'Наши специалисты собирут необходимые исходные данные и подгототовят Техническое задание с учётом требований Заказчика.',
            cover: third
        },
        {
            id: 4,
            title: 'Экспертиза проектов',
            description: 'По желанию Заказчика/Инвестора наши специалисты выполнят проверку готовых проектов на соответствие российским нормам, проведут ревизию документации и подготовят заключение по стоимости материалов и оборудования.',
            cover: fourth
        },
        {
            id: 5,
            title: 'Подготовка тендерной документации',
            description: 'Для участия проектных и строительных организаций в конкурсных проектах, а также для Заказчика/Инвестора мы подготовим пакет тендерной документации, включая перечень выполняемых работ, и другие необходимые документы. Также на профессиональном уровне мы проверим ваши контрактные документы на соответствие проектным решениям.',
            cover: fifth
        },
        {
            id: 6,
            title: 'Авторский и технический надзор',
            description: 'Наши специалисты по договорённости с Заказчиком проводят авторский и технический надзор.',
            cover: sixth
        },
        {
            id: 7,
            title: 'Сдача объекта в эксплуатацию',
            description: 'Поготовка пакета приемо-сдаточной документации объекта, включая консультации по оформлению актов сдачи-приемки оборудования, протоколов испытаний и других необходимых документов в соответствии с нормативными требованиями, а также с учетом требований муниципальных органов и служб эксплуатации.',
            cover: seventh
        },
    ];

    return (
        <div className='servises' style={{flex: 1}}>
            <Helmet>
                <title>Цаммит. Услуги</title>
                <meta name="description" content="Цаммит. Услуги" />
            </Helmet>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey={servises[0].id}>
                <Row>
                    <Col sm={3} className='tabs__col'>
                    <Nav variant="pills" className="flex-column">
                        {servises && servises.map(item =>
                            <Nav.Item className='tabs__item' key={item.id}>
                                <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {servises && servises.map(item => 
                                <Tab.Pane eventKey={item.id} key={item.id}>
                                    <img src={item.cover} alt={item.title} className='tabs__img'/>
                                    <p>{item.description}</p>
                                    {isAuth &&
                                        <div style={{marginTop: 15}}>
                                            <Button variant={"outline-danger "} >Удалить</Button>
                                            <Button variant={"outline-primary "} style={{marginLeft: 10}} >Обновить</Button>
                                        </div>
                                    }
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default ServisesPage;