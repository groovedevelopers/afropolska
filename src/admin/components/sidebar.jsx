import React, { useEffect } from "react";
import "../../assets/admin-css/style.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import GradeIcon from '@mui/icons-material/Grade';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidebar = () => {
  return (

    // <!-- Sidebar Start -->
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <a href="index.html" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Afropolska Admin</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        {/* <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: 40, height: 40}} /> */}
                        {/* <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div> */}
                    </div>
                    {/* <div className="ms-3">
                        <h6 className="mb-0">Agnes</h6>
                        <span>Admin</span>
                    </div> */}
                </div>
                <div className="navbar-nav w-100">
                    <a href="/admin/home" className="nav-item nav-link "><DashboardIcon className="me-2"></DashboardIcon>Dashboard</a>
                    <a href="/admin/media" className="nav-item nav-link "><PermMediaIcon className="me-2"></PermMediaIcon>Media</a>
                    <a href="/admin/events" className="nav-item nav-link "><CategoryIcon className="me-2"></CategoryIcon>Events</a>
                    <a href="/admin/gallery" className="nav-item nav-link "><InventoryIcon className="me-2"></InventoryIcon>Gallery</a>
                    <a href="/orders" className="nav-item nav-link "><ShoppingCartIcon className="me-2"></ShoppingCartIcon>Orders</a>
                    <a href="/subscribers" className="nav-item nav-link "><GradeIcon className="me-2"></GradeIcon>Subscribers</a>
                    <a href="/messages" className="nav-item nav-link "><EmailIcon className="me-2"></EmailIcon>Messages</a>
                    <a href="/settings" className="nav-item nav-link "><SettingsIcon className="me-2"></SettingsIcon>Settings</a>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Media</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div> */}
                    
                </div>
            </nav>
        </div>
        /* <!-- Sidebar End --> */

  )
};

export default Sidebar;
