import { useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      placeholder: "input",
    },
  ]);

  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    setInputs([
      ...inputs,
      {
        id: nextId,
        placeholder: "input",
      },
    ]);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div
          key={input.id}
          style={{
            marginBottom: "5px",
          }}
        >
          <input type="text" placeholder={input.placeholder} />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
