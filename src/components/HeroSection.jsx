import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <header className="bg-[#0e1012] text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#343a40] bg-[#0e1012]/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-[#6db33f] font-bold text-xl tracking-tighter flex items-center gap-2">
            <Icon icon="solar:code-bold" className="text-2xl" /> Alan Quiroz
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-[#6db33f] transition py-1.5">Presentación</a>
            <a href="#proyectos" className="hover:text-[#6db33f] transition py-1.5">Proyectos</a>
            <a href="#contacto" className="hover:text-[#6db33f] transition py-1.5">Contacto</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        <section className="flex flex-col md:flex-row items-center gap-12 pt-40 pb-32 animate-fade-in-up">
          <div className="w-56 h-56 rounded-full border-4 border-[#6db33f] overflow-hidden shadow-[0_0_40px_rgba(109,179,63,0.2)]">
            <img src="/cv-photo.jpeg" alt="Alan Quiroz" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Desarrollador FullStack <br /><span className="text-[#6db33f]">Java + Spring </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
              ¡Hola! Soy un desarrollador me gusta crear soluciones eficientes y escalables. Mi enfoque principal es el ecosistema de Java con Spring Boot para el backend, complementado con la creación de interfaces modernas y responsivas utilizando React y Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="https://github.com/devalan000-sudo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#24292e] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2f363d] transition">
                <Icon icon="ri:github-fill" className="text-xl" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/alan-quiroz-rivera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0096db] transition">
                <Icon icon="ri:linkedin-fill" className="text-xl" /> LinkedIn
              </a>
              <a href="/Quiroz_Alan_CV_Hardvard.pdf" download className="flex items-center gap-2 bg-[#6db33f] text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition">
                <Icon icon="ri:download-cloud-fill" className="text-xl" /> Descargar CV
              </a>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 pb-24">
          <div className="bg-[#1a1a1a] p-12 rounded-[2.5rem] border border-[#343a40] hover:border-[#6db33f]/30 transition-all animate-fade-in-up delay-200">
            <h3 className="text-[#6db33f] text-2xl font-bold mb-6 flex items-center gap-3">
              <Icon icon="logos:java" className="text-3xl" /> ¿Por qué Java?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">"Decidí empezar con Java precisamente porque no es un camino sencilla. Me motivó su complejidad y el hecho de ser el motor de las grandes empresas. Elegí ir a por lo difícil desde el primer día para forjar una base técnica sólida que me permitiera dominar cualquier tecnología en el futuro."</p>
          </div>
          <div className="bg-[#1a1a1a] p-12 rounded-[2.5rem] border border-[#343a40] hover:border-[#6db33f]/30 transition-all animate-fade-in-up delay-300">
            <h3 className="text-[#6db33f] text-2xl font-bold mb-6 flex items-center gap-3">
              <Icon icon="fluent:window-dev-tools-20-filled" className="text-3xl text-blue-400" /> Ingeniería en Sistemas
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">"Estudio ingeniería para entender la tecnología desde su base, combinando mi afinidad natural con el rigor académico. Mi meta es ser desarrollador, pero con la visión integral sobre hardware y software que solo la ingeniería proporciona."</p>
          </div>
        </section>
      </div>
    </header>
  );
};

export default HeroSection;