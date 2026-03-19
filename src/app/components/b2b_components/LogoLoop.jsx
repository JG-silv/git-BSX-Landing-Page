import React from 'react';

const styleSheet = `
@keyframes scroll-infinite {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-infinite-scroll {
  display: flex;
  width: max-content; /* Garante que a div cresça o quanto precisar */
  min-width: 100%;    /* Garante que não suma se estiver vazio */
  animation: scroll-infinite var(--speed) linear infinite;
}
.animate-infinite-scroll:hover {
  animation-play-state: var(--pause-state);
}
`;

export default function LogoLoop({
  logos,
  speed = 40, 
  pauseOnHover = true,
  logoHeight = 48,
  gap = 64,
  className = ""
}) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      
      {/* 1. Injeção de Estilos no DOM */}
      <style>{styleSheet}</style>

      {/* 2. Máscaras de Gradiente */}
     <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />

      {/* 3. O Container Animado */}
      <div 
        className="animate-infinite-scroll"
        style={{
          '--speed': `${speed}s`,
          '--pause-state': pauseOnHover ? 'paused' : 'running',
          gap: `${gap}px`
        }}
      >
        {[0, 1, 2, 3].map((copyIndex) => (
          <div key={copyIndex} className="flex items-center shrink-0" style={{ gap: `${gap}px` }}>
            {logos.map((logo, index) => (
              <div 
                key={`${copyIndex}-${index}`} 
                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: `${logoHeight}px`, width: 'auto' }}
                  className="max-w-none object-contain pointer-events-none block"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}