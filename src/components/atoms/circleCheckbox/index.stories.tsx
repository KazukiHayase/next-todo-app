import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox, Props } from './index';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox
} as Meta;

const Template: Story<Props> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({});
Default.args = {label: 'テストです'};
