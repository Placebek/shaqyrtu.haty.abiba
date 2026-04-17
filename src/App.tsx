import React from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Countdown from './components/Countdown'
import Blessings from './components/Blessings'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import Petals from './components/Petals'

const App: React.FC = () => {
  return (
    <>
      <Petals />
      <Hero />
      <Countdown />
      <Details />
      <Blessings />
      <RSVP />
      <Footer />
    </>
  )
}

export default App
