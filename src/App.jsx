import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";

function App() {
  return (
   <div>
      <Router>
         <NavBar />
         <Routes>
           <Route exact path="/" element={<Inicio />}/>
         </Routes>
      </Router> 
    </div>
  );
}

export default App;
