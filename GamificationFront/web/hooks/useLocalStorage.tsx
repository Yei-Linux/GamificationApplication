import { useEffect, useState } from 'react'

const PREFIX = 'codepen-clone-'

export const useLocalStorage = (key : any, initialValue : any) => {
  const prefixedKey = PREFIX + key

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