import React from "react";
import Chat from "./Chat/index";
import Hero from "./Hero/index";

export default function LpBusinessAltoPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <main className="relative">
        <Hero />
        <Chat />
      </main>
    </div>
  );
}
 
