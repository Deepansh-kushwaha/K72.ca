import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agence from "./Pages/Agence";
function App() {
  
  return (
    <>
      <div>
        
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/agence" element={<Agence />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
