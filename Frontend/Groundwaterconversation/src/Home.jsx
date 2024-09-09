import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('SIH2024');

  const logOut = () => {
    localStorage.removeItem('SIH2024');
    navigate('/signin');
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <img src='logo1.jpg' alt="" className="logo" />

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">   Give Suggestion</Link></li>
          <li><Link to='/showpost'>    Show Suggestion</Link></li>
          {!isLoggedIn && <li><Link to="/signup">SignUp</Link></li>}
          {!isLoggedIn && <li><Link to="/signin">SignIn</Link></li>}
        </ul>
        {isLoggedIn && <button className="logout-button" onClick={logOut}>Logout</button>}
        
      </nav>

      <div className="category">
        <div className="kids">
          <button><Link to='/kidslearning' style={{color:"white"}}>Kids</Link></button>
        </div>
        <div className="adults">
          <button><Link to='/adults' style={{color:"white"}}>Adults</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
