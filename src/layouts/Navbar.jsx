import { Link } from "react-router-dom"
import { useEffect,useRef,useState } from "react"
function Navbar(){
    const lastScrollTop=useRef(0)
    const [isNavbarVisible,setIsNavbarVisible]=useState(true)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            var {pageYOffset}=window
            if(pageYOffset>lastScrollTop.current){
                setIsNavbarVisible(false)
            } else if (pageYOffset<lastScrollTop.current){
                setIsNavbarVisible(true)
            }
            lastScrollTop.current=pageYOffset<=0?0:pageYOffset
        },{passive:true})
    },[])
    return(
        <nav id="header" className={`d-flex align-items-center ${isNavbarVisible?"visible":""}`}>
            <div className="conatiner d-flex justify-content-between w-100">
                <div className="logo w-100">
                    <h1><Link to="/">Green Path</Link> </h1>
                </div>
                <div className="navbar" id="navbar">
                    <ul>
                        <li><Link to="/" className="nav-link scrollto">Home</Link></li>
                        <li><Link to="/cities" className="nav-link scrollto">Cities</Link></li>
                        <li><Link to="/" className="nav-link scrollto">Green Path</Link></li>
                        <li><Link to="/" className="nav-link scrollto">Green Path</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </div>
            </div>
        </nav>
    )
}
export default Navbar