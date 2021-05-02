import React from 'react';

import Container from '../Container';
import Title from '../Title';

export default {
    title: 'Base/Container',
    component: Container,
    argTypes: {
        backgroundImage: {
            control: 'text',
        },
        backgroundColor: {
            control: 'text',
        },
    },
};

const Template = (args) => (
    <Container backgroundColor={args.backgroundColor} backgroundImage={args.backgroundImage}>
        <div className='text'>
            <Title color='text'>Hello world caraio</Title>
            <p>
                Exercitation exercitation ipsum laboris magna amet. Proident ad eiusmod dolore anim consectetur velit est nostrud deserunt officia labore
                reprehenderit. Lorem adipisicing deserunt veniam exercitation qui est ipsum voluptate culpa irure. Laboris anim elit esse velit ullamco et
                irure. Minim est sunt tempor consequat. Culpa sit amet Lorem eiusmod id irure est ut adipisicing ex exercitation.
            </p>
        </div>
        <div className='image'>
            <img src='https://thumbs.dreamstime.com/b/pen-paper-blank-131774984.jpg' />
        </div>
    </Container>
);

export const Default = Template.bind({});
Default.args = {
    backgroundImage: 'https://thumbs.dreamstime.com/b/pen-paper-blank-131774984.jpg',
    backgroundColor: 'red',
};
