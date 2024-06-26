import { Outlet, Route, Routes } from "react-router-dom";

import Home from "./client/Home";
import Cities from "./client/Cities";
import City from "./client/City";

import Footer from "../layouts/clients/Footer";
import Navbar from "../layouts/clients/Navbar";

import "../css/App.css";
import Place from "./client/Place";
import Login from "./client/Login";
import NotFound from "./client/NotFound";
import Profile from "./client/Profile";
import Blog from "./client/Blog";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { User } from "../recoil_state";



// import { loadCSS,unloadCSS } from "../LoadCss";
// import { useEffect } from "react";


function AppContainer(){
  const getUser = useRecoilValue(User)
  const isClient = useMemo(()=>getUser.isAdmin===false,[getUser])
  console.log('again');
  // useEffect(()=>{
  //   const clientCss = loadCSS(`../src/css/App.css`);
  //   return ()=>{unloadCSS(clientCss)}
  // },[]);
  return(
    <>
    
    {isClient?<>
      <Navbar />
      <main> <Outlet/> </main> 
      <Footer/>
      </>:null}
    </>
  )
}

function App() {
  return (
    <>
    
    
    
      {/* Navigation bar  */}

      

      {/* add Routes here */}
      <Routes>

        <Route path="/" element={<AppContainer />} >
          <Route index element={<Home/>} />
          <Route path="cities" element={<Cities/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="cities/:name" element={<City/>} />
          <Route path="cities/:name/:place" element={<Place/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="profile" element ={<Profile/>}/>
          <Route path="*" element={<NotFound/>} />
        </Route>
        
        
        
      </Routes>
    
    </>
  );
}

export default App;
