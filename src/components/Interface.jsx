import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// --- Visual Components ---

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} // Soft easing
    >
        {children}
    </motion.div>
);

const SectionHeading = ({ children }) => (
    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 500 }}>
        {children}
    </h2>
);

const TerminalProfile = () => (
    <div className="glass-panel" style={{
        borderRadius: '12px',
        padding: '2rem',
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: '0.9rem',
        lineHeight: 1.7,
        width: '100%',
        maxWidth: '480px'
    }}>
        <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', opacity: 0.6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff', opacity: 0.5 }} />
        </div>

        <div>
            <div style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#7dd3fc' }}>class</span> <span style={{ color: '#fff', fontWeight: 'bold' }}>Student</span> <span style={{ color: '#7dd3fc' }}>implements</span> Developer {'{'}
            </div>

            <div style={{ paddingLeft: '1.5rem', color: '#a1a1aa' }}>
                constructor() {'{'}
                <div style={{ paddingLeft: '1.5rem' }}>
                    this.name = <span style={{ color: '#86efac' }}>"Alex"</span>;
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                    this.focus = <span style={{ color: '#86efac' }}>"AI & Web Performance"</span>;
                </div>
                {'}'}
            </div>

            <div style={{ paddingLeft: '1.5rem', color: '#a1a1aa', marginTop: '0.5rem' }}>
                skills() {'{'}
                <div style={{ paddingLeft: '1.5rem' }}>
                    return [
                    <span style={{ color: '#fca5a5' }}>"React"</span>,
                    <span style={{ color: '#fca5a5' }}>"TypeScript"</span>,
                    <span style={{ color: '#fca5a5' }}>"Node.js"</span>
                    ];
                </div>
                {'}'}
            </div>

            <div>{'}'}</div>
        </div>
    </div>
);

const ProjectCard = ({ title, desc, stack, link }) => (
    <motion.a
        href={link}
        target="_blank"
        className="glass-panel"
        style={{
            display: 'block',
            borderRadius: '16px',
            padding: '2.5rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textDecoration: 'none'
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
    >
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0 }}>{title}</h3>
                <span style={{ opacity: 0.4, fontSize: '1.2rem' }}>↗</span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#a1a1aa' }}>
                {desc}
            </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {stack.map((item, i) => (
                <span key={i} style={{
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#e4e4e7',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    {item}
                </span>
            ))}
        </div>
    </motion.a>
);

// --- Layout ---

export const Interface = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

    return (
        <div style={{ position: 'relative' }}>
            {/* Soft Scroll Progress */}
            <motion.div style={{
                position: 'fixed', top: 0, left: 0, right: 0, height: '1px',
                background: 'rgba(255,255,255,0.2)', scaleX, transformOrigin: '0%', zIndex: 100
            }} />

            {/* 1. Hero */}
            <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '0 5%' }}>
                <div className="container">
                    <FadeIn>
                        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem', fontSize: '0.9rem', color: '#d4d4d8' }}>
                            👋 Available for Summer 2026 Internships
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Designing the future <br /> with <span style={{ color: '#60a5fa' }}>clean code</span>.
                        </h1>
                        <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: 1.6, color: '#a1a1aa' }}>
                            I'm a Computer Science student passionate about building accessible, high-performance web applications that feel effortless to use.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 2. About */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <FadeIn>
                            <SectionHeading>About Me</SectionHeading>
                            <p>
                                My fascination with technology started with gaming, but quickly evolved into a love for creation. Now, I use code to solve real-world problems.
                            </p>
                            <p>
                                I specialize in the JavaScript ecosystem, but I'm never afraid to dive into low-level systems (C++) or explore the latest in AI models.
                            </p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>Location</h4>
                                    <span style={{ color: '#a1a1aa' }}>San Francisco, CA</span>
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>Education</h4>
                                    <span style={{ color: '#a1a1aa' }}>B.S. Computer Science</span>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <TerminalProfile />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 3. Projects */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <FadeIn>
                        <SectionHeading>Selected Work</SectionHeading>
                    </FadeIn>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        <FadeIn delay={0.1}>
                            <ProjectCard
                                title="Lumina UI Kit"
                                desc="A lightweight React component library designed for rapid prototyping with accessibility in mind."
                                stack={['React', 'TypeScript', 'Storybook']}
                                link="#"
                            />
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <ProjectCard
                                title="Echo Note"
                                desc="AI-powered note-taking app that summarizes lectures and generates quizzes instantly."
                                stack={['Next.js', 'OpenAI', 'PostgreSQL']}
                                link="#"
                            />
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <ProjectCard
                                title="DevTrack"
                                desc="A minimalist CLI tool for developers to track coding hours and productivity metrics."
                                stack={['Rust', 'SQLite', 'CLI']}
                                link="#"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* 4. Contact */}
            <section style={{ padding: '8rem 0', textAlign: 'center' }}>
                <div className="container">
                    <FadeIn>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's Build Together</h2>
                        <p style={{ maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <a href="mailto:email@example.com" style={{
                            display: 'inline-block',
                            padding: '1.2rem 3rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: '#0d0d0f',
                            background: '#fff',
                            borderRadius: '50px',
                            boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                        }}>
                            Get In Touch
                        </a>
                    </FadeIn>
                </div>
            </section>

            <footer style={{ padding: '3rem', textAlign: 'center', color: '#52525b', fontSize: '0.9rem' }}>
                <p style={{ margin: 0 }}>© 2026 Portfolio. Built with React & Motion.</p>
            </footer>
        </div>
    );
};
