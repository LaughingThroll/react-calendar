import React, { useState } from 'react'

const useSelect = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return {
    value,
    changeValue,
    setValue,
  }
}

export default useSelect
