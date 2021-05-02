import React from 'react';
import ButtonStyles from './Button.styles';

export default function Button({ outline, color, children, fullWidth = false }) {
    return (
        <ButtonStyles outline={outline} color={color} fullWidth={fullWidth}>
            {children}
        </ButtonStyles>
    );
}
