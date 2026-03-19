"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { poppins, sourceSans3 } from "../../app/components/fonts/fonts.jsx"; // Ajuste o caminho se necessário

// O componente agora recebe todas as informações via props
const VideoSection = ({ videoId, title, description, videoTitle, videoDuration }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // O videoId é a parte final do link do YouTube. Ex: "dQw4w9WgXcQ"
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Título com Poppins */}
          <h2 className={`text-3xl font-bold mb-6 ${poppins.className}`}>
            {title}
          </h2>
          {/* Texto com Source Sans 3 */}
          <p className={`text-xl text-blue-100 mb-8 ${sourceSans3.className}`}>
            {description}
          </p>

          <div className="relative bg-blue-800 rounded-lg overflow-hidden shadow-2xl max-w-3xl mx-auto aspect-video">
            {isPlaying ? (
              // Se o vídeo estiver a tocar, mostra o iframe
              <iframe
                src={videoUrl}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              // Caso contrário, mostra a thumbnail e o botão de play
              <div
                onClick={handlePlayClick}
                className="w-full h-full flex items-center justify-center cursor-pointer group"
              >
                <img
                  src={thumbnailUrl}
                  alt={`Thumbnail para o vídeo: ${videoTitle}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative text-center z-10">
                  <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-10 w-10 text-blue-700 ml-1" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${poppins.className}`}>
                    {videoTitle}
                  </h3>
                  <p className={`text-blue-200 ${sourceSans3.className}`}>
                    {videoDuration}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;