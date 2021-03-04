import { createContext } from 'react'

export const SiteSize = createContext({
  defaultSize: true,
  setSize: () => { }
})

export const SizeContext = createContext(SiteSize)