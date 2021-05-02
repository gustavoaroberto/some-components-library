const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss', 'storybook-addon-styled-component-theme/dist/preset'],
    webpackFinal: async (config) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

        const assetLoader = {
            loader: assetRule.loader,
            options: assetRule.options || assetRule.query,
        };

        config.module.rules.unshift({
            test: /\.svg$/,
            use: ['@svgr/webpack', assetLoader],
        });

        // Return the altered config
        return config;
    },
};
