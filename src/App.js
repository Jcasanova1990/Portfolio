import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About"
import Dashboard from "./pages/Dashboard/Dashboard"
import Home from "./pages/Home/Home"
import Stock from "./pages/Stock/Stock"
import styles from "./App.module.scss"
import Nav from "./components/Nav/Nav"


function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/stocks" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stock/:symbol" element={<Stock/>}/>
    </Routes>
    </div>
  );
}

export default App;