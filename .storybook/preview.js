import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import '../src/styles/reset.css';
import '../src/styles/typography.css';
import '@brainhubeu/react-carousel/lib/style.css';
import 'bulma/css/bulma.min.css';

const themes = [
    {
        name: 'Default',
        primaryColor: '#939398',
        secondColor: '#9A8455',
        terciaryColor: '#57609F',
        textColor: 'black',
        textHoverColor: 'white',
        buttonColor: 'red',
        buttonHoverColor: 'green',
        buttonTextColor: 'white',
    },
    {
        name: 'Other',
        primaryColor: 'blue',
        secondColor: '#5a7268',
        terciaryColor: '#36443e',
        textColor: 'red',
        textHoverColor: 'white',
    },
];

addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
