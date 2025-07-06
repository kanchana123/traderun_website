import React from 'react';

const AppLinksSection = () => {
  return (
    <section id="get-app" className="content-section alt-bg">
      <div className="container">
        <h2>Get The Game</h2>
        <p>Ready to test your trading instincts? Download TradeRun now and start your journey to become a virtual market whiz!</p>
        <div className="app-buttons">
          <a href="https://apps.apple.com/in/app/traderun-stock-simulation/id6747412029" className="app-store-link"> {/* Replace # with actual App Store link */}
            <img 
              src={process.env.PUBLIC_URL + '/static/app_store2.png'} 
              alt="Download on the App Store" 
              className="app-store-badge" />
          </a>
          <a href="#" className="google-play-link"> {/* Replace # with actual Google Play link */}
            <img 
              src={process.env.PUBLIC_URL + '/static/play_store2.png'} 
              alt="Get it on Google Play" 
              className="app-store-badge" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppLinksSection;