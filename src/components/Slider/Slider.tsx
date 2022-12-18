import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { ISystemPhoto, IProjectPhoto } from '../../types/types';

import './slider.sass';

interface SliderProps {
    photos: (ISystemPhoto | IProjectPhoto)[];
    page: string;
};


const Slider: React.FC<SliderProps> = ({photos, page}) => {

    return (
        <Carousel variant={page === "systems" ? "dark" : ""} interval={null}>
            {photos && photos.map(item =>
                <Carousel.Item key={item.id}>
                    <img
                        className='slider-item'
                        style={{objectFit: page === "systems" ? "contain" : "cover"}}
                        src={process.env.REACT_APP_API_URL + item.photo}
                        alt={`image ${item.id}`}
                    />
                </Carousel.Item>
            )}
        </Carousel>
    );
};

export default Slider;