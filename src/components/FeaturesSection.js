import React from 'react';

const FeaturesSection = () => {
  const features = [
    "Dynamic Stock Prices: Experience realistic (simplified) market movements.",
    "Intuitive Controls: Easy swipe down to buy and swipe down to sell mechanics.",
    "Level Up & Unlock: Progress through levels, face new challenges, and unlock achievements.",
    "Performance Tracking: Monitor your virtual portfolio's growth and learn from your decisions.",
    "Leaderboards: Compete with friends or globally for the top trader spot.",
    "Engaging Visuals: Enjoy a vibrant and appealing game environment."
  ];

  return (
    <section id="features" className="content-section">
      <div className="container">
        <h2>Key Features</h2>
        <ul className="features-list">{features.map((feature, index) => {
          const parts = feature.split(':');
          const title = parts[0];
          const description = parts.slice(1).join(':').trim();
          return (
            <li key={index} className="feature-card">
              <h3>{title}</h3>
              <br/>
              <p style={{fontSize: '18px', lineHeight: '1.5'}}>{description}</p>
            </li>
          );
        })}</ul>
      </div>
    </section>
  );
};

export default FeaturesSection;