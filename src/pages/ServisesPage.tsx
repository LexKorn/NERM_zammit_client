import React from 'react';
import {Tab, Nav, Row, Col, Container} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import {first, second, third, fourth, fifth, sixth, seventh} from '../assets/img/servises/index';

import './servises.sass';


const ServisesPage: React.FC = () => {
    return (
        <Container style={{flex: 1}}>
            <Helmet>
                <title>Цаммит. Услуги</title>
                <meta name="description" content="Цаммит. Услуги" />
            </Helmet>
            
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Разработка проектной и рабочей документации</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Технические консультации</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Сбор данных и подготовка ТЗ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">Экспертиза проектов</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth">Подготовка тендерной документации</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sixth">Авторский и технический надзор</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="seventh">Сдача объекта в эксплуатацию</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <img src={first} alt="first" className='tabs__img'/>
                            <p>Наша цель – выполнение работ в полном соответствии с требованиями клиента. На всех этапах проектирования мы предъявляем повышенные требования к качеству. Наша сертифицированная система качественного исполнения гарантирует последовательный и скоординированный процесс проектирования и монтажа.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <img src={second} alt="second" className='tabs__img'/>
                            <p>Наши специалисты проконсультируют Вас по техническим вопросам и помогут выбрать наиболее оптимальное решение.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <img src={third} alt="third" className='tabs__img'/>
                            <p>Наши специалисты собирут необходимые исходные данные и подгототовят Техническое задание с учётом требований Заказчика.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <img src={fourth} alt="fourth" className='tabs__img'/>
                            <p>По желанию Заказчика/Инвестора наши специалисты выполнят проверку готовых проектов на соответствие российским нормам, проведут ревизию документации и подготовят заключение по стоимости материалов и оборудования.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <img src={fifth} alt="fifth" className='tabs__img'/>
                            <p>Для участия проектных и строительных организаций в конкурсных проектах, а также для Заказчика/Инвестора мы подготовим пакет тендерной документации, включая перечень выполняемых работ, и другие необходимые документы. Также на профессиональном уровне мы проверим ваши контрактные документы на соответствие проектным решениям..</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                            <img src={sixth} alt="sixth" className='tabs__img'/>
                            <p>Наши специалисты по договорённости с Заказчиком проводят авторский и технический надзор.</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh">
                            <img src={seventh} alt="seventh" className='tabs__img'/>
                            <p>Поготовка пакета приемо-сдаточной документации объекта, включая консультации по оформлению актов сдачи-приемки оборудования, протоколов испытаний и других необходимых документов в соответствии с нормативными требованиями, а также с учетом требований муниципальных органов и служб эксплуатации.</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default ServisesPage;