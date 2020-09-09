import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
