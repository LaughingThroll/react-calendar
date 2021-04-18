import React from 'react'
import styles from './option.module.scss'

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  title: string
}

const Option: React.FC<OptionProps> = ({ title, ...rest }) => {
  const { select__option } = styles
  return (
    <option className={select__option} {...rest}>
      {title}
    </option>
  )
}

export default React.memo(Option)
