import React, { useState, useCallback, useEffect } from 'react'

interface useAsyncReturn<T, R> {
  asyncFn: (...args: any) => Promise<T>
  data: T
  setData: (value: T) => void
  loading: boolean
  error: R
  immediate: boolean
  setImmediate: (value: boolean) => void
}

const useAsync = <T, R = string>(
  initialValue: T,
  asyncFn: (...args: any) => Promise<T>,
  instant: boolean = true
): useAsyncReturn<T, R | null> => {
  const [data, setData] = useState<T>(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<R | null>(null)
  const [immediate, setImmediate] = useState(instant)

  const executeFn = useCallback(
    async (...args) => {
      setLoading(true)
      try {
        const res = await asyncFn(...args)
        setData(res)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    },
    [asyncFn]
  )

  useEffect(() => {
    if (immediate) executeFn()
  }, [immediate, executeFn])

  return { asyncFn, data, setData, loading, error, immediate, setImmediate }
}

export default useAsync
