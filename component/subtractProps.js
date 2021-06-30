import LoadCounter from "./loadCounter";

const Subtract = ({ setCount }) => {
  console.log("subtract component");

  return (
    <div className="flex">
      <button onClick={() => setCount((prev) => prev - 1)}>subtract</button>
      <LoadCounter compo="subtract" />
    </div>
  );
};

export default Subtract;
