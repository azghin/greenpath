import SideBar from "../layouts/Admin/SideBar";
import "../css/sb-admin-2.min.css";
import "../css/Admin.css"
import Topbar from "../layouts/Admin/Topbar";
import { Route, Routes } from "react-router-dom";

import AddCity from "./Admin/AddCity";
import AddPlace from "./Admin/AddPlace";

function Admin() {
  return (
    <div id="page-top">
      <div className="wrapper">
        <SideBar />
        <div id="content-wrapper">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/admin/addCity" element={<AddCity />} />
                <Route path="/admin/addPlace" element={<AddPlace />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
