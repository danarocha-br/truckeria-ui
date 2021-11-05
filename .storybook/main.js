module.exports = {
  stories: [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.tsx"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    "@storybook/theming",
    'storybook-addon-designs',
    'storybook-mobile',
    '@storybook/addon-a11y',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
};
