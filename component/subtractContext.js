import { useCounterContext } from "../context/count";
import LoadCounter from "./loadCounter";

const Subtract = () => {
  console.log("subtract component");
  const { subtractOne } = useCounterContext();

  return (
    <div className="flex">
      <button onClick={() => subtractOne()}>subtract</button>
      <LoadCounter compo="subtract" />
    </div>
  );
};

export default Subtract;
