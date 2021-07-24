import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TaskItem, Props } from './index';

export default {
  title: 'Organisms/TaskItem',
  component: TaskItem
} as Meta;

const Template: Story<Props> = (args) => (
  <TaskItem {...args} />
)

export const Default = Template.bind({});
Default.args = {task: {id: 1, title: 'テストテスト', isDone: false}};
