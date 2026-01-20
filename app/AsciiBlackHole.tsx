'use client';

import React, { useState, useEffect } from 'react';
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

const frames = [
  // Frame 0
  `
. . . . 1 0 . . . . . . . . 0 1 . . . .
. . 0 . . . . . . 1 0 . . . . . . 1 . .
. 1 . . . . 0 . . . . . . 1 . . . . 0 .
. . . . 1 . . . . . . . . . . 0 . . . .
. 0 . . . . . . 1 0 1 0 . . . . . . 1 .
. . . 1 . . 0 1 . . . . 1 0 . . 0 . . .
. 1 . . . . . . 0 1 0 1 . . . . . . 0 .
. . 0 . . . . 1 . . . . 0 . . . . 1 . .
. . . . 0 1 . . . . . . . . 1 0 . . . .
. 1 . . . . . . 0 1 . . . . . . 0 . . .
. . . . 1 0 . . . . . . . . 0 1 . . . .
  `,
  // Frame 1
  `
. . 1 . . . . . 0 1 0 1 . . . . . 0 . .
. 0 . . . 1 . . . . . . . . 0 . . . 1 .
. . . 0 . . . 1 0 . . 0 1 . . . 1 . . .
. 1 . . . . 0 . . . . . . 1 . . . . 0 .
. . . 1 . . . . 0 1 0 1 . . . . 0 . . .
. 0 . . . 1 0 . 1 . . 0 . 0 1 . . . 1 .
. . . 0 . . . . 1 0 1 0 . . . . 1 . . .
. 1 . . . . 0 . . . . . . 1 . . . . 0 .
. . . 1 . . . 0 1 . . 1 0 . . . 0 . . .
. 0 . . . 0 . . . . . . . . 1 . . . 1 .
. . 0 . . . . . 1 0 1 0 . . . . . 1 . .
  `,
  // Frame 2
  `
. 0 . . 1 . . 0 . . . . 1 . . 0 . . 1 .
1 . . 0 . . 1 . 0 1 0 1 . 1 . . 1 . . 0
. . 1 . . 0 . 1 . . . . 0 . 1 . . 0 . .
. 0 . . 1 . . . 0 1 0 1 . . . 0 . . 1 .
. . 0 . . 1 0 . . . . . . 1 0 . . 1 . .
1 . . 0 . . . 1 0 @ 0 1 . . . 1 . . 0
. . 1 . . 0 1 . . . . . . 0 1 . . 0 . .
. 0 . . 1 . . . 1 0 1 0 . . . 1 . . 1 .
. . 0 . . 1 . 0 . . . . 1 . 0 . . 1 . .
0 . . 1 . . 0 . 1 0 1 0 . 0 . . 1 . . 1
. 1 . . 0 . . 1 . . . . 0 . . 1 . . 0 .
  `,
  // Frame 3
  `
. . . 0 1 0 . . . . . . . . 1 0 1 . . .
. 1 . . . . 1 0 1 0 1 0 1 . . . . 0 .
. . 0 . 1 . . . . . . . . . 0 . 1 . .
0 . . 1 . . 0 1 0 . 1 0 1 . . 0 . . 1
. 1 . . 0 1 . . . . . . . 1 0 . . 1 .
. . 0 . 1 . . 0 1 @ 1 0 . . 1 . 0 . .
. 1 . . 0 1 . . . . . . . 1 0 . . 0 .
1 . . 0 . . 1 0 1 . 0 1 0 . . 1 . . 1
. . 1 . 0 . . . . . . . . . 1 . 0 . .
. 0 . . . . 0 1 0 1 0 1 0 . . . . 1 .
. . . 1 0 1 . . . . . . . . 0 1 0 . . .
  `,
  // Frame 4
  `
. . . . . . 1 0 1 0 1 0 . . . . . .
. . . 1 0 . . . . . . . . 0 1 . . .
. . 0 . . 1 0 1 . 1 0 1 . . 1 . .
. 1 . . 0 . . . . . . . . 1 . . 0 .
. . 0 . 1 . 0 1 @ 1 0 . 0 . . 1 .
. 1 . . 0 . . . . . . . . 1 . . 0 .
. . 0 . . 1 0 1 . 1 0 1 . . 1 . .
. . . 1 0 . . . . . . . . 0 1 . . .
. . . . . . 0 1 0 1 0 1 . . . . . .
  `,
  // Frame 5
  `
. . . . . . . . . . . . . .
. . . 0 1 0 1 0 1 . . .
. . 1 . . . . . . 0 . .
. 0 . . 1 0 1 0 . . 1 .
. 1 . 0 1 . . 0 1 . 0 .
. 0 . 1 0 .  . 1 0 . 1 .
. 1 . 0 1 . . 0 1 . 0 .
. 0 . . 1 0 1 0 . . 1 .
. . 1 . . . . . . 0 . .
. . . 1 0 1 0 1 0 . . .
. . . . . . . . . . . . . .
  `,
  // Frame 6
  `
. . . . . . . . . .
. . 1 0 1 0 . .
. 0 . . . . 1 .
. 1 . 0@0 . 0 .
. 0 . @#@ . 1 .
. 1 . 0@0 . 0 .
. 0 . . . . 1 .
. . 1 0 1 0 . .
. . . . . . . . . .
  `,
   // Frame 7
  `
. . . . . . . . . .
. . 0 1 0 1 . .
. 1 . . . . 0 .
. 0 . 1@1 . 1 .
. 1 . @#@ . 0 .
. 0 . 1@1 . 1 .
. 1 . . . . 0 .
. . 0 1 0 1 . .
. . . . . . . . . .
  `,
  // Frame 8
  `
. . . . . . . . . . . .
. . . 1 0 1 0 . . .
. . 1 . 0 1 . 0 . .
. 0 . 1 . . 1 . 1 .
. 1 . 0 . . 0 . 0 .
. 0 . 1 . . 1 . 1 .
. . 1 . 0 1 . 0 . .
. . . 0 1 0 1 . . .
. . . . . . . . . . . .
  `,
    // Frame 9
  `
. . . . . . . . . .
. . 0 1 0 1 . .
. 0 . . . . 1 .
. 1 . 0 1 0 . 0 .
. 0 . 1 . 1 . 1 .
. 1 . 0 1 0 . 0 .
. 0 . . . . 1 .
. . 1 0 1 0 . .
. . . . . . . . . .
  `,
   // Frame 10
  `
. . . . . . . . . .
. . 1 0 1 0 . .
. 1 . . . . 0 .
. 0 . 1@1 . 1 .
. 1 . @#@ . 0 .
. 0 . 1@1 . 1 .
. 1 . . . . 0 .
. . 0 1 0 1 . .
. . . . . . . . . .
  `,
    // Frame 11
  `
. . . . . . . . . .
. . . . . . . . . .
. . * . * . * . .
. . . * . * . . .
. . * . @ . * . .
. . . * . * . . .
. . * . * . * . .
. . . . . . . . . .
. . . . . . . . . .
  `
];

const AsciiBlackHole = () => {
    const [frame, setFrame] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFrame((prev) => (prev + 1) % frames.length);
      }, 180);
      return () => clearInterval(interval);
    }, []);
  
    return (
     
      <div className="w-full h-96 flex flex-col items-center justify-center mt-12 mb-12 bg-white rounded-xl border border-gray-200 relative overflow-hidden shadow-sm">
        
        {/* Gradiente profundidad sobre el blanco */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
  
        {/* Contenedor fijo para la animación */}
        <div className="h-64 flex items-center justify-center z-10 mb-8">
          <pre 
            className={`text-sm leading-[1.1] text-center whitespace-pre bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 ${firaCode.className}`}
            style={{ 
              textShadow: '0 0 20px rgba(167, 139, 250, 0.2), 0 0 2px rgba(0, 0, 0, 0.1)' 
            }}
          >
            {frames[frame]}
          </pre>
        </div>
  
        {/* Título fijo en la parte inferior */}
        <p className={`absolute bottom-6 text-[11px] text-gray-400 tracking-[0.3em] uppercase ${firaCode.className} animate-pulse z-10`}>
          Quantum Data Singularity
        </p>
      </div>
    );
  };
  
  export default AsciiBlackHole;