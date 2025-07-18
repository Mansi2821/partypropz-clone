import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategorySlider from './components/CategorySlider';
import InspirationInsights from './components/InspirationInsights';
import Footer from './components/Footer';
import InstaWorthy from './components/InstaWorthy';
import BestsellersMore from './components/BestsellersMore'; 
import HelpingIndia from './components/HelpingIndia';
import RecommendedProducts from './components/RecommendedProducts';
import AlsoFindUs from './components/AlsoFindUs';

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Banner />
      <CategorySlider />
      <InstaWorthy/>
      <BestsellersMore />
      <HelpingIndia />
      <RecommendedProducts/>
      <AlsoFindUs />
      <InspirationInsights />
      <Footer />
    </div>
  );
}

export default App;


