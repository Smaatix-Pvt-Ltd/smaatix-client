import React, { useRef } from 'react';
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ROTATION_RANGE = 25.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

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

    // Motion values for rotation
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth transitions
    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Transform template for perspective and rotation
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
        <motion.div
            className='group w-full h-full max-w-sm rounded-xl border border-[--card-border] bg-[--card-background] p-1 shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)]'
            ref={cardRef}
            onMouseMove={handleHover}
            onMouseLeave={resetStyles}
            style={{ transform }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            {/* Inner content wrapper for consistent padding and flex */}
            <div className='flex h-full flex-col overflow-hidden rounded-[calc(0.75rem-0.25rem)]'>
                {' '}
                <div className='relative w-full h-48 overflow-hidden'>
                    <img
                        src={project.image}
                        className='absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        alt={project.name}
                        loading='lazy'
                    />
                    {/*  Subtle gradient overlay on image */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/20'></div>
                </div>
                {/* Text Content Area */}
                <div className='p-5 flex flex-col flex-grow'>
                    {' '}
                    <h2 className='text-lg font-semibold text-foreground mb-2 text-center'>
                        {' '}
                        {project.name}
                    </h2>
                    <p className='text-sm text-foreground-secondary text-center mb-4 flex-grow'>
                        {project.description}
                    </p>
                    {/* Technologies List */}
                    {project.technologies &&
                        project.technologies.length > 0 && (
                            <div className='flex flex-wrap justify-center gap-2 mb-4'>
                                {project.technologies.map((tech) => (
                                    <div
                                        key={tech} // Use tech name as key
                                        // Themed tags using CSS variables
                                        className='rounded border border-[--tag-border] bg-[--tag-background] px-2.5 py-0.5 text-xs font-medium text-[--tag-text]'
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        )}
                    {/* Learn More Link */}
                    {project.url && (
                        <div className='mt-auto pt-2 text-center'>
                            {' '}
                            {/* Pushes link down */}
                            <a
                                href={project.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center text-sm font-medium text-accent-start hover:text-accent-end hover:underline'
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Project
                                <FaExternalLinkAlt className='ml-1.5 h-3 w-3' />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ThreeDCard;
