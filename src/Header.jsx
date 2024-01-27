import React, { useContext, useState } from "react";
import logo from "./assets/logo.svg";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import ring from "./assets/ring.svg";
import shopingCart from "./assets/shopping-cart.svg";
import CartDetails from "./Cine/CartDetails";
import { MovieContext, ThemeContext } from "./contexts";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCartShow = () => {
    setShowCart(true);
  };

  // provider

  // const { cartData } = useContext(MovieContext); // with sate
  const { state } = useContext(MovieContext); // with reducer
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(darkMode => !darkMode)}
              >
                <img
                  src={darkMode ? sun : moon}
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 cursor-pointer inline-block"
                href="#"
                onClick={handleCartShow}
              >
                <img src={shopingCart} width="24" height="24" alt="" />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[20px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
