"use client";

import { createContext, useState } from "react";

export const ContextProvider = createContext(null);

const Context = ({ children }) => {
  const [sortBy, setSortBy] = useState("default");

  return (
    <ContextProvider.Provider value={{ sortBy, setSortBy }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;