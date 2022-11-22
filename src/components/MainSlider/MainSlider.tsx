import React, {useState} from 'react';
import {Image} from 'react-bootstrap';

import {ekran, angara, epsilon, drvc, mainHouse, icePalace, mcd, pnk, olgino} from '../../assets/img/main/index';
import Slider from '../Slider/Slider';

import './mainSlider.sass';


const MainSlider: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('third');

    const mouseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveId('');
        // @ts-ignore
        setActiveId(e.target.getAttribute('id'));
    };

    return (
        <div className='slider'>
            <div className="slider__container">
                <div className={activeId === "first" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={olgino} id="first" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Усадьба «Ольгино»</h3>
                </div>
                <div className={activeId === "second" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={angara} id="second" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Отель на берегу Ангары</h3>
                </div>
                <div className={activeId === "third" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={ekran} id="third" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Кинотеатры Каро</h3>
                </div>
                <div className={activeId === "fourth" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={epsilon} id="fourth" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Бизнес-центр Epsilon HQ</h3>
                </div>
                <div className={activeId === "fifth" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={pnk} id="fifth" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Индустриальные здания PNK-Group</h3>
                </div>
                <div className={activeId === "sixth" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={icePalace} id="sixth" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Ледовый дворец</h3>
                </div>
                <div className={activeId === "seventh" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={mainHouse} id="seventh" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>ГМИИ им. А.С. Пушкина - Главное здание</h3>
                </div>
                <div className={activeId === "eighth" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={drvc} id="eighth" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>ГМИИ им. А.С. Пушкина - ДРВЦ</h3>
                </div>
                <div className={activeId === "ninth" ? "slider__slide active" : 'slider__slide'}>
                    <Image src={mcd} id="ninth" onMouseOver={(e) => mouseHandler(e)} />
                    <h3>Павильон МЦД</h3>
                </div>
            </div>

            <div className='slider__carousel'>
                <Slider slide1={olgino} slide2={angara} slide3={ekran} slide4={epsilon} slide5={pnk} />
            </div>
        </div>
    );
};

export default MainSlider;