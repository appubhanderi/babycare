import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BabyCare from './BabyCare';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.StrictMode>
      <ScrollToTop />
      <BabyCare />
    </React.StrictMode>
  );
}

export default App;
