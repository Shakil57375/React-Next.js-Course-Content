import Gallery from "./components/Gallery";
import PackingList from "./components/PackingList";
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
export default function App() {
  const chemists = people.filter((person) => person.profession === "chemist");
  return (
    <div>
      <div>
        {chemists.map((chemist) => (
          <div key={chemist.id}>
            <li>{chemist.name}</li>
          </div>
        ))}
        <PackingList />
        <Gallery />
      </div>
    </div>
  );
}
