import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { User } from "../../recoil_state";

import GreenPath from '../../img/greenPath.svg'
function Navbar() {
    const lastScrollTop = useRef(0);
    const [getUser,setUser]=useRecoilState(User)
  
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          setIsNavbarVisible(true);
        }
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  const logOut = ()=>{
    setUser({isAdmin:false})
  }
  return (
    <nav
      id="header"
      className={`d-flex align-items-center ${
        isNavbarVisible ? "visible" : ""
      }`}
    >
      <div className="conatiner d-flex justify-content-between w-100">
        <div className="logo w-100" style={{display:'flex',alignItems:'center'}}>
          <h1>
            <Link to="/" style={{display:'flex',alignContent:"center"}} ><img src={GreenPath} alt="Green Path" style={{width:'20%'}} /></Link>
          </h1>
        </div>
        <div className="navbar" id="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto">
                Home
              </Link>
            </li>
            <li>
              <Link to="cities" className="nav-link scrollto">
                Cities
              </Link>
            </li>
            <li>
              <Link to="blog" className="nav-link scrollto">
                Blogs
              </Link>
            </li>
            {Object.keys(getUser).length > 1 ? (
              <li>
                <div className="dropdown profile">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {getUser.email}
                  </button>
                  <ol className="dropdown-menu hide">
                    <li>
                        <Link to={'/profile'} className="dropdown-item">Profile</Link>
                    </li>
                    <li>
                      <Link  className="dropdown-item">Favorite places</Link>
                    </li>
                    <li>
                      <Link to={'/'} className="dropdown-item" onClick={logOut}>Log out</Link>
                    </li>
                  </ol>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login" className="nav-link scrollto">
                  sign in / sign up
                </Link>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
