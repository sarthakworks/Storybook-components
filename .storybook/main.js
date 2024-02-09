/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
  webpackFinal: async (storybookWebpackConfig, { configType }) => {
    // Create a new rule for HTML files
    const htmlRule = {
      test: /\.html$/,
      use: 'html-loader',
    };

    // Add the new rule to the webpack config
    storybookWebpackConfig.module.rules.push(htmlRule);

    return storybookWebpackConfig;
  },
};

export default config;
