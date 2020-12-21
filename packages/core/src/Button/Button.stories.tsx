import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
    title: 'Core/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    variant: 'contained',
    children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    variant: 'contained',
    children: 'Button',
};
