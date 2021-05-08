import React from 'react'
import styles from './form.module.scss'

export interface FormProps {
  children?: any
  classNames?: string[]
}

const { form, form__item } = styles

const Form: React.FC<FormProps> = ({ children, classNames = [] }) => {
  return (
    <form className={[form, ...classNames].join(' ')}>
      {React.Children.map(children, (child, i) => (
        <div key={i} className={form__item}>
          {child}
        </div>
      ))}
    </form>
  )
}

export default React.memo(Form)
