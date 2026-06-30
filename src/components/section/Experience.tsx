import React from 'react';

interface Milestone {
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

const experienceData: Milestone[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Nexus Labs",
    period: "2024 - Present",
    description: [
      "Architected high-performance WebGL canvas modules, boosting user interaction retention rates by 40%.",
      "Engineered real-time rendering features using React and TypeScript, optimizing frame rates to a stable 60 FPS.",
      "Mentored a cross-functional team of 6 developers, establishing modern CI/CD deployment standards."
    ],
    tags: ["React 19", "TypeScript", "WebGL", "GSAP", "Tailwind CSS"]
  },
  {
    role: "Creative Technologist",
    company: "Prism Interactive",
    period: "2021 - 2024",
    description: [
      "Designed and deployed responsive web tools using interactive micro-interactions and custom animation systems.",
      "Collaborated closely with branding teams to convert complex motion designs into responsive layout components.",
      "Reduced build bundle sizes by 35% through aggressive asset splitting and custom Vite optimization setups."
    ],
    tags: ["JavaScript", "Vite", "Tailwind CSS", "React Spring", "Figma"]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-zinc-900 dark:text-white font-mono">
          ./WORK_HISTORY
        </h2>
        
        <div className="relative border-l-2 border-pink-200 dark:border-pink-900 ml-4 md:ml-6 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8 animate-fade-in">
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-pink-500 border-4 border-zinc-50 dark:border-zinc-950" />
              
              {/* Header Box */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {item.role}
                  </h3>
                  <span className="text-pink-500 font-medium font-mono text-sm">
                    @{item.company}
                  </span>
                </div>
                <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1 md:mt-0 bg-zinc-200/50 dark:bg-zinc-800/50 px-3 py-1 rounded-full w-fit">
                  {item.period}
                </span>
              </div>
              
              {/* Description Bullets */}
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 list-disc list-inside mb-4 leading-relaxed">
                {item.description.map((bullet, idx) => (
                  <li key={idx} className="marker:text-pink-400">
                    <span className="pl-1">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;