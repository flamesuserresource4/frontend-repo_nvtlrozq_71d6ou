import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Let’s work together</h2>
        <p className="mt-3 text-gray-600">
          Have a project in mind or just want to say hello? I’d love to hear from you.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@alexcarter.dev"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-500">© {new Date().getFullYear()} Alex Carter — Made with ❤️</p>
      </div>
    </section>
  );
};

export default Contact;
