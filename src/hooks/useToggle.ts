import { useState } from 'react'

interface IUseToggle {
  isOpen: boolean
  toggleOpen: () => void
}

const useToggle = (initialValue: boolean = false): IUseToggle => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggleOpen,
  }
}

export default useToggle
