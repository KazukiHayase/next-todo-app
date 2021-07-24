import React from "react"
import style from './style.module.scss'

export const Header: React.VFC = () => {
  return (
    <header className={style.header}>
      <h1>Todo App</h1>
    </header>
  )
}
