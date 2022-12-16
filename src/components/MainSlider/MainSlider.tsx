import React, {useState, useEffect, useContext} from 'react';
import {Image, Button, Spinner} from 'react-bootstrap';

import MainCarousel from './MainCarousel';
import { ISlider } from '../../types/types';
import { Context } from '../..';
import { fetchSliders, deleteSlider } from '../../http/sliderAPI';

import './mainSlider.sass';


const MainSlider: React.FC = () => {
    const {admin} = useContext(Context);
    const [activeId, setActiveId] = useState<string>('');
    const [toggle, setToggle] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [sliders, setSliders] = useState<ISlider[]>([]);

    useEffect(() => {
        fetchSliders().then(data => {
            setSliders(data);
            setLoading(false);
        });
    }, [toggle]);

    const mouseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setActiveId('');
        // @ts-ignore
        setActiveId(e.target.getAttribute('id'));
    };

    const removeSlide = (slide: ISlider) => {
        if (window.confirm('Вы действительно хотите удалить слайд?')) {
            deleteSlider(slide.id);
            setToggle(!toggle);
        } 
    };

    return (
        <div className='slider'>             
            {loading ? <Spinner /> : <div className="slider__container">
                {sliders && sliders.map(item =>
                    <div key={item.id} className={activeId === `${item.id}` ? "slider__slide active" : 'slider__slide'}>
                        <Image src={process.env.REACT_APP_API_URL + item.photo} id={`${item.id}`} onMouseOver={(e) => mouseHandler(e)} />
                        <h3>{item.title}</h3>
                        {admin._isAuth && <Button variant={"danger"} className='btn-remove' onClick={() => removeSlide(item)}>Удалить</Button>}
                    </div>
                )}
            </div>}
            <div className='slider__carousel'>
                <MainCarousel photos={sliders} />
            </div>
        </div>
    );
};

export default MainSlider;