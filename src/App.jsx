import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Section_Three from './components/Section_three';
import Our_Team from './components/Our_Team';
import Step from './components/Step';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Static from './components/Static';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Static />
      <Section_Three />
      <Our_Team />
      <Gallery />
      <Step />
      <Testimonial />
      <Contact />
      <Footer />
      
        </>
  )
}

export default App
