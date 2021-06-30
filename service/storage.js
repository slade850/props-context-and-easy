export const setStorageReload = (name, value) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(name, value);
  }
};

export const getStorageReload = (name) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(name);
  }
};

export const clearReload = () => {
  window.localStorage.removeItem("add");
  window.localStorage.removeItem("subtract");
};
