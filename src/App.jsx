import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide">AC</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Work</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;
