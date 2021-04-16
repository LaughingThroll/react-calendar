import React from 'react'
import styles from './modalBody.module.scss'

interface ModalBodyProps {
  children?: any
}
const { modalBody, modalBody__item } = styles

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return (
    <form className={modalBody}>
      {React.Children.map(children, (child, i) => (
        <div key={i} className={modalBody__item}>
          {child}
        </div>
      ))}
    </form>
  )
}

export default React.memo(ModalBody)
