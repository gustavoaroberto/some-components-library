import React from 'react';

import TextImageContainer from './index';
import Button from '../Button';
import Title from '../Title';
import Text from '../Text';

export default {
    title: 'Base/TextImageContainer',
    component: TextImageContainer,
    argTypes: {
        image: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
    },
};

const Template = (args) => (
    <TextImageContainer image={args.image}>
        <Title color='text'>Desconfia de alguma assinatura?</Title>
        <Text color='text'>
            Proident exercitation nisi do adipisicing commodo commodo consectetur sint est qui culpa dolore. Elit enim ullamco sint id aliqua aliquip sint esse.
            Labore elit dolor consequat velit ullamco ut. Non velit non exercitation culpa exercitation minim culpa do esse laborum. Magna laboris nisi proident
            anim ea in incididunt aliquip irure anim est. Velit enim nostrud qui in velit ipsum elit incididunt.
        </Text>
        <div>
            <Button className='button' color='text'>
                Saiba mais
            </Button>
            <Button className='button' color='text' outline>
                Saiba mais
            </Button>
        </div>
    </TextImageContainer>
);

export const Default = Template.bind({});
Default.args = {
    image: 'https://thumbs.dreamstime.com/b/pen-paper-blank-131774984.jpg',
};
