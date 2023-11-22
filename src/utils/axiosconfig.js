const getTokenFromLocalStorage = localStorage.getItem("MallAdmin")
  ? JSON.parse(localStorage.getItem("MallAdmin"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
