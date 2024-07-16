import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/FRONTEND/src/Logos and Favicons/wsh logo white transparent.png" alt="wsh. Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            Men
          </li>
          <li>
            Women
          </li>
          <li>
            Boys
          </li>
          <li>
           Girls
          </li>
          <li>
           About
          </li>
          <li>
           Login
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;