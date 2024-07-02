import { useRecoilState } from "recoil"
import { User } from "../../recoil_state"
import { useNavigate } from "react-router-dom"
function Topbar(){
    const [getUser,setUser] = useRecoilState(User)
    const goroute = useNavigate()
    const logOut = ()=>{
        setUser({isAdmin:false})
        goroute('/')
    }
    return (

   
    <nav className="navbar navbar-expand navbar-light bg-white topbar  static-top shadow">

       
        {/* <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button> */}

        <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                <button onClick={logOut} className="nav-link dropdown-toggle"  id="userDropdown" >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{getUser.email}</span>
                </button>

            </li>

        </ul>

    </nav>
     )

}

export default Topbar