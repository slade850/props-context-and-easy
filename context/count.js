import { createContext, useContext, useState } from "react";

const CounterContext = createContext(0);

const CounterProvider = ({ children, initialCount = 0 }) => {
  const [counter, setCounter] = useState(initialCount);

  const addOne = () => setCounter(counter + 1);
  const subtractOne = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, addOne, subtractOne }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCounterContext = () => useContext(CounterContext);
