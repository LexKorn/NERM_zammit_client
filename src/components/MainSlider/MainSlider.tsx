import React from 'react';

// import ekran from '../../assets/img/main/projects_kino_ekran.webp';
import {ekran, angara, epsilon, drvc, mainHouse, icePalace, mcd, pnk, olgino} from '../../assets/img/main/index';

import './mainSlider.sass';


const MainSlider: React.FC = () => {
    return (
        <div className='slider'>
            {/* <img className='slider__test' src={mcd} /> */}           
            {/* <div className='slider__test'></div>  */}
            <div className="slider__container">
                <div className='slider__test'
                    style={{backgroundImage: 'url(' + process.env.REACT_APP_FRONT_URL + 'static/media/' + 'projects_angara_1.webp)'}}
                ></div>
              <div
                  className="slider__slide"
                  style={{background: olgino}}>
                <h3>Усадьба «Ольгино»</h3>
              </div>
              <div>
                <img className="slider__slide" src={process.env.REACT_APP_FRONT_URL + 'static/media/' + 'projects_angara_1.webp'} />
                <h3>Отель на берегу Ангары</h3>
              </div>
              <div>
                <img className="slider__slide" src={ekran} />
                <h3>Кинотеатры Каро</h3>
              </div>
              <div
                  className="slider__slide"
                  style={{backgroundImage: 'url("../../assets/img/main/projects_kino_ekran.webp")'}}>
                <h3>Бизнес-центр Epsilon HQ</h3>
              </div>
              <div
                  className="slider__slide"
                  style={{backgroundImage: `${pnk}`}}>
                <h3>Индустриальные здания PNK-Group</h3>
              </div>
              <div
                  className="slider__slide"
                  style={{backgroundImage: `${icePalace}`}}>
                <h3>Ледовый дворец</h3>
              </div>
              <div
                  className="slider__slide"
                  style={{backgroundImage: `${mainHouse}`}}>
                <h3>ГМИИ им. А.С. Пушкина - Главное здание</h3>
              </div>
              <div
                    className="slider__slide"
                    style={{backgroundImage: `${drvc}`}}>
                <h3>ГМИИ им. А.С. Пушкина - ДРВЦ</h3>
              </div>
              <div
                  className="slider__slide"
                  style={{backgroundImage: `${mcd}`}}>
                <h3>Павильон МЦД</h3>
              </div>
            </div>
        </div>
    );
};

export default MainSlider;