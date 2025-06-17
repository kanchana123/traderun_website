import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <nav>
          <ul>
            <li>
              {/* Link to the PDF in the public folder, opening in a new tab */}
              <a href={process.env.PUBLIC_URL + '/traderun_terms_and_conditions.pdf'} target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>
            </li>
            <li>
              {/* Link to the PDF in the public folder, opening in a new tab */}
              <a href={process.env.PUBLIC_URL + '/traderun_privacy_policy.pdf'} target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <p>&copy; {currentYear} TradeRun. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;