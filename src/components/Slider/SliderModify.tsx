import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { ISystemPhoto, IProjectPhoto } from '../../types/types';

import './slider.sass';

interface SliderProps {
    photos: (ISystemPhoto | IProjectPhoto)[];
};


const SliderModify: React.FC<SliderProps> = ({photos}) => {

    return (
        <Carousel variant="dark" interval={null}>
            {photos && photos.map(item =>
                <Carousel.Item key={item.id}>
                    <img
                        className='slider-item'
                        src={item.photo}
                        alt={`image ${item.id}`}
                    />
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default SliderModify;