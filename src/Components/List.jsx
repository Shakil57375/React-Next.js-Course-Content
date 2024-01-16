import { useState } from "react";

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        className="input input-bordered input-success max-w-full"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          artists.push(setArtists([...artists, { name: name, id: nextId++ }]));
          setName("");
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
