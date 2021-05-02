import React from 'react';
import ContainerStyles from './Container.styles';

export default function Container({ children, backgroundImage, backgroundColor }) {
    return (
        <ContainerStyles backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
            {children}
        </ContainerStyles>
    );
}
