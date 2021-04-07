import { useState } from 'react'

const useToggle = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const changeOpen = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    changeOpen,
  }
}

export default useToggle
