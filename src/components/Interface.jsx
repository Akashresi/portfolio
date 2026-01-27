import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// --- Components ---

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const SectionDivider = () => (
    <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', margin: '6rem 0' }} />
);

const TerminalPanel = () => (
    <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '8px',
        padding: '1.5rem',
        fontFamily: 'Menlo, Monaco, Consolas, monospace',
        fontSize: '0.9rem',
        color: '#d4d4d4',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        maxWidth: '500px'
    }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.8rem' }}>
            <div style={{ w: 10, h: 10, r: '50%', bg: '#ef4444' }}></div>
            <span style={{ color: '#666' }}>user@portfolio ~ </span>
        </div>
        <div>
            <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e5c07b' }}>skills</span> = {'{'}
            <div style={{ paddingLeft: '1.5rem', color: '#98c379' }}>
                languages: <span style={{ color: '#d19a66' }}>['JavaScript', 'Python', 'SQL']</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem', color: '#98c379' }}>
                frameworks: <span style={{ color: '#d19a66' }}>['React', 'Next.js', 'Node.js']</span>,
            </div>
            <div style={{ paddingLeft: '1.5rem', color: '#98c379' }}>
                tools: <span style={{ color: '#d19a66' }}>['Git', 'Docker', 'AWS']</span>
            </div>
            {'}'};
        </div>
    </div>
);

const ProjectCard = ({ title, desc, tags, link }) => (
    <motion.a
        href={link}
        target="_blank"
        className="project-card"
        whileHover={{ y: -4 }}
        style={{
            display: 'block',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '2rem',
            transition: 'border-color 0.2s',
            cursor: 'pointer'
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{title}</h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        </div>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{desc}</p>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {tags.map(tag => (
                <span key={tag} style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-blue)',
                    background: 'rgba(59, 130, 246, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                }}>
                    {tag}
                </span>
            ))}
        </div>
    </motion.a>
);

// --- Main Interface ---

export const Interface = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Scroll Indicator */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--accent-blue)',
                    transformOrigin: '0%',
                    scaleX,
                    zIndex: 100
                }}
            />

            {/* 1. Hero */}
            <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <FadeIn>
                        <p style={{ color: 'var(--accent-blue)', fontWeight: 500, letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
                            HELLO WORLD
                        </p>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: '#fff' }}>
                            Computer Science Student <br />
                            <span style={{ color: 'var(--text-secondary)' }}>& Aspiring Engineer.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6 }}>
                            Building scalable software and accessible digital experiences. Focused on clean code, performance, and modern web technologies.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. About */}
            <section id="about">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <FadeIn>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Me</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                I am currently studying Computer Science with a focus on Software Engineering. My journey began with a curiosity for how things work, leading me to explore everything from low-level systems to modern frontend frameworks.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                When I'm not coding, I'm analyzing data structures or contributing to open-source projects. I value clarity, efficiency, and continuous learning.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <TerminalPanel />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <div className="container"><SectionDivider /></div>

            {/* 3. Projects */}
            <section id="projects">
                <div className="container">
                    <FadeIn>
                        <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Selected Projects</h2>
                    </FadeIn>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <FadeIn delay={0.1}>
                            <ProjectCard
                                title="AI Study Assistant"
                                desc="A web application utilizing OpenAI's API to help students summarize notes and generate flashcards automatically."
                                tags={['Next.js', 'Python', 'OpenAI API']}
                                link="#"
                            />
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <ProjectCard
                                title="Algorithm Visualizer"
                                desc="Interactive platform visualizing common sorting and pathfinding algorithms to aid in CS education."
                                tags={['React', 'TypeScript', 'D3.js']}
                                link="#"
                            />
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <ProjectCard
                                title="Cloud File Manager"
                                desc="Secure file storage system with drag-and-drop uploads, folder organization, and sharable links."
                                tags={['AWS S3', 'Node.js', 'MongoDB']}
                                link="#"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <div className="container"><SectionDivider /></div>

            {/* 4. Contact */}
            <section id="contact" style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div className="container">
                    <FadeIn>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get In Touch</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                            I'm currently looking for internship opportunities for Summer 2026. Feel free to reach out.
                        </p>
                        <a
                            href="mailto:hello@example.com"
                            style={{
                                display: 'inline-block',
                                background: '#fff',
                                color: '#000',
                                padding: '1rem 2.5rem',
                                borderRadius: '6px',
                                fontSize: '1.1rem',
                                fontWeight: 500
                            }}
                        >
                            Email Me
                        </a>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
};
