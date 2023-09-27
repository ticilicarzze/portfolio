import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path='/react-porfolio' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/react-porfolio/About' element={<About />} />
        <Route path='/react-porfolio/Work' element={<Work />} />
        <Route path='/react-porfolio/Contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
