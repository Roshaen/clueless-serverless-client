import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import TopBannerWeeklyChallenge from '../components/WeeklyChallenges/TopBannerWeeklyChallenge'
import ActiveWeeklyChallenges from '../components/WeeklyChallenges/ActiveWeeklyChallenges';
import PreviousWeeklyChallenges from '../components/WeeklyChallenges/PreviousWeeklyChallenges'
import Footer from '../components/Footer'

const WeeklyChallenges: NextPage = () => {
  return (
    <div>
        <Head>
        <title>ClueLess | Weekly Challenges</title>
        <meta name="description" content="Generated by create next app" />
        </Head>
        <Navbar />
        <TopBannerWeeklyChallenge />
        <ActiveWeeklyChallenges 
        type="All"
        />
        <PreviousWeeklyChallenges />
        <Footer />
    </div>
  )
}

export default WeeklyChallenges