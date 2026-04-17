import React from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Countdown from './components/Countdown'
import Blessings from './components/Blessings'
import RSVP from './components/RSVP'
import Footer from './components/Footer'
import Petals from './components/Petals'
import MusicPlayer from './components/MusicPlayer'

const App: React.FC = () => {
  return (
    <>
      <Petals />
      <MusicPlayer />
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
