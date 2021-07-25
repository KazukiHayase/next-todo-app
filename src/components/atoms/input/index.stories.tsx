import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, Props } from './index';

export default {
  title: 'Atoms/Input',
  component: Input
} as Meta;

const Template: Story<Props> = (args) => (
  <Input {...args} />
)

export const Default = Template.bind({});
Default.args = {placeholder: 'placeholder'};
