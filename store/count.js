import { action } from "easy-peasy";

const model = {
  count: 0,
  addOne: action((state) => {
    state.count += 1;
  }),
  subtractOne: action((state) => {
    state.count -= 1;
  }),
};

export default model;
