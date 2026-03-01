import React from 'react';
import { Icon } from '@iconify/react';

const EcommerceDetail = () => {
  // Configuración de este proyecto específico
  const projectData = {
    title: "E-commerce Full Stack",
    description: "Una solución integral de comercio electrónico diseñada para manejar altos volúmenes de tráfico y transacciones seguras.",
    fullStory: "En este proyecto, implementé un sistema completo de gestión de inventario con persistencia en PostgreSQL. El backend, construido con Spring Boot, maneja la autenticación JWT y la integración con pasarelas de pago. En el frontend, utilicé React para crear una experiencia de usuario fluida y reactiva.",
    features: [
      "Autenticación segura con JWT",
      "Gestión de carrito en tiempo real",
      "Panel administrativo para control de stock",
      "Integración de API de pagos (Stripe/PayPal)"
    ],
    tech: [
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "React", icon: "logos:react" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Docker", icon: "logos:docker-icon" }
    ],
    image: "https://via.placeholder.com/1200x600"
  };

  return (
    <div className="bg-[#0e1012] min-h-screen text-white font-sans pb-20">
      {/* Botón Volver */}
      <button 
        onClick={() => window.history.back()}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-[#1a1a1a] border border-[#343a40] px-4 py-2 rounded-xl hover:border-[#6db33f] transition-all group cursor-pointer"
      >
        <Icon icon="line-md:arrow-left" className="text-[#6db33f] group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-wider">Volver</span>
      </button>

      <main className="max-w-5xl mx-auto px-6 pt-32">
        {/* Hero del Proyecto */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-6 italic italic tracking-tighter">
            {projectData.title}
          </h1>
          <img 
            src={projectData.image} 
            alt={projectData.title} 
            className="w-full h-[400px] object-cover rounded-[2.5rem] border border-[#343a40]"
          />
        </div>

        {/* Contenido en 2 columnas */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Columna Izquierda: Detalles */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-[#6db33f] text-sm font-bold uppercase tracking-[0.3em] mb-4">Sobre el proyecto</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {projectData.fullStory}
              </p>
            </section>

            <section>
              <h2 className="text-[#6db33f] text-sm font-bold uppercase tracking-[0.3em] mb-4">Implementaciones clave</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-2xl border border-[#343a40]">
                    <Icon icon="solar:check-circle-bold" className="text-[#6db33f] text-xl" />
                    <span className="text-gray-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Columna Derecha: Stack y Acciones */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-[#343a40]">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Icon icon="solar:layers-bold" className="text-[#6db33f]" /> Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-4">
                {projectData.tech.map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 bg-[#0e1012] p-3 rounded-xl border border-[#343a40] min-w-[70px]">
                    <Icon icon={t.icon} className="text-3xl" />
                    <span className="text-[10px] uppercase font-bold text-gray-500">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center justify-center gap-3 bg-[#6db33f] text-black font-bold py-4 rounded-2xl hover:scale-[1.02] transition transform">
                <Icon icon="line-md:github-loop" className="text-xl" /> Ver Repositorio
              </a>
              <a href="#" className="flex items-center justify-center gap-3 border border-[#343a40] text-white font-bold py-4 rounded-2xl hover:bg-white hover:text-black transition">
                <Icon icon="solar:plain-bold" className="text-xl" /> Demo en Vivo
              </a>
              <a href="#" className="flex items-center justify-center gap-3 border border-[#6db33f]/30 text-[#6db33f] font-bold py-4 rounded-2xl hover:bg-[#6db33f]/10 transition">
                <Icon icon="solar:file-download-bold" className="text-xl" /> Documentación PDF
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EcommerceDetail;