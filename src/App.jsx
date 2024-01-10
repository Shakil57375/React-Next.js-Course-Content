import { Card, Profile as UserInfo } from "./components/Gallery"; // named import & custom import name
// import Gallery from "./components/Gallery"; // default export.
import GalleryComponent from "./components/Gallery"; // default export & custom name.

function App() {
  return (
    <div>
      <GalleryComponent />
      <UserInfo />
      <Card />
    </div>
  );
}

export default App;
