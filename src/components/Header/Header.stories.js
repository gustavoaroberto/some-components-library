import React from 'react';

import Header from './index';

export default {
    title: 'Base/Header',
    component: Header,
    argTypes: {
        logo: {
            control: 'text',
        },
        menu: {
            type: 'array',
        },
    },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    logo: 'https://via.placeholder.com/350x150',
    menu: [
        {
            title: 'Quem somos',
            url: '#quemSomos',
        },
        {
            title: 'Galeria',
            url: '#galeria',
        },
        {
            title: 'Contato',
            url: '#contato',
        },
    ],
};
