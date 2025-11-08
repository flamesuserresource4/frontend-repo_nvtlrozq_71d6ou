import React from 'react';

const projects = [
  {
    title: 'E‑commerce Platform',
    subtitle: 'Headless storefront with checkout',
    tech: ['Next.js', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'SaaS Analytics',
    subtitle: 'Real‑time dashboards and alerts',
    tech: ['React', 'Node.js', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Portfolio Engine',
    subtitle: 'CMS‑powered case studies',
    tech: ['Next.js', 'MDX', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured work</h2>
            <p className="mt-2 text-gray-600">A selection of projects that highlight my craft.</p>
          </div>
          <a href="#" className="hidden text-sm font-medium text-gray-800 underline-offset-4 hover:underline sm:inline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-1 p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.subtitle}</p>
                <div className="pt-2 text-xs text-gray-500">{p.tech.join(' • ')}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
