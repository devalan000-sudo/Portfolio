import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { proyectosList as proyectos } from '../data/projectsData';
import { techStack1, techStack2, tools1, tools2, editors } from '../data/stackData';

const ProjectCard = ({ id, title, description, tech, icon, github, demo, image }) => (
  <div className="flex flex-col md:flex-row bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden border border-[#343a40] hover:border-[#6db33f]/50 transition-all duration-500 group">
    <div className="md:w-64 bg-[#0e1012] flex items-center justify-center flex-shrink-0 min-h-[120px] md:min-h-[180px]">
      <div className="h-full w-full flex items-center justify-center p-1.5 md:p-2">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg md:rounded-xl border-2 border-[#6db33f]" />
        ) : (
          <Icon icon={icon} className="text-6xl md:text-8xl" />
        )}
      </div>
    </div>
    <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base mb-3 md:mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 md:gap-3 mb-3">
          {tech.map((t, i) => <Icon key={i} icon={t} className="text-2xl md:text-4xl hover:scale-110 transition-transform" />)}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Link to={`/proyecto/${id}`} className="flex items-center gap-1 md:gap-2 bg-[#6db33f] text-black px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-white transition whitespace-nowrap">
          <Icon icon="ri:eye-line" className="text-sm md:text-base" /> Ver más
        </Link>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 bg-black text-[#fff] px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition border border-[#343a40]">
            <Icon icon="ri:github-fill" className="text-sm md:text-base" />
            <span className="hidden sm:inline">Código</span>
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 md:gap-2 bg-[#6db33f] text-black px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-white transition">
            <Icon icon="ri:external-link-fill" className="text-sm md:text-base" />
            <span className="hidden sm:inline">Ver demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <main className="bg-[#0e1012] text-white pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <section id="proyectos" className="py-12">
          <h2 className="text-4xl font-bold mb-8 text-center animate-fade-in-up">Proyectos</h2>
          <div className="flex flex-col items-center space-y-8">{proyectos.map((p, i) => <div key={p.id} className={`w-full max-w-4xl animate-fade-in-up delay-${(i + 1) * 100}`}><ProjectCard {...p} /></div>)}</div>
        </section>

        <section className="py-24 border-t border-[#343a40]">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.4em] text-xs mb-16 font-bold animate-fade-in">Stack Tecnológico</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all mb-8 animate-fade-in-up delay-200">
            {techStack1.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon icon={tech.icon} className={tech.specialClass || ""} />
                <span className="text-sm text-gray-500 mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all animate-fade-in-up delay-300">
            {techStack2.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon icon={tech.icon} className={tech.specialClass || ""} />
                <span className="text-sm text-gray-500 mt-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[#343a40]">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.4em] text-xs mb-16 font-bold animate-fade-in">Herramientas Adicionales</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all mb-8 animate-fade-in-up delay-200">
            {tools1.map((tool, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon icon={tool.icon} className={tool.specialClass || ""} />
                <span className="text-sm text-gray-500 mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all animate-fade-in-up delay-300">
            {tools2.map((tool, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon icon={tool.icon} className={tool.specialClass || ""} />
                <span className="text-sm text-gray-500 mt-2">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-[#343a40]">
          <h2 className="text-center text-gray-500 uppercase tracking-[0.4em] text-xs mb-16 font-bold animate-fade-in">Editores de Código</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-5xl md:text-8xl md:grayscale md:opacity-50 md:hover:opacity-70 md:hover:grayscale-0 transition-all mb-8 animate-fade-in-up delay-200">
            {editors.map((editor, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon icon={editor.icon} className={editor.specialClass || ""} />
                <span className="text-sm text-gray-500 mt-2">{editor.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="max-w-4xl mx-auto mt-16 md:mt-20 animate-fade-in-up delay-400 px-4">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Contacto</h2>
            <p className="text-gray-400">Mándame un correo para ponernos en contacto</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-[#343a40]">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainContent;
