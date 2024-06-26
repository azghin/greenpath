import SideBar from "../layouts/Admin/SideBar";
import "../css/sb-admin-2.min.css";
import "../css/Admin.css"
import Topbar from "../layouts/Admin/Topbar";
import { Route, Routes } from "react-router-dom";

import AddCity from "./Admin/AddCity";
import AddPlace from "./Admin/AddPlace";
import Dashboard from "./Admin/Dashboard";
import AllCities from "./Admin/AllCities";
import AllPlaces from "./Admin/AllPlaces";

function Admin(props) {
  return (
    <div id="page-top">
      <div className="wrapper">
        <SideBar />
        <div id="content-wrapper">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <h1> {Object.keys(props.user).length>1? props.user.email : 'nothing'} </h1>
              <Routes>
                <Route path="/admin/dashboard" element={<Dashboard/>}/>
                <Route path="/admin/addCity" element={<AddCity />} />
                <Route path="/admin/addPlace" element={<AddPlace />} />
                <Route path="/admin/allcities" element={<AllCities/>}/>
                <Route path="/admin/allplaces" element={<AllPlaces/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
