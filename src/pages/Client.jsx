import { Route, Routes } from "react-router-dom";

import Home from "./client/Home";
import Cities from "./client/Cities";
import City from "./client/City";

import Footer from "../layouts/clients/Footer";
import Navbar from "../layouts/clients/Navbar";

import "../css/App.css";
import Place from "./client/Place";

function App() {
  
  return (
    <main >
      {/* Navigation bar  */}

      <Navbar />

      {/* add Routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/client/cities" element={<Cities/>}/>
        <Route path="/client/city/:name" element={<City/>} />
        <Route path="/client/city/:name/:place" element={<Place/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;