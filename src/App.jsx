import Accordion from "./components/Accordion/Accordion";
import Parent from "./components/Conter/Conter";
import ConterThree from "./components/ConterThree/ConterThree";
import ConterTwo from "./components/ConterTwo/Conter";

function App() {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="basis-1/4">
        <Accordion />
      </div>
      <div className="basis-1/4">
        <Parent />
      </div>
      <div className="basis-1/4">
        <ConterTwo />
      </div>
      <div className="basis-1/4">
        <ConterThree />
      </div>
    </div>
  );
}

export default App;
