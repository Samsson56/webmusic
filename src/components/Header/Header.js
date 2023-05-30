import React from 'react';
import '../../Styles/Header.css';
const Header = () => {
  return (
    <div className="header">
        <div className='header__left'>
            <img src={"/assets/logo.jpg"} alt='logo' />
            <h1>Web Music</h1>
        </div>

        <div className='header__right'>
          <a href='account'><h4>Account</h4></a>
          <h4>Music Languages</h4>    {/* dropdown list */}
          <a href='login'><h4>Login</h4></a>
          <a href='signup'><h4>Sign up</h4></a>
        </div>

    </div>
  )
}

export default Header;
