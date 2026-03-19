import React from "react";
import Chat from "./Chat/index";
import Hero from "./Hero/index";

export default function LpBusinessAltoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Hero />
        <Chat />
      </main>
    </div>
  );
}
