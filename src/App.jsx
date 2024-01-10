import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function App() {
  const myObj = {
    name: "Shakil",
    age: 21,
    profession: "student",
  };
  const obj2 = {
    name: "shafin",
    age: 22,
    profession: "worker",
  };
  const obj3 = {
    name: "tuhin",
    age: 13,
    profession: "student",
  };
  return (
    <div>
      <div>
        <Profile myObj={myObj} obj2={obj2} obj3={obj3}></Profile>
      </div>
    </div>
  );
}
