'use client';

import React from 'react';
import { Inter, Fira_Code } from 'next/font/google';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import {
  SiReact, SiTypescript, SiJavascript, SiPython, SiCplusplus, SiLinux,
  SiGit, SiJupyter, SiPandas, SiNumpy, SiTensorflow, SiStreamlit,
} from 'react-icons/si';
import { BookOpen, Database, BarChart3, Download } from 'lucide-react';
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
    bio: "Ingeniero Físico especializado en ciencia de datos, computación paralela y supercómputo. Asistente de Investigación (SNI) con experiencia aplicando Python, SQL y Power BI a análisis de datos, y accediendo vía SSH a clústeres HPC para simulación numérica a gran escala.",
    social: {
      github: "https://github.com/SaysBen",
      linkedin: "https://linkedin.com/in/adonay-benjamin-culebro-garcia-6204ba358/",
      email: "mailto:adonay_benjamin@hotmail.com"
    },
    resumeUrl: "/CV_Adonay_Culebro.pdf"
  },
  skillGroups: [
    {
      label: "Lenguajes",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <Database size={14} /> },
        { name: "C / C++", icon: <SiCplusplus /> },
        { name: "C#", icon: null },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      label: "Herramientas",
      skills: [
        { name: "Power BI", icon: <BarChart3 size={14} /> },
        { name: "Git / GitHub", icon: <SiGit /> },
        { name: "Linux / SSH", icon: <SiLinux /> },
        { name: "Jupyter", icon: <SiJupyter /> },
      ],
    },
    {
      label: "Librerías",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: null },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Streamlit", icon: <SiStreamlit /> },
        { name: "React / Next.js", icon: <SiReact /> },
      ],
    },
    {
      label: "Computación científica",
      skills: [
        { name: "HPC", icon: null },
        { name: "Quantum ESPRESSO", icon: null },
        { name: "Yambo", icon: null },
        { name: "SOLCORE", icon: null },
        { name: "AESTIMO", icon: null },
      ],
    },
  ],
  education: [
    {
      school: "Universidad Autónoma de San Luis Potosí (UASLP)",
      degree: "Physics Engineering",
      period: "2021 - 2025",
      desc: "Especializado en Física Computacional, Ciencia de Datos y Cómputo de Alto Rendimiento (HPC). Experiencia en electrónica y mantenimiento de software/hardware."
    }
  ],
  experience: [
    {
      company: "Universidad Autónoma de San Luis Potosí (UASLP)",
      role: "Asistente de Investigación (SNI)",
      period: "Agosto 2024 - Agosto 2026",
      subroles: [
        {
          title: "Laboratorio de Elipsometría",
          desc: "Mantenimiento y mejora del sistema de elipsometría. Análisis de propiedades ópticas de películas delgadas (índice de refracción, permitividad dieléctrica, band gap) enfocado en replicar el espectro del silicio."
        },
        {
          title: "Proyecto en el Laboratorio Nacional de Supercómputo del Sureste de México (LNS)",
          desc: "Diseño y análisis de nanoestructuras mediante DFT, TD-DFT y GW. Automatización de simulaciones en supercómputo vía SSH y procesamiento de resultados para estudiar propiedades ópticas y magnéticas."
        }
      ]
    }
  ],
  projects: [
    {
      title: "ISWA Web App",
      desc: "Computational Physics Platform para física de semiconductores. Reproduce y predice propiedades eléctricas/ópticas de estructuras de pozo cuántico.",
      tags: ["Python", "Streamlit", "NumPy", "Physics"],
      link: null,
      status: "Próximamente",
      thumbnail: null,
    },
    {
      title: "Nanostructures Analysis (LNS)",
      desc: "Parseo de salidas DFT de banda electrónica generadas en HPC (Quantum ESPRESSO, corridas vía SSH en el clúster LNS) hacia un dataset limpio con pandas, extrayendo band gap y nivel de Fermi a través de pasos de strain.",
      tags: ["HPC", "SSH", "Pandas", "Data Sci"],
      link: "https://github.com/SaysBen/sb2te3-band-extraction",
      status: null,
      thumbnail: "/projects/nanostructures-lns.png",
    },
    {
      title: "Data Visualization & Automation",
      desc: "Pipeline automatizado que carga resultados de simulación en SQLite y visualiza el band gap de Sb₂Te₃ en función del strain con Matplotlib, respaldando las conclusiones del paper.",
      tags: ["Python", "Matplotlib", "SQL"],
      link: "https://github.com/SaysBen/sb2te3-bandgap-viz",
      status: null,
      thumbnail: "/projects/data-viz-automation.png",
    },
    {
      title: "Sb₂Te₃ TDDFT Optical Response",
      desc: "Inputs de Quantum ESPRESSO & YAMBO, scripts de procesamiento y figuras detrás de un paper revisado por pares (2D Materials, 2026). TD-DFT aplicado a la respuesta óptica lineal de Sb₂Te₃ monocapa bajo strain.",
      tags: ["DFT", "TDDFT", "Quantum ESPRESSO", "YAMBO"],
      link: "https://github.com/SaysBen/Sb2Te3-TDDFT-2DM",
      status: null,
      thumbnail: "/projects/sb2te3-tddft.png",
    },
    {
      title: "Waveguide Optical Property Prediction (Collaborator)",
      desc: "Colaboración en la red neuronal multi-salida de Oscar Pimentel para propiedades ópticas de guías de onda. Ejecuté una prueba independiente con regresión ridge (NumPy) sobre el mismo dataset como sanity check (R² > 0.97).",
      tags: ["Python", "NumPy", "Collaboration", "Photonics"],
      link: "https://github.com/SaysBen/waveguide-optical-nn-prediction",
      status: null,
      thumbnail: "/projects/waveguide-nn.png",
    }
  ],
  languages: [
    { name: "Spanish", level: "Native", code: "ES" },
    { name: "English", level: "TOEFL ITP 470", code: "EN" },
    { name: "German", level: "A1", code: "DE" },
  ]
};

function ProjectCard({ project }: { project: (typeof DATA.projects)[number] }) {
  const content = (
    <div className="card hover:shadow-lg transition-shadow group bg-white flex flex-col h-full overflow-hidden p-0">
      <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`Gráfica de ${project.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs tracking-widest uppercase text-gray-400 font-bold">
            {project.status ?? "Proyecto"}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className={`font-bold text-lg ${firaCode.className}`}>{project.title}</h3>
          {project.link ? (
            <FaExternalLinkAlt className="text-gray-400 group-hover:text-[var(--accent)] transition-colors mt-1 shrink-0" />
          ) : (
            <span className={`text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 rounded-full px-2 py-1 shrink-0 ${firaCode.className}`}>
              {project.status}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-6 flex-grow">{project.desc}</p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.tags.map((tag, t) => (
            <span key={t} className={`text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200 group-hover:border-[var(--accent)]/40 transition-colors ${firaCode.className}`}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (!project.link) {
    return <div aria-disabled className="opacity-90">{content}</div>;
  }

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </a>
  );
}

export default function Home() {
  return (
    <div className={`min-h-screen lg:grid lg:grid-cols-[320px_1fr] ${inter.className}`}>

      {/* --- SIDEBAR IZQUIERDA --- */}
      <aside className="bg-[#18181b] text-white p-6 sm:p-8 flex flex-col gap-8 lg:h-screen lg:sticky lg:top-0 overflow-y-auto">
        <div className="text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden border-4 border-gray-800 relative">
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
          <p className={`text-sm text-gray-300 mt-2 ${firaCode.className}`}>{DATA.profile.role}</p>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs text-gray-400">
            <FaMapMarkerAlt /> {DATA.profile.location}
          </div>
        </div>

        <div className="flex justify-center gap-4 text-xl text-gray-400">
          <a href={DATA.profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href={DATA.profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href={DATA.profile.social.email} className="hover:text-white transition"><FaEnvelope /></a>
        </div>

        <a
          href={DATA.profile.resumeUrl}
          download
          className={`flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[#6d28d9] text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors ${firaCode.className}`}
        >
          <Download size={16} /> Descargar CV
        </a>

        <div className="flex flex-col gap-6">
          {DATA.skillGroups.map((group, gi) => (
            <div key={gi}>
              <h3 className={`text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 ${firaCode.className}`}>{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span key={i} className={`bg-[#27272a] text-gray-300 px-3 py-1 rounded text-xs flex items-center gap-2 ${firaCode.className}`}>
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className={`text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 ${firaCode.className}`}>Languages</h3>
          <ul className="space-y-2">
            {DATA.languages.map((lang, i) => (
              <li key={i} className="flex justify-between text-sm text-gray-300">
                <span>{lang.name}</span>
                <span className={`text-gray-500 ${firaCode.className}`}>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="p-6 lg:p-12 max-w-5xl mx-auto w-full">

        <div className={`bg-gray-200 text-gray-600 px-4 py-2 rounded-lg mb-8 text-sm border border-gray-300 inline-block ${firaCode.className}`}>
          ~/adonay-benjamin/cv/readme.md <span className="animate-pulse">_</span>
        </div>

        {/* Sección: About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            {DATA.profile.bio}
          </p>
        </section>

        {/* Educación */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-[var(--accent)]" /> Education
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

        {/* Scientific Publications */}
        <section className="mb-12">
          <div className="flex items-center gap-2 border-b-2 border-[var(--accent)] pb-2 mb-6 text-slate-900">
            <BookOpen className="w-6 h-6 text-[var(--accent)]" />
            <h2 className="text-2xl font-bold">Scientific Publications</h2>
          </div>
          <div className="group relative bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden text-left">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent)] rounded-l-2xl"></div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
                Peer Reviewed Article
              </span>
              <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-[var(--accent)] transition-colors">
                Linear optical response of monolayer Sb₂Te₃ under uniaxial strain assessed by time-dependent density functional theory
              </h3>
              <div className="text-sm text-slate-600 space-y-1">
                <p><span className="font-semibold text-slate-800">Journal:</span> 2D Materials (2026)</p>
                <p><span className="font-semibold text-slate-800">DOI:</span> 10.1088/2053-1583/ae1848</p>
              </div>
              <div className="mt-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-wide">Contribution</p>
                <p className="text-sm text-slate-700">
                  Applied <span className="text-[var(--accent)] font-semibold">TD-DFT</span> to analyze linear optical response under uniaxial strain.
                </p>
              </div>
              <div className="mt-2 flex justify-end">
                <a href="https://doi.org/10.1088/2053-1583/ae1848" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center gap-2 text-[var(--accent)] font-bold hover:underline text-sm transition-all">
                  Access Full Paper
                  <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Proyectos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FaGithub className="text-[var(--accent)]" /> Research & Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        {/* Sección: Experiencia */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="border-l-2 border-gray-200 ml-2 space-y-8">
            {DATA.experience.map((job, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[#f4f4f5]"></div>
                <h3 className="font-bold text-lg">{job.role}</h3>
                <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                  <span className="font-semibold text-gray-800">@ {job.company}</span>
                  <span>|</span>
                  <span className={firaCode.className}>{job.period}</span>
                </div>
                <div className="space-y-4">
                  {job.subroles.map((sub, si) => (
                    <div key={si}>
                      <h4 className="font-semibold text-gray-800 text-sm">{sub.title}</h4>
                      <p className="text-gray-600 max-w-2xl text-sm mt-1">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AsciiBlackHole/>

        {/* Footer / CTA de cierre */}
        <footer className="mt-4 mb-8 text-center border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold mb-2">¿Trabajamos juntos?</h2>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Abierto a colaboraciones en ciencia de datos, HPC y desarrollo web.
          </p>
          <a
            href={DATA.profile.social.email}
            className={`inline-flex items-center gap-2 bg-[#18181b] hover:bg-[var(--accent)] text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-colors ${firaCode.className}`}
          >
            <FaEnvelope /> Escríbeme
          </a>
          <p className="text-xs text-gray-400 mt-8">
            © {new Date().getFullYear()} {DATA.profile.name} · Hecho con Next.js
          </p>
        </footer>

      </main>
    </div>
  );
}
