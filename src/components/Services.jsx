import React from 'react';
import { Code, Settings, MonitorSmartphone, Search } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    desc: 'Accessible interfaces with React and Tailwind.',
  },
  {
    icon: Settings,
    title: 'Backend & APIs',
    desc: 'Robust APIs with Node.js, FastAPI, and cloud.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    desc: 'Mobile‑first layouts that scale elegantly.',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    desc: 'Fast, discoverable experiences with best practices.',
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">What I do</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          I deliver end‑to‑end solutions from concept to production, blending clean design with solid engineering.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-gray-900 p-2 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
