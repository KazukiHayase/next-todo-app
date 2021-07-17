const path = require('path');

module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  // See also: https://github.com/storybookjs/storybook/issues/2320
  webpackFinal: async (config, { mode }) => {
    config.module.rules.push({
        test: /\.scss$/,
        loaders: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: {
                        mode: 'local',
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        context: path.resolve(__dirname, 'src'),
                        hashPrefix: 'my-custom-hash',
                    },
                },
            },
            require.resolve('sass-loader')
        ],
    })

    return config;
  },
}
