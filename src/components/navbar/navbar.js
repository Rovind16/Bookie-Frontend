import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './logo (2).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  

  function logoutUser(e) {
    e.preventDefault();
    localStorage.clear();
    window.localStorage.setItem('loggedIn', false);
    localStorage.setItem('TotalAmount', 0);
    //window.location.href = "./home";
    navigate('/home');
    window.alert('Logout Successful');
  }

  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src={Logo} id="im" alt="react logo" />
        </div>
        <div className={`link ${isOpen ? 'active' : ''}`}>
          <ul className="m">
            <h3>
              <Link to="/home">
                <li>Home</li>
              </Link>
            </h3>
            <h3>
              <Link to="/about">
                <li>About</li>
              </Link>
            </h3>
            <h3>
              <Link to="/cart">
                <li>Cart</li>
              </Link>
            </h3>
            <h3>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </h3>
            <h3>
              <Link to="/register">
                <li>Register</li>
              </Link>
            </h3>
            <form className="f1">
              <button className="btn2" type="submit" onClick={logoutUser}>
                Logout
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
