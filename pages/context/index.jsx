import styles from "../../styles/Home.module.css";
import Counter from "../../component/counterContext";
import Subtract from "../../component/subtractContext";
import Add from "../../component/addContext";

const Context = () => {
  return (
    <div className={styles.container}>
      <Counter />
      <Add />
      <Subtract />
    </div>
  );
};

export default Context;
