import React from 'react';
import TitleStyles from './Title.styles';

export default function Title({ children, color }) {
    return <TitleStyles color={color}>{children}</TitleStyles>;
}
