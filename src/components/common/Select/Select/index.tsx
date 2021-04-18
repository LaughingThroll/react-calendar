import React from 'react'
import styles from './select.module.scss'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value: string | number
  children?: any
}

const isOption = (child: any): boolean => child.type === 'option' || child.type?.type?.name === 'Option'
const renderOptions = (child: any): any | never => {
  try {
    if (isOption(child)) return child
  } catch (error) {
    throw new Error(error)
  }
}

const Select: React.FC<SelectProps> = ({ children, value, ...rest }) => {
  const { select, select__main } = styles

  return (
    <div className={select}>
      <select className={select__main} value={value} {...rest}>
        {React.Children.map(children, renderOptions)}
      </select>
    </div>
  )
}

export default React.memo(Select)
