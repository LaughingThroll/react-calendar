import React from 'react'

interface IModalProps {
  open: boolean
  onClose: () => void
}

const Modal: React.FC<IModalProps> = ({ children, open, onClose }) => {
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    if (!target.closest('.modal') && onClose) {
      onClose()
    }
  }

  return (
    <>
      {open && (
        <div className="overlay" onClick={handleClick}>
          <div className="modal">{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
