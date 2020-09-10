import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';

class App extends React.Component {
  state = {}

  render() { 
    return (
       <>
        <Header />
        <Home />
        <About/>
        <Contact />
        <Footer/>
      </>
    );
  }
}
 
export default App;