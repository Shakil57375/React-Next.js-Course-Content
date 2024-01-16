import "./App.css";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import TaskBoard from "./Task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
