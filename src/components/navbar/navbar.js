import './navbar.css';
import { Link } from 'react-router-dom';
import Logo from './logo (2).png';
function Nav() {
    function logoutUser(e) {
        e.preventDefault();
        localStorage.clear();
        window.localStorage.setItem("loggedIn", false);
        localStorage.setItem("TotalAmount", 0);
        window.alert('Logout Successfull');
    }   
    return(
        <>
        <div class="nav">
            <nav>
             <div class="logo">   
             <img src={Logo} id='im' alt="react logo" />
              </div>
              <div class="link">   
                <ul className='m'>
                    <h3><Link to="/home"><li>Home</li></Link></h3>
                    <h3><Link to="/about"><li>About</li></Link></h3>
                    <h3><Link to="/cart"><li>Cart</li></Link></h3>
                    <h3><Link to="/login"><li>Login</li></Link></h3>
                    <h3><Link to="/register"><li>Register</li></Link></h3>
                    <form className='f1' >
                    <button className='btn2' type="submit" onClick={logoutUser}>Logout</button>
                     </form>
                </ul>
                </div>
            </nav>
        </div>
        </>
    );
    
}
export default Nav;