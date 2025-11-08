import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient vignette to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6">
        <p className="text-sm uppercase tracking-widest text-gray-600">Hello, I’m</p>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-6xl">Alex Carter</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
          I’m a full‑stack web developer specializing in React, Next.js, Node.js, and
          modern cloud tooling — crafting unique, performant digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => handleScrollTo('contact')}
            className="rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            Get in touch
          </button>
          <button
            onClick={() => handleScrollTo('projects')}
            className="rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          >
            View work
          </button>
        </div>
      </div>

      <button
        aria-label="Scroll to about section"
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/70 p-2 text-gray-800 shadow backdrop-blur transition hover:bg-white"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
