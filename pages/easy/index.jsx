import styles from "../../styles/Home.module.css";
import Counter from "../../component/counterEasy";
import Subtract from "../../component/subtractEasy";
import Add from "../../component/addEasy";

const Easy = () => {
  return (
    <div className={styles.container}>
      <Counter />
      <Add />
      <Subtract />
    </div>
  );
};

export default Easy;
