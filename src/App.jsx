import { Card, Profile as UserInfo } from "./components/Gallery"; // named import  / Custom Name of import
import Gallery from "./components/Gallery"; // default import

function App() {
  return (
    <div>
      <Gallery />
      <UserInfo />
      <Card />
    </div>
  );
}

export default App;
