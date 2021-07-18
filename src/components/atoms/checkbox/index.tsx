import style from './style.module.scss';

export interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked?: boolean;
  isDisabled?: boolean;
  label: string;
}

export const Checkbox: React.VFC<Props> = ({
  onChange,
  isChecked,
  isDisabled,
  label
}) => {

  return (
    <label className={style.label}>
      <input
        type="checkbox"
        className={style.checkbox}
        onChange={onChange}
        checked={isChecked}
        disabled={isDisabled}
      />
      {label}
    </label>
  )
}
