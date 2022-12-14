import React, {useContext, useState, useEffect} from 'react';
import {Accordion, Container, Button, Spinner} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import SliderModify from '../../components/Slider/SliderModify';
import ModalUpdateSystem from '../../components/Modals/ModalUpdateSystem';
import { ISystem } from '../../types/types';
// import {ad1, ad2, ad3, autp1, autp2, cool1, et1, et2, et3, ht1, ht2, it1, it2, it3, lt1, lt2, odn1, odn2, sa1, sa2} from '../../assets/img/systems/index';
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

    // const systems: ISystem[] = [
    //     {
    //         id: 1,
    //         title: 'Водоснабжение и канализация',
    //         description: 'Система водоснабжения - это совокупность зданий, сооружений и инженерных сетей, предназначенных для приема воды из источника водозабора, ее подготовки и подачи потребителям. Система канализации - это специальная система трубопровода по сбору и отведению сточных вод до точки утилизации.',
    //         photos: [
    //             {
    //                 id: 1,
    //                 systemId: 1,
    //                 photo: sa1
    //             },
    //             {
    //                 id: 2,
    //                 systemId: 1,
    //                 photo: sa2
    //             },
    //         ]
    //     },
    //     {
    //         id: 2,
    //         title: 'АУПТ и противопожарный водопровод',
    //         description: 'Внутренний противопожарный водопровод (ВПВ) – система обеспечения противопожарной безопасности внутри общественных зданий. Это автономный трубопровод, который обеспечивается разного рода техническим оснащением для обеспечение подачи воды к пожарным кранам.',
    //         photos: [
    //             {
    //                 id: 3,
    //                 systemId: 2,
    //                 photo: autp1
    //             },
    //             {
    //                 id: 4,
    //                 systemId: 2,
    //                 photo: autp2
    //             },
    //         ]
    //     },{
    //         id: 3,
    //         title: 'Отопление и теплоснабжение',
    //         description: 'Системы теплоснабжения – это комплекс технических устройств, обеспечивающих: приготовление теплоносителя (ТЭЦ, котельная), транспортировку теплоносителя (тепловые сети), распределение тепловой энергии к отдельным потребителям',
    //         photos: [
    //             {
    //                 id: 5,
    //                 systemId: 3,
    //                 photo: ht1
    //             },
    //             {
    //                 id: 6,
    //                 systemId: 3,
    //                 photo: ht2
    //             },
    //         ]
    //     },{
    //         id: 4,
    //         title: 'Электроснабжение, электрооборудование',
    //         description: 'Система электроснабжения - это совокупность электроустановок, предназначенных для обеспечения потребителей электрической энергией. Электрооборудование — это изделие, предназначенное для производства, передачи и изменения характеристик электрической энергии, а также для её преобразования в энергию другого вида.',
    //         photos: [
    //             {
    //                 id: 7,
    //                 systemId: 4,
    //                 photo: et1
    //             },
    //             {
    //                 id: 8,
    //                 systemId: 4,
    //                 photo: et2
    //             },
    //             {
    //                 id: 9,
    //                 systemId: 4,
    //                 photo: et3
    //             },
    //         ]
    //     },
    // ];

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
                                <SliderModify photos={item.photo} />
                                <p className="systems__text">{item.description}</p>
                                {admin.isAuth &&
                                    <div style={{marginTop: 15}}>
                                        <Button variant={"outline-danger"} onClick={() => removeSystem(item)} >Удалить</Button>
                                        <Button variant={"outline-primary"} style={{marginLeft: 10}} onClick={() => editSystem(item)} >Обновить</Button>
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                    {/* <Accordion.Item eventKey="0">
                        <Accordion.Header>Водоснабжение и канализация</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={sa1} slide2={sa2} />
                            <p className="systems__text">Система водоснабжения - это совокупность зданий, сооружений и инженерных сетей, предназначенных для приема воды из источника водозабора, ее подготовки и подачи потребителям.</p> 
                            <p className="systems__text">Система канализации - это специальная система трубопровода по сбору и отведению сточных вод до точки утилизации.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>АУПТ и противопожарный водопровод</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={autp1} slide2={autp2} />
                            <p className="systems__text">Внутренний противопожарный водопровод (ВПВ) – система обеспечения противопожарной безопасности внутри общественных зданий. Это автономный трубопровод, который обеспечивается разного рода техническим оснащением для обеспечение подачи воды к пожарным кранам.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Отопление и теплоснабжение</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={ht1} slide2={ht2} />
                            <p className="systems__text">Системы теплоснабжения – это комплекс технических устройств, обеспечивающих:</p>
                            <ul className="systems__list">
                                <li>приготовление теплоносителя (ТЭЦ, котельная)</li>
                                <li>транспортировку теплоносителя (тепловые сети)</li>
                                <li>распределение тепловой энергии к отдельным потребителям</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Вентиляция и кондиционирование</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={lt1} slide2={lt2} />
                            <p className="systems__text">Системы вентиляции и кондиционирования являются неотъемлемой частью любого сооружения для создания комфортного микроклимата в помещении, а также поддержания в заданных пределах параметров воздуха: температуры, влажности и химического состава.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Холодоснабжение</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={cool1} />
                            <p className="systems__text">Холодоснабжение — это обеспечение потребителей холодом искусственного происхождения. Системы холодоснабжения представляют собой комплексы оборудования, предназначенного для создания и поддержания определенных температурных условий.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Электроснабжение, электрооборудование</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={et1} slide2={et2} slide3={et3} />
                            <p className="systems__text">Система электроснабжения - это совокупность электроустановок, предназначенных для обеспечения потребителей электрической энергией. </p> 
                            <p className="systems__text">Электрооборудование — это изделие, предназначенное для производства, передачи и изменения характеристик электрической энергии, а также для её преобразования в энергию другого вида.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Системы связи и сигнализации</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={it1} slide2={it2} slide3={it3} />
                            <p className="systems__text">В состав систем связи и сигнализации входят: СКС и ЛВС, телефония, интернет и телевидение, системы безопасноси и системы пожарной безопасноси.</p>
                            <p className="systems__text">Системы безопасности предназначены для повышения безопасности функционирования объекта и обеспечение эффективной защиты от несанкционированных действий нарушителей. В состав СБ входят: система охранно-тревожной сигнализации (СОТС), система контроля и управления доступом (СКУД), система охранная телевизионная (СОТ).</p>	
                            <p className="systems__text">К системам пожарной безопасности относятся: автоматическая пожарная сигнализация (АПС), система оповещения и управления эвакуацией людей при пожаре (СОУЭ).</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Автоматизация и диспетчеризация</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={ad1} slide2={ad2} slide3={ad3} />
                            <p className="systems__text">Раздел "Автоматизация и Диспетчеризация Инженерных Систем" предполагает создание Автоматизированной Системы Диспетчерского Управления Инженерными Системами Здания (АСДУ) и может включать в себя следующее оборудование:</p> 	
                            <ul className="systems__list">
                                <li>системы общеобменной вентиляции и кондиционирования</li>
                                <li>система хозяйственно-бытовой канализации</li>
                                <li>насосные станции хозяйственно-питьевого водоснабжения</li>
                                <li>система холодоснабжения</li>
                                <li>система управления микроклиматом</li>
                                <li>система контроля протечек</li>
                                <li>системы электроснабжения и электроосвещения</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Наружные сети и сооружения</Accordion.Header>
                        <Accordion.Body>
                            <Slider slide1={odn1} slide2={odn2} />
                            <p className="systems__text">Наружными сетями и сооружениями считаются объекты канализации и трубопроводы, находящиеся вне дома. Данные сооружения могут использоваться такими инженерными системами, как:</p>
                            <ul className="systems__list">
                                <li>Водоснабжение и канализация</li>
                                <li>Тепловые сети</li>
                                <li>Электроснабжение</li>
                                <li>Слаботочные сети</li>
                                <li>Газовые трубопроводы</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Энергоэффективность</Accordion.Header>
                        <Accordion.Body>
                            <p className="systems__text">Энергоэффективность — эффективное использование энергетических ресурсов. Использование меньшего количества энергии для обеспечения того же уровня энергетического обеспечения зданий или технологических процессов на производстве.</p>
                        </Accordion.Body>
                    </Accordion.Item> */}
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