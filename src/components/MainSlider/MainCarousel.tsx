import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { ISlider } from '../../types/types';

import './mainCarousel.sass';

interface SliderProps {
    photos: ISlider[];
};


const MainCarousel: React.FC<SliderProps> = ({photos}) => {

    return (
        <Carousel interval={null}>
            {photos && photos.map(item =>
                <Carousel.Item key={item.id}>
                    <img
                        className='slide-item'
                        src={item.photo}
                        alt={`image ${item.id}`}
                    />
                    <Carousel.Caption>
                        <h3 className='slide-item__title'>{item.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default MainCarousel;