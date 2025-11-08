import React from 'react';
import { Award, Briefcase } from 'lucide-react';

const metrics = [
  { icon: Award, label: '5+ core stacks mastered' },
  { icon: Briefcase, label: '15+ teams collaborated with' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About me</h2>
            <p className="mt-4 text-gray-700">
              I have 3+ years of experience building end‑to‑end web applications across startups and
              mid‑sized companies. I love turning ideas into elegant, accessible interfaces supported by
              robust, scalable backends.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {metrics.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-gray-800" />
                  <span className="text-sm text-gray-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm">
              <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-gray-100 via-white to-gray-50" />
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gray-900 text-white shadow-lg ring-8 ring-white">
                  <div className="flex h-full items-center justify-center text-3xl font-bold">AC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
