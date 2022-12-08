import React, {useState} from 'react';
import {Image} from 'react-bootstrap';

import {ekran, angara, epsilon, drvc, mainHouse, icePalace, mcd, pnk, olgino} from '../../assets/img/main/index';
import MainCarousel from './MainCarousel';
import { ISlider } from '../../types/types';

import './mainSlider.sass';


const MainSlider: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('3');

    const sliders: ISlider[] = [
        {
            id: 1,
            title: 'Усадьба «Ольгино»',
            photo: olgino
        },
        {
            id: 2,
            title: 'Отель на берегу Ангары',
            photo: angara
        },
        {
            id: 3,
            title: 'Кинотеатры Каро',
            photo: ekran
        },
        {
            id: 4,
            title: 'Бизнес-центр Epsilon HQ',
            photo: epsilon
        },
        {
            id: 5,
            title: 'Индустриальные здания PNK-Group',
            photo: pnk
        },
    ];

    const mouseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveId('');
        // @ts-ignore
        setActiveId(e.target.getAttribute('id'));
    };

    return (
        <div className='slider'>
            <div className="slider__container">
                {sliders && sliders.map(item =>
                    <div key={item.id} className={activeId === `${item.id}` ? "slider__slide active" : 'slider__slide'}>
                        <Image src={item.photo} id={`${item.id}`} onMouseOver={(e) => mouseHandler(e)} />
                        <h3>{item.title}</h3>
                    </div>
                )}
            </div>
            <div className='slider__carousel'>
                <MainCarousel photos={sliders} />
            </div>
        </div>
    );
};

export default MainSlider;