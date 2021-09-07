import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TopRealtors from './components/TopRealtors';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Homes from './components/Homes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Header/>
      <TopRealtors/>
      <Features/>
      <Testimonials/>
      <Homes/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
