import React from 'react';
import HomePage from './components/WelcomePageSections/HomePage';
import VisionMission from './components/WelcomePageSections/VisionMission';
import Benefits from './components/WelcomePageSections/Benefits';
import FutureGoals from './components/WelcomePageSections/FutureGoals';
import CoreTopics from './components/WelcomePageSections/CoreTopics';
import AboutUs from './components/WelcomePageSections/AboutUs';
import WordsFromFounder from './components/WelcomePageSections/WordsFromFounder';
import ContactUs from './components/WelcomePageSections/ContactUs';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Kopou | Artists Collective</title>
      </Head>
      <div>
        <HomePage />
        <VisionMission />
        <Benefits />
        <CoreTopics />
        <FutureGoals />
        <AboutUs />
        <WordsFromFounder />
        <ContactUs />
      </div>
    </>
  );
}
