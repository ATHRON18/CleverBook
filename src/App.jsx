import React from 'react';
import './index.css';
import KeyProblems from './Components/KeyProblems';
import KeyMetrics from './Components/KeyMetrics';
import Reviews from './Components/Reviews';
import ProblemTarget from './Components/ProblemTarget';
import CTASection from './Components/CTASection';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <KeyProblems />
      <KeyMetrics />
      <Reviews />
      <ProblemTarget />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
