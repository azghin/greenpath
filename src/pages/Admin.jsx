import SideBar from "../layouts/Admin/SideBar";
import "../css/sb-admin-2.min.css"
import Topbar from "../layouts/Admin/Topbar";

function Admin(){
    return (
        <main>
            <Topbar/>
            <SideBar/>
        </main>
    )
}
export default Admin