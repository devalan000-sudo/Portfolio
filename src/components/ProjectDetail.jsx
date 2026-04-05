import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { projectDetailsMap as projectData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) return <div className="text-white p-20">Proyecto no encontrado</div>;

  return (
    <div className="bg-[#0e1012] min-h-screen text-white pb-20">
      <button onClick={() => navigate('/')} className="fixed top-8 left-4 md:left-8 z-50 flex items-center gap-2 bg-[#1a1a1a] border border-[#343a40] px-3 md:px-4 py-2 rounded-xl hover:border-[#6db33f] transition-all group">
        <Icon icon="line-md:arrow-left" className="text-[#6db33f] group-hover:-translate-x-1" /> <span className="hidden sm:inline">Volver</span>
      </button>

      <main className="max-w-5xl mx-auto px-4 md:px-6 pt-28 md:pt-32">
        <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 italic tracking-tighter">{project.title}</h1>
        
        <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-10">{project.description}</p>

        {project.video ? (
          <div className="bg-[#1a1a1a] rounded-[2rem] border border-[#343a40] p-1.5 md:p-2 mb-10 md:mb-12">
            <div className="aspect-video bg-[#0e1012] rounded-[1.5rem] overflow-hidden">
              <iframe
                src={`${project.video}?rel=0&modestbranding=1&controls=1&iv_load_policy=3&cc_load_policy=0&disablekb=1`}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="bg-[#1a1a1a] rounded-[2rem] border border-[#343a40] p-1.5 md:p-2 mb-10 md:mb-12">
            <div className="aspect-video bg-[#0e1012] rounded-[1.5rem] flex items-center justify-center">
              <div className="text-center px-4">
                <Icon icon="ri:video-line" className="text-5xl md:text-6xl text-gray-600 mb-3 md:4" />
                <p className="text-gray-500 text-sm md:text-base">Video demostrativo del proyecto</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-8 md:space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:4 text-[#6db33f]">Acerca del proyecto</h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{project.fullStory}</p>
          </div>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:4 text-[#6db33f]">Características principales</h2>
            <ul className="space-y-2 md:space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-base">
                  <Icon icon="ri:checkbox-circle-fill" className="text-[#6db33f] text-lg md:text-xl mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-10 md:space-y-16 pt-6 md:pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#6db33f]">Funcionalidades del sistema</h2>
              {project.screenshots.map((screenshot, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-8 items-start`}>
                  <div className="md:w-2/5 w-full">
                    <div className="bg-[#1a1a1a] rounded-[2rem] border border-[#343a40] p-2 md:p-3">
                      <div className="aspect-video bg-[#0e1012] rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                        {screenshot.image ? (
                          <img src={screenshot.image} alt={screenshot.title} className="w-full h-full object-cover" />
                        ) : (
                          <Icon icon="ri:image-line" className="text-4xl md:text-5xl text-gray-600" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 pt-2 md:pt-4">
                    <h3 className="text-lg md:text-2xl font-bold mb-2 md:3">{screenshot.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#343a40]">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 md:mb-6">Stack Tecnológico</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-8 text-5xl md:text-6xl">
                {project.tech.map((t, i) => (
                  <div key={i} className="flex flex-col items-center" title={t.name}>
                    <Icon icon={t.icon} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-auto">
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#1DB954] text-black px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#1ed760] transition text-sm md:text-base">
                <Icon icon="ri:external-link-fill" /> Ver Demo
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-[#fff] px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-[#24292e] transition text-sm md:text-base">
                <Icon icon="ri:github-fill" className="text-lg md:text-xl" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
