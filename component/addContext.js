import { useCounterContext } from "../context/count";
import LoadCounter from "./loadCounter";

const Add = () => {
  console.log("add component");
  const { addOne } = useCounterContext();

  return (
    <div className="flex">
      <button onClick={() => addOne()}>add</button>
      <LoadCounter compo="add" />
    </div>
  );
};

export default Add;
