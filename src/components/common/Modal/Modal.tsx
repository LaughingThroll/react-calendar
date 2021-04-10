import React, { useEffect, useRef } from 'react'

import { TChildren } from '../../../types/utilsTypes'

interface IModalProps {
  open: boolean
  children?: TChildren
  onClose: () => void
}

const Modal: React.FC<IModalProps> = ({ children, open, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlayRef.current) return
    overlayRef.current.classList.add('overlay--open')
  }, [open])

  // Здесь не очень идеальное решение. Я пробовал использовать библиотеку react-spring но она недавно перешла обновилась и толком нету документации
  function overlayTransition(this: any) {
    onClose()
    ;(this as HTMLDivElement).removeEventListener('animationend', overlayTransition)
  }

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    if (!target.closest('.modal') && onClose && overlayRef.current) {
      const $overlay = overlayRef.current

      $overlay.classList.remove('overlay--open')
      window.requestAnimationFrame(() => {
        $overlay.classList.add('overlay--close')
      })

      $overlay.addEventListener('animationend', overlayTransition)
    }
  }

  return (
    <>
      {open && (
        <div className="overlay" ref={overlayRef} onClick={handleClick}>
          <div className="modal">{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
