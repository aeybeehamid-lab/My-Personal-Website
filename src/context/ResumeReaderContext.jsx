import { createContext, useContext, useMemo, useState } from 'react'

const ResumeReaderContext = createContext(null)

export function ResumeReaderProvider({ children }) {
  const [folded, setFolded] = useState(false)

  const value = useMemo(() => ({ folded, setFolded }), [folded])

  return (
    <ResumeReaderContext.Provider value={value}>{children}</ResumeReaderContext.Provider>
  )
}

export function useResumeReader() {
  const ctx = useContext(ResumeReaderContext)
  if (!ctx) {
    return { folded: false, setFolded: () => {} }
  }
  return ctx
}
