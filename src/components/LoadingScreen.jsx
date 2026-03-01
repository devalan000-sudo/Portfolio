import React from 'react';
import { Icon } from '@iconify/react';

const LoadingScreen = ({ message = "Iniciando Sistema", simple = false }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0e1012] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {simple ? (
          <div className="flex flex-col items-center gap-4">
            <Icon icon="logos:spring-icon" className="text-5xl animate-pulse" />
            <div className="w-24 h-1 bg-[#1a1a1a] overflow-hidden rounded-full">
              <div className="w-full h-full bg-[#6db33f] origin-left animate-[loading-bar_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        ) : (
          <>
            {/* Círculo exterior giratorio */}
            <div className="w-24 h-24 border-4 border-[#343a40] border-t-[#6db33f] rounded-full animate-spin"></div>
            
            {/* Icono central con pulso */}
            <div className="absolute animate-pulse">
              <Icon icon="logos:spring-icon" className="text-4xl" />
            </div>
          </>
        )}
      </div>
      
      {/* Texto de carga */}
      <div className="mt-8 flex flex-col items-center">
        <span className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold animate-pulse">
          {message}
        </span>
        <div className="mt-2 w-32 h-[2px] bg-[#1a1a1a] overflow-hidden rounded-full">
          <div className="w-full h-full bg-[#6db33f] origin-left animate-[loading-bar_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading-bar {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}} />
    </div>
  );
};

export default LoadingScreen;