import React from 'react';

import Button from './index';

export default {
    title: 'Base/Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
        },
        outline: {
            control: 'boolean',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'terciary', 'text'],
            },
        },
        fullWidth: {
            control: 'boolean',
        },
    },
};

const Template = (args) => (
    <Button outline={args.outline} color={args.color} fullWidth={args.fullWidth}>
        {args.children}
    </Button>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Hello World',
    color: 'primary',
};
