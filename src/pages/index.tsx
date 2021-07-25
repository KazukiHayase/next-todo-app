import Head from 'next/head'
import Image from 'next/image'
import { TaskItem } from '../components/organisms/taskItem';
import { Tasks as ITask } from 'src/graphql/types'
import { TaskList } from '@/components/organisms/todoList';


export default function Home() {
  const tasks: ITask[] = []
  for (let i = 0; i < 3; i++) {
    const task: ITask = {
      id: i,
      title: `タスク${i}`,
      isDone: (i % 2) === 0
    }
    tasks.push(task)
  }

  return (
    <TaskList tasks={ tasks } />
  )
}
