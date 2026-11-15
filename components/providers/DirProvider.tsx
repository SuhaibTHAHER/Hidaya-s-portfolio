'use client'
import { createContext, useContext } from 'react'

const DirContext = createContext<'ltr' | 'rtl'>('ltr')

/** Text direction of the current page, so motion offsets can mirror in Arabic (RTL). */
export function DirProvider({ dir, children }: { dir: 'ltr' | 'rtl'; children: React.ReactNode }) {
  return <DirContext.Provider value={dir}>{children}</DirContext.Provider>
}

export const useDir = () => useContext(DirContext)
