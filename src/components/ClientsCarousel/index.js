import React, { useState } from 'react';
import Carousel, { slidesToShowPlugin, arrowsPlugin, slidesToScrollPlugin, Dots } from '@brainhubeu/react-carousel';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow_right.svg';
import ClientsCarouselStyles from './ClientsCarousel.styles';

export default function ClientsCarousel() {
    const [value, setValue] = useState(0);
    return (
        <ClientsCarouselStyles>
            <Carousel
                plugins={[
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 4,
                        },
                    },
                    {
                        resolve: slidesToScrollPlugin,
                        options: {
                            numberOfSlides: 4,
                        },
                    },
                    {
                        resolve: arrowsPlugin,
                        options: {
                            arrowLeft: (
                                <button className='arrow'>
                                    <ArrowLeftIcon />
                                </button>
                            ),
                            arrowLeftDisabled: (
                                <button className='arrow' disabled>
                                    <ArrowLeftIcon />
                                </button>
                            ),
                            arrowRight: (
                                <button className='arrow'>
                                    <ArrowRightIcon />
                                </button>
                            ),
                            arrowRightDisabled: (
                                <button className='arrow' disabled>
                                    <ArrowRightIcon />
                                </button>
                            ),
                            addArrowClickHandler: true,
                        },
                    },
                ]}
                value={value}
                onChange={(val) => setValue(val)}
            >
                <img src='https://via.placeholder.com/400/0000FF?text=1' />
                <img src='https://via.placeholder.com/400/FF0000?text=2' />
                <img src='https://via.placeholder.com/400/00FF00?text=3' />
                <img src='https://via.placeholder.com/400/FFFF00?text=4' />
                <img src='https://via.placeholder.com/400/00FFFF?text=5' />
                <img src='https://via.placeholder.com/400/0000FF?text=6' />
                <img src='https://via.placeholder.com/400/FF0000?text=7' />
                <img src='https://via.placeholder.com/400/00FF00?text=8' />
                <img src='https://via.placeholder.com/400/FFFF00?text=9' />
                <img src='https://via.placeholder.com/400/00FFFF?text=10' />
                <img src='https://via.placeholder.com/400/0000FF?text=11' />
                <img src='https://via.placeholder.com/400/FF0000?text=12' />
            </Carousel>
            <Dots value={value} number={3} onChange={(val) => setValue(val)} />
        </ClientsCarouselStyles>
    );
}
