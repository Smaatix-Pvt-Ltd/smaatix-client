import React, { useState, useEffect } from 'react';

type ProgressLineProps = {
  progress?: number;
};

const ProgressLine: React.FC<ProgressLineProps> = ({ progress }) => {
  const [particles, setParticles] = useState<{ id: number; left: number; opacity: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        id: Math.random(),
        left: Math.random() * 20 + 50,
        opacity: 1,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-full">
      <div className="relative">
        <div className="h-[5px] w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-in-out"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 4px rgba(147, 51, 234, 0.3)',
            }}
          />
        </div>

        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-purple-400"
            style={{
              left: `${particle.left}%`,
              opacity: particle.opacity,
              transform: 'translateY(-50%) scale(0.5)',
              transition: 'all 1s ease-out',
              animation: 'float-away 1s ease-out forwards',
              color: 'white',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float-away {
          0% {
            opacity: 0.8;
            transform: translateY(-50%) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-50%) translate(20px, -10px) scale(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressLine;
