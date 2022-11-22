import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './slider.sass';

interface SliderProps {
    slide1: string;
    height: number;
    slide2?: string;
    slide3?: string;
    slide4?: string;
    slide5?: string;
    
};


const Slider: React.FC<SliderProps> = ({slide1, height, ...props}) => {
    return (
        <Carousel variant="dark" interval={null}>
            <Carousel.Item>
                <img
                className='slider-item'
                src={slide1}
                alt="First slide"
                // style={{margin: '0 auto', 'height': height}}
                />
            </Carousel.Item>
            {props.slide2 &&
                <Carousel.Item>
                    <img
                    className='slider-item'
                    src={props.slide2}
                    alt="First slide"
                    // style={{margin: '0 auto', 'height': height}}
                    />
                </Carousel.Item>
            }
            {props.slide3 &&
                <Carousel.Item>
                    <img
                    className='slider-item'
                    src={props.slide3}
                    alt="First slide"
                    // style={{margin: '0 auto', 'height': height}}
                    />
                </Carousel.Item>
            }
            {props.slide4 &&
                <Carousel.Item>
                    <img
                    className='slider-item'
                    src={props.slide4}
                    alt="First slide"
                    // style={{margin: '0 auto', 'height': height}}
                    />
                </Carousel.Item>
            }
            {props.slide5 &&
                <Carousel.Item>
                    <img
                    className='slider-item'
                    src={props.slide5}
                    alt="First slide"
                    // style={{margin: '0 auto', 'height': height}}
                    />
                </Carousel.Item>
            }
        </Carousel>
    );
};

export default Slider;