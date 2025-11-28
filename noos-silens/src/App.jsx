import React from 'react';
import Hero from './components/Hero';
import Identity from './components/Identity';
import Collection from './components/Collection';
import Ritual from './components/Ritual';
import Testimonials from './components/Testimonials';
import Materials from './components/Materials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Identity />
      <Collection />
      <Ritual />
      <Testimonials />
      <Materials />
      <Footer />
    </div>
  );
}

export default App;
