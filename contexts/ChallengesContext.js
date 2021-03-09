import { createContext, useState } from "react"

export const ChallengesContext = createContext({})

export function ChallengesProvider({children}) {
  const [key, setKey] = useState(0)

  return (
    <ChallengesContext.Provider value={{
      key,
      setKey
    }}>
      {children}
    </ChallengesContext.Provider>
  )
}