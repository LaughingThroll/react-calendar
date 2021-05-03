import React from 'react'
import styles from './formItem.module.scss'
import { TChildren } from '../../../types/utilsTypes'

export interface FormItemProps {
  title?: string
  inner?: boolean
  children?: TChildren
  classNames?: string[]
}

const FormItem: React.FC<FormItemProps> = ({ title = 'Title', inner, classNames = [], children }) => {
  const { formItem, formItem__title, formItem__inner } = styles

  return (
    <div className={[formItem, ...classNames].join(' ')}>
      <h5 className={formItem__title}>{title}</h5>
      {inner ? <div className={formItem__inner}> {children}</div> : children}
    </div>
  )
}

export default React.memo(FormItem)
