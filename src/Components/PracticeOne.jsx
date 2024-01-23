import { useState } from "react";

export default function Gallery() {
  const [name, setName] = useState("Shakil");
  const [show, setShow] = useState(false);

  function handleClick() {
    setName(`Hossain`);
  }

  const handleShowDetils = () => {
    setShow(!show);
  };
  return (
    <>
      <p>{name}</p>
      {show && <>My name is Shkail and I am student</>}
      <button
        className="px-4 py-2 bg-green-500 text-white text-lg"
        onClick={handleShowDetils}
      >
        {show ? " Hide details" : "show details"}{" "}
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white text-lg"
        onClick={handleClick}
      >
        print Name
      </button>
      
    </>
  );
}
