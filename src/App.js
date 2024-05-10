import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Cities from "./pages/Cities";
import City from "./pages/City";

// importing bootstrap 
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';

// importing css
import "./css/App.css"
import Footer from "./layouts/Footer";
//importing Barba

function App() {
  
  return (
    <div className="App" >
      {/* Navigation bar  */}

      <Navbar />

      {/* add Routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/:name" element={<City/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
