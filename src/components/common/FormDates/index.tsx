import React from 'react'
import styles from './formDates.module.scss'
import { TChildren } from '../../../types/utilsTypes'

export interface FormDatesProps {
  title?: string
  inner?: boolean
  children?: TChildren
}

const FormDates: React.FC<FormDatesProps> = ({ title = 'Title', inner, children }) => {
  const { formDates, formDates__title, formDates__inner } = styles

  return (
    <div className={formDates}>
      <h5 className={formDates__title}>{title}</h5>
      {inner ? <div className={formDates__inner}> {children}</div> : children}
    </div>
  )
}

export default React.memo(FormDates)
