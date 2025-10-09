import React from 'react';
import HomePage from './HomePage';
import VisionMission from './VisionMission';
import Benefits from './Benefits';
import FutureGoals from './FutureGoals';
import CoreTopics from './CoreTopics';
import AboutUs from './AboutUs';
import WordsFromFounder from './WordsFromFounder';

export default function index() {
  return (
    <div>
      <HomePage />
      <VisionMission />
      <Benefits />
      <CoreTopics />
      <FutureGoals />
      <AboutUs />
      <WordsFromFounder />
    </div>
  );
}
