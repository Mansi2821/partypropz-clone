import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategorySlider from './components/CategorySlider';
import ProductsCarousel from './components/ProductsCarousel';
import Footer from './components/Footer';
import InstaWorthy from './components/InstaWorthy';
import BestsellersMore from './components/BestsellersMore'; 
import HelpingIndia from './components/HelpingIndia';

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Banner />
      <CategorySlider />
      <InstaWorthy/>
      <BestsellersMore />
      <HelpingIndia />
      <ProductsCarousel />
      <Footer />
    </div>
  );
}

export default App;


