import { Checkbox } from '../../atoms/checkbox';
import { Todos as ITodo, useUpdateTodoMutationMutation } from '../../../graphql/types';
import style from './style.module.scss';
import { useState } from 'react';

export interface Props {
  todo: ITodo;
}

export const TodoItem: React.VFC<Props> = ({
  todo
}) => {
  const [isDone, setIsDone] = useState<boolean>(todo.isDone)
  const [updateTodoMutationMutation, { error }] = useUpdateTodoMutationMutation({
    variables: {
       id: todo.id,
       isDone: isDone
    }
  });
  // TODO: useCallback使うべきか調査
  const handleChange = (isDone: boolean) => {
    setIsDone(isDone);
    updateTodoMutationMutation(); // mutation発行
  }

  if (error) {
    console.log(`エラーが発生しました：${error}`);
  }

  return (
    <li
      className={[
        style.todoItem,
        isDone ? style.done : ''
      ].join(' ')}
    >
      <Checkbox
        onChange={(e) => handleChange(e.target.checked)}
        isChecked={isDone}
        label={todo.title}
      />
    </li>
  )
}

