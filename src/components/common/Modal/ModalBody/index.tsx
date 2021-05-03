import React from 'react'
import styles from './modalBody.module.scss'

interface ModalBodyProps {
  children?: any
  classNames?: string[]
}
const { modalBody } = styles

const ModalBody: React.FC<ModalBodyProps> = ({ children, classNames = [] }) => {
  return <div className={[modalBody, ...classNames].join(' ')}>{children}</div>
}

export default React.memo(ModalBody)
