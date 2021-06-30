import { useStoreActions } from "easy-peasy";
import LoadCounter from "./loadCounter";

const Subtract = () => {
  console.log("subtract component");
  const subtractOne = useStoreActions((actions) => actions.subtractOne);

  return (
    <div className="flex">
      <button onClick={() => subtractOne()}>subtract</button>
      <LoadCounter compo="subtract" />
    </div>
  );
};

export default Subtract;
