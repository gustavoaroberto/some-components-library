import React from 'react';
import TextImageContainerStyles from './TextImageContainer.styles';

export default function TextImageContainer({ image, children }) {
    return <TextImageContainerStyles image={image}>{children}</TextImageContainerStyles>;
}
