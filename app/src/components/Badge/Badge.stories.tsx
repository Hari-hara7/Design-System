import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<{ label: string; color?: 'primary' | 'secondary' | 'success' | 'error' }> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Badge',
  color: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Badge',
  color: 'success',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Badge',
  color: 'error',
};
