import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import About2 from "./pages/About2";
import NavBar from "./components/Navbar";
import Service, { Desain, Pemasaran, Pengembangan } from "./pages/Service";
function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/:id?" element={<Home />} />
            {/* <Route path="/:id?" element={<Home />} /> */}
          </Route>
          <Route path="/service/" element={<Service />}>
            <Route path="pengembangan" element={<Pengembangan />} />
            <Route path="desain" element={<Desain />} />
            <Route path="pemasaran" element={<Pemasaran />} />
          </Route>
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About2 />} /> */}
        </Routes>
      </div>
    </div>
  );
}
export default App;