import React from 'react';

// components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation'; 
// containers
import Features from './containers/features/Features';
import Hikes from './containers/hikes/Hikes'; 
import Main from './containers/main/Main';
import Subscription from './containers/subscription/Subscription';
// scss
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
      <Features />
      <Hikes />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;
