import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

// Define the Project type
interface Project {
  name: string;
  description: string;
  image: string;
  url?: string;
  technologies?: string[];
}

interface CardProps {
  project: Project;
}

const ThreeDCard: React.FC<CardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const resetStyles = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="w-full h-[500px] max-w-sm bg-white shadow-xl shadow-gray-500/60 rounded-lg hover:shadow-2xl hover:shadow-purple-500/60 overflow-hidden cursor-pointer hover:shadow-3xl hover:shadow-purple-500/70 dark:bg-[#1f2835]"
      ref={cardRef}
      onMouseMove={handleHover}
      onMouseLeave={resetStyles}
      style={{ transform }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col h-full">
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full h-48 overflow-hidden"
        >
          <img 
              src={project.image} 
              className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-300 hover:scale-105 p-4 rounded-3xl rounded-b-3xl" 
              alt={project.name} 
              loading="lazy"
            />

        </a>
        <div className="p-5 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-3">{project.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-5">{project.description}</p>

          {/* Technologies List */}
          {project.technologies && (
            <div className="flex flex-wrap justify-center gap-2 mt-auto">
              {project.technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-purple-900 bg-opacity-20 text-purple-400 px-3 py-1 text-xs uppercase font-medium rounded border border-purple-500"
                >
                  {tech}
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 pt-2 pb-3">
              <a 
                href={project.url} 
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-600 font-medium"
              >
                Learn More →
              </a>
            </div>
          
        </div>
      </div>
    </motion.article>
  );
};

export default ThreeDCard;