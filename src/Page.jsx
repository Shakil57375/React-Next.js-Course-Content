import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./Cine/MovieList";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext } from "./contexts";
const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
