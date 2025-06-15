import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // or another theme
import 'primereact/resources/primereact.min.css'; // core styles
import 'primeicons/primeicons.css'; // for calendar icons

// refactoring code import
import UserProfile from './components/UserProfile/UserProfile.jsx';
import MyServicesSection from './components/Services/MyServicesSection.jsx';
import HowToBookMe from './components/HowToBookMe.jsx';
import HireMeForm from './components/HireMeForm/HireMeForm.jsx';
import RulesSection from './components/RulesSection.jsx';
import ImageCarousel from './components/ImageCarosel.jsx';
import AirtableReviews from './components/Reviews/AirtableReviews.jsx';
import ReviewForm from './components/Reviews/ReviewForm.jsx';
import AboutMeSection from './components/UserProfile/AboutMeSection.jsx';


function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header bg-pink-med">
        {/* I want a navbar on the top */}

        <div className='h-screen overflow-y-auto snap-mandatory snap-y'>
          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <h1 className='text-7xl font-bold text-center pb-8'>Liz's Pet Sitting</h1>
            <UserProfile />
          </div>

          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <AboutMeSection />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <MyServicesSection />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <HowToBookMe />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <HireMeForm />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <RulesSection />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <ImageCarousel />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <AirtableReviews />
          </div>
          
          <div className="snap-start h-screen w-screen flex justify-center items-center">
            <ReviewForm />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
