import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="content-section alt-bg">
      <div className="container">
        <h2>About The Game</h2>
        <p style={{fontSize: '20px', lineHeight: '2'}}>TradeRun uniquely blends the fast-paced action of an endless runner with the strategic decision-making of stock trading. As you dash through a dynamic, ever-changing market environment, you'll need to make split-second decisions to buy and sell virtual stocks.</p>
        <br/>
        <p style={{fontSize: '20px', lineHeight: '2'}}>Your goal? To grow your virtual portfolio, outsmart the market fluctuations, and learn the fundamentals of trading in an engaging and risk-free setting. It's not just a game; it's your first step into understanding market dynamics, all while having a blast!</p>
      </div>
    </section>
  );
};

export default AboutSection;