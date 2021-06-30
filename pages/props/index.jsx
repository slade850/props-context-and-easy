import styles from "../../styles/Home.module.css";
import Counter from "../../component/counterProps";
import Subtract from "../../component/subtractProps";
import Add from "../../component/addProps";
import { useState } from "react";

const Props = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <Counter count={count} />
      <Add setCount={setCount} />
      <Subtract setCount={setCount} />
    </div>
  );
};

export default Props;
