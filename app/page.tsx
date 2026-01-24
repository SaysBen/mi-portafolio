'use client';

import React from 'react';
import { Inter, Fira_Code } from 'next/font/google';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { SiReact, SiTypescript, SiJavascript, SiPython, SiCplusplus, SiLinux, SiNextdotjs } from 'react-icons/si';
import AsciiBlackHole from './AsciiBlackHole';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });
const firaCode = Fira_Code({ subsets: ['latin'] });

// --- Mis Datos
const DATA = {
  profile: {
    name: "Adonay Benjamín Culebro García",
    role: "Physics Engineer | Data Science & HPC",
    location: "San Luis Potosí / Monterrey, México",
    bio: "Physics Engineering specialized in Data Science, Parallel Computing, and Supercomputing. Skilled in Python, SQL, and Power BI for data analysis. Experienced in using SSH to access high-performance computing (HPC) clusters for numerical simulations and large-scale data analysis.",
    social: {
      github: "https://github.com/SaysBen",
      linkedin: "https://linkedin.com/in/adonay-benjamin-culebro-garcia-6204ba358/",
      email: "mailto:adonay_benjamin@hotmail.com"
    }
  },
  skills: [
    { name: "Python", icon: <SiPython /> },
    { name: "C / C++", icon: <SiCplusplus /> },
    { name: "Linux / SSH", icon: <SiLinux /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  education: [
    {
      school: "Universidad Autónoma de San Luis Potosí (UASLP)",
      degree: "Physics Engineering",
      period: "2021 - 2025", 
      desc: "Specialized in Computational Physics, Data Science, and High Performance Computing (HPC). Experienced in electronics, and software & hardware maintenance."
    }
  ],
  experience: [
    {
      company: "UASLP - Ellipsometry Laboratory",
      role: "Research Assistant (SNI)",
      period: "Jan 2024 - Jan 2026",
      desc: "Maintenance and improvements on ellipsometry systems. Analysis of optical properties of thin films (refractive index, dielectric permittivity, band gap) focusing on silicon spectrum replication."
    },
    {
      company: "LNS (National Laboratory of Supercomputing)",
      role: "HPC Computational Research",
      period: "Mar 2024 - Jan 2026",
      desc: "Design and analysis of nanomaterial structures (DFT, TD-DFT, GW). Developed scripts for loading calculations via SSH on supercomputers and analyzing material behavior."
    }
  ],
  projects: [
    {
      title: "ISWA Web App",
      desc: "Computational Physics Platform for semiconductor physics. Reproduces and predicts electrical/optical properties of quantum well structures.",
      tags: ["Python", "Streamlit", "NumPy", "Physics"],
      link: "#"
    },
    {
      title: "Nanostructures Analysis (LNS)",
      desc: "Advanced analysis of Optical and Magnetic properties. Automated workflows to extract key metrics from simulation outputs using HPC.",
      tags: ["HPC", "SSH", "Pandas", "Data Sci"],
      link: "#"
    },
    {
      title: "Data Visualization & Automation",
      desc: "Processed and visualized experimental results using Python to support theoretical conclusions.",
      tags: ["Python", "Matplotlib", "SQL"],
      link: "#"
    }
  ],
  languages: [
    { name: "Spanish", level: "Native", code: "ES" },
    { name: "English", level: "TOEFL ITP 470", code: "EN" },
    { name: "German", level: "A1", code: "DE" },
  ]
};

export default function Home() {
  return (
    <div className={`min-h-screen lg:grid lg:grid-cols-[320px_1fr] ${inter.className}`}>
      
      {/* --- SIDEBAR IZQUIERDA --- */}
      <aside className="bg-[#18181b] text-white p-8 flex flex-col gap-8 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
        
        {/* Perfil */}
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden border-4 border-gray-800 relative">
             <Image 
               src="/perf.jpg" 
               alt="Profile" 
               width={128}    
               height={128}   
               className="w-full h-full object-cover object-top" 
               priority       
            />
          </div>
          <h1 className="text-xl font-bold leading-tight mt-4">{DATA.profile.name}</h1>
          <p className={`text-sm text-gray-400 mt-2 ${firaCode.className}`}>{DATA.profile.role}</p>
          
          {/* Aquí agregamos el icono de ubicación que te faltaba */}
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-500">
            <FaMapMarkerAlt /> {DATA.profile.location}
          </div>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-4 text-xl text-gray-400">
          <a href={DATA.profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href={DATA.profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href={DATA.profile.social.email} className="hover:text-white transition"><FaEnvelope /></a>
        </div>

        {/* Stack Tecnológico */}
        <div>
          <h3 className={`text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 ${firaCode.className}`}>Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, i) => (
              <span key={i} className={`bg-[#27272a] text-gray-300 px-3 py-1 rounded text-xs flex items-center gap-2 ${firaCode.className}`}>
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <h3 className={`text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 ${firaCode.className}`}>Languages</h3>
          <ul className="space-y-2">
            {DATA.languages.map((lang, i) => (
              <li key={i} className="flex justify-between text-sm text-gray-400">
                <span>{lang.name}</span>
                <span className={`text-gray-600 ${firaCode.className}`}>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="p-6 lg:p-12 max-w-5xl mx-auto w-full">
        
        {/* Header tipo Terminal */}
        <div className={`bg-gray-200 text-gray-600 px-4 py-2 rounded-lg mb-8 text-sm border border-gray-300 inline-block ${firaCode.className}`}>
          ~/adonay-benjamin/cv/readme.md <span className="animate-pulse">_</span>
        </div>

        {/* Sección: About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">About Me</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {DATA.profile.bio}
          </p>
        </section>

        {/* Educación */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaGraduationCap /> Education
          </h2>
          <div className="space-y-4">
            {DATA.education.map((edu, i) => (
              <div key={i} className="card bg-white flex flex-col md:flex-row gap-4 items-start md:items-center justify-between p-6">
                <div>
                  <h3 className="font-bold text-lg">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mt-1">{edu.desc}</p>
                </div>
                <span className={`text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200 whitespace-nowrap ${firaCode.className}`}>
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </section>

      import { BookOpen } from 'lucide-react';

{/* Scientific Publications */}
<section className="mt-12 mb-10">
  
  <div className="flex items-center gap-2 border-b-2 border-purple-600 pb-2 mb-6">
    <BookOpen className="w-6 h-6 text-purple-600" />
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
      Scientific Publications
    </h2>
  </div>

 
  <div className="group relative bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left">
    
    
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-600 rounded-l-2xl"></div>

    <div className="flex flex-col gap-4">
      <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
        Peer Reviewed Article
      </span>
      
      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-purple-600 transition-colors">
        Linear optical response of monolayer Sb₂Te₃ under uniaxial strain assessed by time-dependent density functional theory
      </h3>

      <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
        <p><span className="font-semibold text-slate-800 dark:text-slate-200">Journal:</span> 2D Materials (2026)</p>
        <p><span className="font-semibold text-slate-800 dark:text-slate-200">DOI:</span> 10.1088/2053-1583/ae1848</p>
      </div>

      <div className="mt-2 bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
        <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wide">Contribution</p>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Applied <span className="text-purple-600 dark:text-purple-400 font-semibold">TD-DFT</span> to analyze linear optical response under uniaxial strain.
        </p>
      </div>

      <div className="mt-2 flex justify-end">
        <a 
          href="https://doi.org/10.1088/2053-1583/ae1848" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/btn flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold hover:underline text-sm transition-all"
        >
          Access Full Paper
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

        {/* Sección: Proyectos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaGithub /> Research & Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.projects.map((project, i) => (
              <div key={i} className="card hover:shadow-lg transition-shadow group bg-white flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`font-bold text-lg ${firaCode.className}`}>{project.title}</h3>
                  <a href={project.link} className="text-gray-400 hover:text-black"><FaExternalLinkAlt /></a>
                </div>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{project.desc}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.tags.map((tag, t) => (
                    <span key={t} className={`text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200 ${firaCode.className}`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Experiencia */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="border-l-2 border-gray-200 ml-2 space-y-8">
            {DATA.experience.map((job, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-gray-800 rounded-full border-4 border-[#f4f4f5]"></div>
                <h3 className="font-bold text-lg">{job.role}</h3>
                <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                  <span className="font-semibold text-gray-800">@ {job.company}</span> 
                  <span>|</span> 
                  <span className={firaCode.className}>{job.period}</span>
                </div>
                <p className="text-gray-600 max-w-2xl">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/*ANIMACIÓN*/}
        <AsciiBlackHole/>

      </main>
    </div>
  );
}