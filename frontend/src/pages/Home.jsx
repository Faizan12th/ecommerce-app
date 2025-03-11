import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLwtterBox from '../components/NewsLwtterBox'

const Home = () => {
  return (
    <div>
      
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLwtterBox/>
    </div>
  )
}

export default Home
