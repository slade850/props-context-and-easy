import { setStorageReload, getStorageReload } from "../service/storage";

const LoadCounter = ({ compo }) => {
  const currentStep = getStorageReload(compo);
  setStorageReload(compo, +currentStep + 1);

  return <p className="elementsRl">{currentStep ? currentStep : 0}</p>;
};

export default LoadCounter;
