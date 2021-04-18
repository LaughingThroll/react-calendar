import React from 'react'
import styles from './modalFooter.module.scss'

interface ModalFooterProps {
  children?: JSX.Element | JSX.Element[]
  className?: string[]
}

const { modalFooter } = styles

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className = [] }) => (
  <div className={`${modalFooter} ${className.join(' ')}`}>{children}</div>
)

export default React.memo(ModalFooter)
