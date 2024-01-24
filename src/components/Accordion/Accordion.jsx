import { useState } from "react";
import Panel from "./Panel";

const panelData = [
  {
    title: "Paid Course",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellat laboriosam, dicta accusamus fugit, vel provident nesciunt tenetur a amet nam distinctio quaerat quas ipsum inventore eligendi maiores consectetur qui?",
  },
  {
    title: "Free Course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt autem adipisci ab ipsa placeat, minus libero fugit facere magni exercitationem delectus ipsum deleniti recusandae laboriosam nobis? Ut, perferendis aut.",
  },
  {
    title: "Premium Course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt autem adipisci ab ipsa placeat, minus libero fugit facere magni exercitationem delectus ipsum deleniti recusandae laboriosam nobis? Ut, perferendis aut.",
  },
  // Add more panel data as needed
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const handlePanelClick = (index) => {
    console.log(index);
    setActiveIndex(index);
  };

  return (
    <>
      <h2>Learn with Sumit</h2>
      {panelData.map((panel, index) => (
        <Panel
          key={index}
          title={panel.title}
          isActive={activeIndex === index}
          onActive={() => handlePanelClick(index)}
        >
          {panel.content}
        </Panel>
      ))}
    </>
  );
}
