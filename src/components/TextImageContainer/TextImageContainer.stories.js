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
        <Text color='text'>Eu consectetur minim nisi aliqua quis. Commodo nostrud magna ea non laboris ex. Labore magna ad nisi labore eu.</Text>
        <div>
            <Button color='text'>Saiba mais</Button>
            <Button color='text' outline>
                Saiba mais
            </Button>
        </div>
    </TextImageContainer>
);

export const Default = Template.bind({});
Default.args = {
    image: 'https://thumbs.dreamstime.com/b/pen-paper-blank-131774984.jpg',
};
