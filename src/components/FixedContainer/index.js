import React from 'react';
import FixedContainerStyles from './FixedContainer.styles';

export default function FixedContainer({ children }) {
    return <FixedContainerStyles>{children}</FixedContainerStyles>;
}
