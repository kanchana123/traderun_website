import React from 'react';

export const GuideIntro = () => (
  <section id="guide-intro" className="guide-section">
    <h2>1. Welcome to Your Trading Adventure!</h2>
    <p>Welcome to the official guide for TradeRun! Whether you're new to trading concepts or just new to the game, this guide will walk you through everything you need to know to navigate the markets, make smart plays, and maximize your virtual profits. Let's get started!</p>
  </section>
);

export const GameplayBasics = () => (
  <section id="guide-basics" className="guide-section">
    <h2>2. How to Play TradeRun</h2>
    <article>
      <h3>The Core Loop</h3>
      <p>Your character automatically runs along a path representing the stock market. The line graph you see above your character shows the live price movement of a virtual stock.</p>
    </article>
    <article>
      <h3>Buying & Selling</h3>
      <p>When you think the stock price is low and about to go up, swipe down to buy. When you think it's high and might fall, swipe down to sell. The amount you can buy or sell (your 'lot size') can be adjusted in the settings or in-game.</p>
    </article>
    <article>
      <h3>Understanding Your HUD</h3>
      <p>Keep an eye on your Heads-Up Display (HUD):</p>
      <ul>
        <li><strong>Portfolio Value:</strong> Shows your current total virtual cash.</li>
        <li><strong>Stocks Held:</strong> Displays how many units of the virtual stock you currently own.</li>
        <li><strong>Average Price:</strong> The average price at which you bought your current stocks.</li>
        <li><strong>P&L (Profit & Loss):</strong> Shows your unrealized profit or loss on your current holdings.</li>
      </ul>
    </article>
    <article>
      <h3>Game Objective</h3>
      <p>The main goal is to increase your portfolio value by buying low and selling high. Each game session has a time limit or a distance to cover. Try to make as much virtual profit as possible before the session ends!</p>
    </article>
  </section>
);

export const TipsForSuccess = () => {
  const tips = [
    { title: "Watch the Trends", text: "Try to identify patterns. Is the price generally going up (uptrend) or down (downtrend)?" },
    { title: "Don't Be Greedy", text: "Securing small, consistent profits can be better than waiting for a huge jump that might never come." },
    { title: "Cut Your Losses", text: "If a trade isn't going your way, sometimes it's better to sell at a small loss than risk a bigger one." },
    { title: "Manage Your Lot Size", text: "Adjust your lot size based on your confidence and portfolio. Bigger lot sizes mean bigger potential profits, but also bigger potential losses." },
    { title: "Learn and Adapt", text: "Each session is a learning opportunity. Pay attention to what works and what doesn't." }
  ];

  return (
    <section id="guide-tips" className="guide-section">
      <h2>3. Strategies for Winning</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <strong>{tip.title}:</strong> {tip.text}
          </li>
        ))}
      </ul>
    </section>
  );
};