import React from 'react';

// Fictional roles that will morph dynamically in ASCII on your screen
// // Fictional roles that will morph dynamically
// const roles = [
//   'Full-Stack Developer',
//   'Creative Technologist',
//   'UI/UX Design Engineer',
//   'Open Source Contributor'
// ];

export const About: React.FC = () => {
  return (
    <section className="about-section flex flex-col justify-center items-center min-h-screen container mx-auto px-6 text-center">
      <div className="will-change-transform gpu-accelerated animate-fade-in">
        {/* Your Name Display */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Hi, I'm <span className="text-pink-500">Alex Morgan</span>
        </h1>
        
        {/* The dynamic morphing area */}
        <p className="max-w-2xl mx-auto mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I bridge the gap between complex engineering and beautiful interactive design. I build high-performance web applications with seamless animations, interactive graphics, and clean architectures.
        </p>
      </div>
    </section>
  );
};