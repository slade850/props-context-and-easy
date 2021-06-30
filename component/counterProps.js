const Counter = ({ count }) => {
  console.log("counter component");

  return (
    <div>
      <p className="elements">{count}</p>
    </div>
  );
};

export default Counter;
