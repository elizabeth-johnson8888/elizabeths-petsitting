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


import StaggeredTextToggle from './test.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">

      {/* <StaggeredTextToggle /> */}
      <header className="App-header bg-pink-med">
        {/* I want a navbar on the top */}

        <div className='h-screen overflow-y-auto snap-mandatory snap-y'>
          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <div className='border-line-left'></div>
            <h1 className='text-7xl font-bold text-center pb-8'>Liz's Pet Sitting</h1>
            <UserProfile />
            <div className='border-line-right top-4'></div>
          </div>

          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <div className='border-line-left'></div>
            <AboutMeSection />
            <div className='border-line-right top-5'></div>
          </div>
          
          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <div className='border-line-left'></div>
            <MyServicesSection />
            <div className='border-line-left top-5'></div>
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
          
          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <div className='border-line-left'></div>
            <ImageCarousel />
            <div className='border-line-left'></div>
          </div>
          
          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <div className='border-line-left'></div>
            <AirtableReviews />
            <div className='border-line-left top-5'></div>
          </div>
          
          <div className="snap-start h-screen w-screen flex flex-col justify-center items-center">
            <div className='border-line-left'></div>
            <ReviewForm />
            <div className='border-line-left top-5'></div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
