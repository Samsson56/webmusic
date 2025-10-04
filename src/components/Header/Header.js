import React from 'react';
import '../../Styles/Header.css';
const Header = () => {
  return (
    <div className="header">
        <div className='header__left'>
            <img src={"/assets/logo.jpg"} alt='logo' />
            <h1>Web Music</h1>
        </div>

        {/* <div className='header__right'>
          
        </div> */}

    </div>
  )
}

export default Header;
