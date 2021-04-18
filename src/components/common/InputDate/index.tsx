import React from 'react'
import styles from './inputDate.module.scss'

export interface InputDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
}

const InputDate: React.FC<InputDateProps> = ({ label, ...rest }) => {
  const { inputDate, inputDate__field } = styles
  return (
    <label className={inputDate}>
      {label} <input className={inputDate__field} type="date" {...rest} />
    </label>
  )
}

export default React.memo(InputDate)
