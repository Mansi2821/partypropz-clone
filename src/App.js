import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategorySlider from './components/CategorySlider';
import ProductsCarousel from './components/ProductsCarousel';
import Footer from './components/Footer';
import InstaWorthy from './components/InstaWorthy';

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Banner />
      <CategorySlider />
      <InstaWorthy/>
      <ProductsCarousel />
      <Footer />
    </div>
  );
}

export default App;


