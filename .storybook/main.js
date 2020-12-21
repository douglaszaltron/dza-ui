module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(ts|tsx)',
        '../packages/**/*.stories.mdx',
        '../packages/**/*.stories.@(ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
