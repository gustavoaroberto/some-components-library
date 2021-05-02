import React from 'react';
import TextStyles from './Text.styles';

export default function Text({ children, color }) {
    return <TextStyles color={color}>{children}</TextStyles>;
}
