import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Calculate currentYear directly, no need for state or effect if it doesn't change during component lifecycle.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <nav>
          <ul>
            <li>
              {/* Link to the PDF in the public folder, opening in a new tab */}
              <a href={process.env.PUBLIC_URL + '/static/traderun_terms_and_conditions.pdf'} target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
        <p>&copy; {currentYear} TradeRun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;