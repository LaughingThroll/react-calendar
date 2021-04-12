import React from 'react'

interface IModalHeader {
  className?: string[]
}

const ModalHeader: React.FC<IModalHeader> = ({ className = [], children }) => {
  return <div className={`modal-header ${className.join(' ')}`}>{children}</div>
}

export default ModalHeader
