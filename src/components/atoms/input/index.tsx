import React from "react"
import classNames from "classnames"
import style from './style.module.scss'

export interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
}

// 一旦汎用性は考えない
export const Input: React.VFC<Props> = ({onChange, placeholder, className}) => {
  return (
    <input
      type='text'
      onChange={onChange}
      className={classNames(style.input, className)}
      placeholder={placeholder}
    />
  )
}
