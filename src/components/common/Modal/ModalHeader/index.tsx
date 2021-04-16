import React from 'react'
import styles from './modalHeader.module.scss'
import { TChildren } from '../../../../types/utilsTypes'

interface ModalHeaderProps {
  className?: string[]
  children?: TChildren
}

const { modalHeader } = styles

const ModalHeader: React.FC<ModalHeaderProps> = ({ className = [], children }) => {
  return <div className={`${modalHeader} ${className.join(' ')}`}>{children}</div>
}

export default React.memo(ModalHeader)
