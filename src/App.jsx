import { useState } from "react";
import Mirror from "./components/Mirror";

function App() {
  //! don't do this don't change the props form the prenet component
  //   const [color, setColor] = useState("red");
  //! don't do this don't change the props form the prenet component
  //   const handleChangeColor = () => {
  //     setColor("blue");
  //   };

  // TODO you can just pass the inital value of a component from parent. can't chnage the value from the parent this will not work.
  const color = "red";

  return (
    <div>
      <Mirror messageColor={color} />
      <br />
      {/* //! don't do this don't change the props form the prenet component */}
      {/* <button onClick={handleChangeColor}>
                Change Color from Parent
            </button> */}
    </div>
  );
}

export default App;
