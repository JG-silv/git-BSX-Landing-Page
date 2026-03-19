// src/app/judicial/page.jsx
import React from 'react';

// Seus componentes
import Hero from './Hero/index';
import Chat from './Chat/index';

export default function JudicialPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        {/* Renderiza o Hero e o Chat diretamente */}
        <Hero />
        <Chat />
      </main>
    </div>
  );
}