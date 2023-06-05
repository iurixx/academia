import React, { createContext } from "react";
import { node } from "prop-types";

export const CoreContext = createContext();

export default function CoreContextProvider({ children }) {
  return <CoreContext.Provider value={{}}>{children}</CoreContext.Provider>;
}

CoreContextProvider.propTypes = {
  children: node.isRequired,
};
