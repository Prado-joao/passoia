import { createContext, useContext, useState } from "react";

const CorContext = createContext();

export function CorProvider({ children }) {
  const [corAtual, setCorAtual] = useState("#DD5C86");

  return (
    <CorContext.Provider value={{ corAtual, setCorAtual }}>
      {children}
    </CorContext.Provider>
  );
}

export const useCor = () => useContext(CorContext);
