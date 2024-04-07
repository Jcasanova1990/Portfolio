import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import styles from "./App.module.scss";
import NavMobile from "./components/NavMobile/NavMobile";
import Nav from "./components/Nav/Nav";
import { useMediaQuery } from 'react-responsive';

function App() {
  // Define breakpoints for switching between Nav and NavMobile
  const isTabletOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  });

  const is4kDesktop = useMediaQuery({
    query: '(min-width: 2560px)'
  });

  return (
    <div className={styles.App}>
      {is4kDesktop && <Nav />}
      {isDesktop && !is4kDesktop && <Nav />}
      {isTabletOrLaptop && !isDesktop && <Nav />}
      {!isTabletOrLaptop && <NavMobile />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
