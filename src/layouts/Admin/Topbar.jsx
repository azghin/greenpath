import { Link } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { User } from "../../recoil_state"
function Topbar(){
    const getUser = useRecoilValue(User)
    return (

   
    <nav className="navbar navbar-expand navbar-light bg-white topbar  static-top shadow">

       
        {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button> */}

        <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <Link className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{getUser.email}</span>
                </Link>

            </li>

        </ul>

    </nav>
     )

}

export default Topbar