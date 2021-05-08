import { useState, useEffect } from 'react'
import { getCountDays } from '../utils/date'

// format Date  2021-01-22
interface CountDays {
  countDays: number
  isValidDays: boolean
}

const useCountDays = (firstDate: string, endDate: string): CountDays => {
  const [countDays, setCountDays] = useState(0)
  const [isValidDays, setIsValidDays] = useState(true)

  useEffect(() => {
    const localCountDays = getCountDays(firstDate, endDate)
    const condition = localCountDays > 0
    condition && setCountDays(localCountDays)
    setIsValidDays(condition)
  }, [firstDate, endDate])

  return { countDays, isValidDays }
}

export default useCountDays
