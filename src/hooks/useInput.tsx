import React, { useState, useEffect } from 'react'

enum EValidators {
  IS_EMPTY = 'isEmpty',
}

interface IValidators {
  isEmpty?: boolean
}

interface IValidatorsReturn extends IValidators {
  inputValid: boolean
}

const useValidators = (value: string, validators: IValidators): IValidatorsReturn => {
  const [isEmpty, setIsEmpty] = useState(true)
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    for (let validator in validators) {
      switch (validator) {
        case EValidators.IS_EMPTY: {
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
        }
        default: {
          throw new Error('You input incorrect validators. Please check useInput')
        }
      }
    }
  }, [value, validators])

  useEffect(() => {
    setInputValid(!isEmpty)
  }, [isEmpty])

  return {
    isEmpty,
    inputValid,
  }
}

interface IUseInput extends IValidatorsReturn {
  value: string
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  isDirty: boolean
}

const useInput = (initialValue = '', validators: IValidators = {}): IUseInput => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidators(value, validators)

  const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
    if (isDirty) {
      setDirty(true)
    }
  }

  return {
    value,
    changeValue,
    isDirty,
    ...valid,
  }
}

export default useInput
