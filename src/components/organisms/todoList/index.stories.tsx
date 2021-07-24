import React, { ComponentProps, useCallback, useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tasks as ITask } from 'src/graphql/types';
import { TaskList, Props } from './index';

export default {
  title: 'Organisms/TaskList',
  component: TaskList
} as Meta;

const Template: Story<Props> = (args) => (
  <TaskList {...args} />
)

const tasks: ITask[] = []
for (let i = 0; i < 3; i++) {
  const task: ITask = {
    id: i,
    title: `タスク${i}`,
    isDone: (i % 2) === 0
  }
  tasks.push(task)
}

export const Default = Template.bind({});
Default.args = {tasks: tasks};
