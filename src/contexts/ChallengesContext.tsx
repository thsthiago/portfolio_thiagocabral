import { createContext, useState } from 'react'

interface ChallengesContextData {
  key: number
  setKey(number: number): void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }) {
  const [key, setKey] = useState(0)

  return (
    <ChallengesContext.Provider
      value={{
        key,
        setKey
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}
