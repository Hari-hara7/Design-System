import React from 'react';
import { Meta } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

export const Default = () => <Navbar />;
