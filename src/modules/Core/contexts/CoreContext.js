import React, { createContext, useContext } from 'react'
import { node } from 'prop-types'

export const CoreContext = createContext()

export const useCoreContext = () => {
  return useContext(CoreContext)
}

export default function CoreContextProvider({ children }) {
  return <CoreContext.Provider value={{}}>{children}</CoreContext.Provider>
}

CoreContextProvider.propTypes = {
  children: node.isRequired,
}
