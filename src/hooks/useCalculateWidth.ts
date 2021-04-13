import { useEffect, useState, useRef } from 'react'

const useCalucateWidth = <T, R extends HTMLElement>(updater: T) => {
  const elementRef = useRef<R>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.getBoundingClientRect().width.toFixed(1)
      setWidth(+width)
    }
  }, [updater])

  return {
    elementRef,
    width,
  }
}

export default useCalucateWidth
