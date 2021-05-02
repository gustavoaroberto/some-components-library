import React from 'react';

import Text from '../Text';

export default {
    title: 'Base/Text',
    component: Text,
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

const Template = (args) => <Text color={args.color}>{args.children}</Text>;

export const Default = Template.bind({});
Default.args = {
    children:
        'Sint proident exercitation nostrud sunt amet amet. Quis in tempor deserunt cillum ullamco id incididunt ex culpa adipisicing sunt. Velit magna non incididunt voluptate Lorem ea aliqua non quis fugiat duis laboris. Et duis laboris elit ut qui dolore aliquip ipsum officia irure do officia. Ea quis fugiat dolor cillum. Adipisicing aliquip consequat Lorem consectetur esse elit est aliqua dolore incididunt duis consectetur ex.',
    color: 'text',
};
