import React, { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./contexts";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

const App = () => {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}> {/* with useReducer */} 
        {/* <MovieContext.Provider value={{ cartData, setCartData }}> */} {/*with useState*/} 
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
