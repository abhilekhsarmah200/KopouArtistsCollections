import React from 'react';
import HomePage from './HomePage';
import VisionMission from './VisionMission';
import Benefits from './Benefits';
import FutureGoals from './FutureGoals';
import CoreTopics from './CoreTopics';
import AboutUs from './AboutUs';
import WordsFromFounder from './WordsFromFounder';
import ContactUs from './ContactUs';
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
