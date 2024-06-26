import {Link} from 'react-router-dom'
function SideBar(){
    return(
        
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            
            <hr className="sidebar-divider my-0"/>

           
            <li className="nav-item active">
                <Link to={'/admin'} className='nav-link'>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>  
            </li>

            
            <hr className="sidebar-divider"/>


            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Gestion
            </div>

             <li className="nav-item">
                <Link className="nav-link" to="/admin/addCity">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>AddCity</span>
                </Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/admin/addPlace">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Add Places </span>
                </Link>
            </li>

           
            <li className="nav-item">
                <Link className="nav-link" to="/admin/allcities">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>All Cities</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/allplaces">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>All Places</span>
                </Link>
            </li>


           
            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>
            <li >

            </li>

            

        </ul>
    )
}

export default SideBar