import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Contacts from './pages/Contacts';

export default function BabyCare() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
}
