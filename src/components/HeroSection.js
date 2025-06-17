import React, { useState, useRef } from 'react';

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Directly set the video element's muted property
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-text-content">
          <h1>Welcome to TradeRun!</h1>
          <p className="subtitle">Experience the thrill of the stock market in a fast-paced runner game.</p>
        </div>
        <div className="hero-visual-content">
          <div className="gameplay-visual-placeholder">
            <div className="iphone-mockup" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/iphone_frame.png'})`}}>
              <video
                ref={videoRef}
                className="gameplay-video"
                src={process.env.PUBLIC_URL + '/static/traderun_gameshow.mp4'}
                autoPlay
                loop
                muted={isMuted} // Directly use the isMuted state
                playsInline /* Important for iOS Safari */
                onClick={toggleMute} // Toggle mute on click
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;