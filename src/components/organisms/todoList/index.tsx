import React from "react"
import { Tasks as ITask } from 'src/graphql/types'
import { TaskItem } from "@/components/organisms/taskItem"
import style from './style.module.scss'

export interface Props {
  tasks: ITask[];
  categoryName: string;
}

export const TaskList: React.VFC<Props> = ({tasks, categoryName}) => {
  return (
    <>
      <h1 className={style.categoryName}>{categoryName}</h1>
      <ul>
        {tasks.map(task => (
          // TODO: スタイルの付け方考える
          <TaskItem task={task} key={task.id} />
        ))}
      </ul>
    </>
  )
}
