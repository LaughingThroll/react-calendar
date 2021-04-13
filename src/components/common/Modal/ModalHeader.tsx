import React from 'react'
import { TChildren } from '../../../types/utilsTypes'

interface IModalHeader {
  className?: string[]
  children: TChildren
}

const ModalHeader: React.FC<IModalHeader> = ({ className = [], children }) => {
  return <div className={`modal-header ${className.join(' ')}`}>{children}</div>
}

export default React.memo(ModalHeader)
