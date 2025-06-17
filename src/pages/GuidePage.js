import React from 'react';
import { GuideIntro, GameplayBasics, TipsForSuccess } from '../components/GuideSections';

const GuidePage = () => {
  return (
    <main className="container page-content">
      <h1>TradeRun Game Guide</h1>
      <GuideIntro />
      <GameplayBasics />
      <TipsForSuccess />
    </main>
  );
};

export default GuidePage;