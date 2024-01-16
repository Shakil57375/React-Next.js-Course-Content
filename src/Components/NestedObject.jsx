import React, { useState } from "react";

const NestedObject = () => {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  console.log(person);
  const handleChnage = () => {
    // muting the object with more simplipied version.
    setPerson({
      ...person, // Copy other fields
      artwork: {
        // but replace the artwork
        ...person.artwork, // with the same one
        city: "New Delhi", // but in New Delhi!
      },
    });
  };
  console.log(person);
  // muting the nested object with mutiple line.
  /*   const newPerson = { ...person.artwork, city: "Dhaka" };
  const updatedPerson = { ...person, artwork : newPerson };
  console.log(updatedPerson); */

  return (
    <button className="btn-success" onClick={handleChnage}>
      click to get the updated value
    </button>
  );
};

export default NestedObject;
