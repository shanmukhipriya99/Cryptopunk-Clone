import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitch from '../assets/header/theme-switch.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={punkLogo} alt='logo' className='punkLogo' />
      </div>
      <div className='searchContainer'>
        <div className='searchIcon'>
          <img src={searchIcon} alt='searchIcon' />
        </div>
        <input
          className='searchInput'
          placeholder='Collection, User or Item...'
        />
      </div>
      <div className='headerItems'>
        <ul>
          <li>Drops</li>
          <li>Marketplace</li>
          <li>Create</li>
        </ul>
      </div>
      <div className='headerActions'>
        <div className='themeSwitchIcon'>
          <img src={themeSwitch} alt='themeSwitchIcon' />
        </div>
        <div className="loginBtn">GET IN</div>
      </div>
    </div>
  );
};

export default Header;
