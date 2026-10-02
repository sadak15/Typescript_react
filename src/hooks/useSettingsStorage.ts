import { useEffect, useState } from 'react'

export interface Settings {
  language: string
  notifications: boolean
}

function useSettingsStorage(key: string, initialValue: Settings): [Settings, (val: Settings) => void] {
  const [value, setValue] = useState<Settings>(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useSettingsStorage
