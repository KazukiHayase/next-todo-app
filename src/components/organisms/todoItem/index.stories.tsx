import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TodoItem, Props } from './index';

export default {
  title: 'Organisms/TodoItem',
  component: TodoItem
} as Meta;

const Template: Story<Props> = (args) => (
  <TodoItem {...args} />
)

export const Default = Template.bind({});
Default.args = {todo: {id: 1, title: 'テストテスト', isDone: false}};
