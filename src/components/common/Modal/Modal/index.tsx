import React from 'react'
import styles from './modal.module.scss'
import { TChildren } from '../../../../types/utilsTypes'

export interface ModalProps {
  open: boolean
  onClose: () => void
  children?: TChildren
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const { overlay, modal } = styles

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    if (target?.id === 'overlay') onClose()
  }

  return (
    <>
      {open && (
        <div id="overlay" className={overlay} onClick={handleClick}>
          <div className={modal}>{children}</div>
        </div>
      )}
    </>
  )
}

export default React.memo(Modal)
