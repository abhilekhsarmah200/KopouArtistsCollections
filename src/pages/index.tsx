import React from 'react';
import HomePage from './components/WelcomePageSections/HomePage';
import VisionMission from './components/WelcomePageSections/VisionMission';
import Benefits from './components/WelcomePageSections/Benefits';
import FutureGoals from './components/WelcomePageSections/FutureGoals';
import CoreTopics from './components/WelcomePageSections/CoreTopics';
import AboutUs from './components/WelcomePageSections/AboutUs';
import WordsFromFounder from './components/WelcomePageSections/WordsFromFounder';
import UpcomingEvents from './components/WelcomePageSections/UpcomingEvents';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Kopou | Artist Collective</title>
      </Head>
      <div>
        <HomePage />
        <UpcomingEvents />
        <VisionMission />
        <Benefits />
        <CoreTopics />
        <FutureGoals />
        <AboutUs />
        <WordsFromFounder />
      </div>
    </>
  );
}
