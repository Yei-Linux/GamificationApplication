import { useEffect, useState } from 'react'
import { PREFIX } from '../constants';

export const useLocalStorage = (key : string, initialValue : any) => {
  const prefixedKey : string =  `${PREFIX} ${key}`;

  const [value, setValue] = useState(() => {
    const ISSERVER = typeof window === 'undefined'
    if (!ISSERVER) {
      const jsonValue = localStorage.getItem(prefixedKey)
      if (jsonValue != null) return JSON.parse(jsonValue)

      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue
      }
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}

export default useLocalStorage
