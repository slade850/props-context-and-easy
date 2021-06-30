import { useStoreState } from "easy-peasy";

const Counter = () => {
  console.log("counter component");
  const count = useStoreState((state) => state.count);

  return (
    <div>
      <p className="elements">{count}</p>
    </div>
  );
};

export default Counter;
