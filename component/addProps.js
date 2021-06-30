import LoadCounter from "./loadCounter";

const Add = ({ setCount }) => {
  console.log("add component");

  return (
    <div className="flex">
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <LoadCounter compo="add" />
    </div>
  );
};

export default Add;
