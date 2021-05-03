import React, { useState } from 'react'

interface IUseInput {
  value: string
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  isDirty: boolean
}

const useInput = (initialValue = ''): IUseInput => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)

  const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (!isDirty) setDirty(true)
  }

  return {
    value,
    changeValue,
    isDirty,
  }
}

export default useInput
