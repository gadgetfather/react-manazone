import React, { createContext, useContext, useReducer, useState } from "react";

const routerContext = createContext();

function RouterProvider({ children }) {
  const [page, setPage] = useState("");
  return (
    <routerContext.Provider value={{ page, setPage }}>
      {children}
    </routerContext.Provider>
  );
}
const useRouter = () => useContext(routerContext);

export { useRouter, RouterProvider };
