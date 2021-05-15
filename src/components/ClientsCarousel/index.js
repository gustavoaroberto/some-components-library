import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow_left.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow_right.svg';
import ClientsCarouselStyles from './ClientsCarousel.styles';

export default function ClientsCarousel() {
    const items = [
        <div className='con'>
            <div>
                <img src='https://via.placeholder.com/400/0000FF?text=1' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/FF0000?text=2' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/00FF00?text=3' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/FFFF00?text=4' />
            </div>
        </div>,
        <div className='con'>
            <div>
                <img src='https://via.placeholder.com/400/FFFF00?text=4' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/FF0000?text=2' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/0000FF?text=1' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/00FF00?text=3' />
            </div>
        </div>,
        <div className='con'>
            <div>
                <img src='https://via.placeholder.com/400/0000FF?text=1' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/FF0000?text=2' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/00FF00?text=3' />
            </div>
            <div>
                <img src='https://via.placeholder.com/400/FFFF00?text=4' />
            </div>
        </div>,
    ];

    return (
        <ClientsCarouselStyles>
            <Carousel
                slidesToShow={4}
                slidesToScroll={4}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button className='arrow' onClick={previousSlide}>
                        <ArrowLeftIcon />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button className='arrow' onClick={nextSlide}>
                        <ArrowRightIcon />
                    </button>
                )}
            >
                <div>
                    <img src='https://farmersfreshco.com/wp-content/uploads/2016/06/placeholder-round.png' />
                </div>
                <div>
                    <img src='https://farmersfreshco.com/wp-content/uploads/2016/06/placeholder-round.png' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/00FF00?text=3' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/FFFF00?text=4' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/FFFF00?text=4' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/FF0000?text=2' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/0000FF?text=1' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/00FF00?text=3' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/0000FF?text=1' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/FF0000?text=2' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/00FF00?text=3' />
                </div>
                <div>
                    <img src='https://via.placeholder.com/400/FFFF00?text=4' />
                </div>
            </Carousel>
        </ClientsCarouselStyles>
    );
}
