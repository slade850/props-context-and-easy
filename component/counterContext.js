import { useCounterContext } from "../context/count";

const Counter = () => {
  console.log("counter component");
  const { counter } = useCounterContext();

  return (
    <div>
      <p className="elements">{counter}</p>
    </div>
  );
};

export default Counter;
