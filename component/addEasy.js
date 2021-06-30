import { useStoreActions } from "easy-peasy";
import LoadCounter from "./loadCounter";

const Add = () => {
  console.log("add component");
  const addOne = useStoreActions((actions) => actions.addOne);

  return (
    <div className="flex">
      <button onClick={() => addOne()}>add</button>
      <LoadCounter compo="add" />
    </div>
  );
};

export default Add;
