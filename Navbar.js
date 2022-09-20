import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';
import logoutimg from "./images/logout.png";

const Navbar = () => {
  const logoutValue = localStorage.getItem('user');
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to="/"> Home</Link>
       
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Login"> Login Here </Link>
        
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Aboutus"> About Us</Link>
        
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/Contactus"> Contact Us </Link>
        
      </li>

      
     
     
    </ul>
    
  </div>
</nav>

    </div>
  )
}
 export default Navbar;




