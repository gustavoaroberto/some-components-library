import React from 'react';

import Title from '../Title';

export default {
    title: 'Base/Title',
    component: Title,
    argTypes: {
        children: {
            control: 'text',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'terciary', 'text'],
            },
        },
    },
};

const Template = (args) => <Title color={args.color}>{args.children}</Title>;

export const Default = Template.bind({});
Default.args = {
    children: 'Hello World',
    color: 'primary',
};
