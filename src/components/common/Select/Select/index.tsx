import React from 'react'
import styles from './select.module.scss'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string | number
  children?: any
}

const Select: React.FC<SelectProps> = ({ children, value, ...rest }) => {
  const { select, select__main } = styles

  return (
    <div className={select}>
      <select className={select__main} value={value} {...rest}>
        {children}
      </select>
    </div>
  )
}

export default React.memo(Select)
