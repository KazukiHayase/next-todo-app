import { Checkbox } from '@/components/atoms/checkbox';
import { Tasks as ITask, useUpdateTaskMutation } from 'src/graphql/types';
import style from './style.module.scss';
import { useState } from 'react';

export interface Props {
  task: ITask;
}

export const TaskItem: React.VFC<Props> = ({
  task
}) => {
  const [isDone, setIsDone] = useState<boolean>(task.isDone)
  const [updateTaskMutation, { error }] = useUpdateTaskMutation({
    variables: {
       id: task.id,
       isDone: isDone
    }
  });
  // TODO: useCallback使うべきか調査
  const handleChange = (isDone: boolean) => {
    setIsDone(isDone);
    updateTaskMutation(); // mutation発行
  }

  if (error) {
    console.log(`エラーが発生しました：${error}`);
  }

  return (
    <li
      className={[
        style.taskItem,
        isDone ? style.done : ''
      ].join(' ')}
    >
      <Checkbox
        onChange={(e) => handleChange(e.target.checked)}
        isChecked={isDone}
        label={task.title}
      />
    </li>
  )
}

