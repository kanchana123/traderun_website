import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="top-nav">
      <div className="container">
        <Link to="/" className="brand-logo">
          {/* Use the public URL for the logo */}
          <img src={process.env.PUBLIC_URL + '/static/logo.png'} alt="TradeRun Logo" style={{ height: '70px', width: '200px' }} /> {/* Adjust height as needed */}
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/guide">Guide</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;