import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// --- Shared Components ---

const RevealText = ({ children, delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
            viewport={{ once: true }}
            style={{ display: 'inline-block' }}
        >
            {children}
        </motion.span>
    );
};

const MagneticButton = ({ children, style, href }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3); // Magnetic pull strength
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                x: springX,
                y: springY,
                display: 'inline-block',
                textDecoration: 'none',
                cursor: 'none' // Handled by CustomCursor
            }}
            data-hover // Signal for cursor to grow
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.a>
    );
};

// --- Sections ---

const Hero = () => {
    return (
        <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
            <motion.div>
                <p style={{ color: '#00f0ff', fontFamily: 'monospace', marginBottom: '1rem' }}>
                    <RevealText delay={0.1}>:: INITIALIZING SYSTEM...</RevealText>
                </p>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', margin: 0, lineHeight: 0.9, fontWeight: 800 }}>
                    <RevealText delay={0.2}>HELLO</RevealText> <br />
                    <span style={{ color: '#ffffff' }}><RevealText delay={0.3}>WORLD.</RevealText></span>
                </h1>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '60px', background: '#0aff68' }}></div>
                    <div>
                        <p style={{ margin: 0, fontSize: '1.2rem', color: '#94a3b8' }}>
                            <RevealText delay={0.5}>CS Student & Creative Developer</RevealText>
                        </p>
                        <p style={{ margin: 0, fontSize: '1rem', color: '#64748b' }}>
                            <RevealText delay={0.6}>Specializing in digital experiences & AI</RevealText>
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '3rem', left: '10%', fontFamily: 'monospace', color: '#444' }}
            >
                SCROLL TO DECRYPT [ ↓ ]
            </motion.div>
        </section>
    );
};

const StickyTerminal = () => {
    return (
        <section style={{ padding: '5rem 10%', position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left: Text */}
                <div>
                    <h2 style={{ fontSize: '3rem', margin: '0 0 2rem 0' }}>
                        <span style={{ color: '#0aff68' }}>//</span> ABOUT_ME
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                        I don't just write code; I architect digital realities. My background in Computer Science gives me the structure, but my passion for design breaks the boundaries.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.8, marginTop: '1.5rem' }}>
                        Currently exploring the intersection of <span style={{ color: '#fff' }}>Neural Networks</span> and <span style={{ color: '#fff' }}>Web Aesthetics</span>.
                    </p>
                </div>

                {/* Right: Terminal Visual */}
                <motion.div
                    className="glass-panel"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    style={{ padding: '1.5rem', minHeight: '300px', fontFamily: 'monospace', fontSize: '0.9rem' }}
                >
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', opacity: 0.5 }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
                    </div>
                    <div style={{ color: '#00f0ff' }}>➜  ~  whoami</div>
                    <div style={{ color: '#e0e6ed', marginBottom: '1rem' }}>"Computer Science Fresher"</div>

                    <div style={{ color: '#00f0ff' }}>➜  ~  cat skills.json</div>
                    <div style={{ color: '#a5b3ce' }}>
                        {`{
  "languages": ["JS", "Python", "C++"],
  "frontend": ["React", "Three.js", "Motion"],
  "backend": ["Node", "SQL", "Cloud"],
  "status": "Ready to Work"
}`}
                    </div>
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        style={{ width: '10px', height: '18px', background: '#0aff68', marginTop: '5px' }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

const ProjectItem = ({ title, category, year }) => {
    return (
        <motion.div
            className="project-item"
            initial={{ opacity: 0.5, borderBottom: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ opacity: 1, borderBottom: '1px solid #00f0ff', paddingLeft: '20px' }}
            transition={{ duration: 0.3 }}
            style={{
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                cursor: 'none',
                position: 'relative'
            }}
            data-hover
        >
            <div>
                <h3 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 300 }}>{title}</h3>
                <span style={{ fontFamily: 'monospace', color: '#00f0ff', fontSize: '0.9rem' }}>{category}</span>
            </div>
            <span style={{ fontSize: '1.2rem', color: '#64748b' }}>{year}</span>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section style={{ padding: '5rem 10%' }}>
            <h2 style={{ fontSize: '1rem', fontFamily: 'monospace', color: '#64748b', marginBottom: '3rem' }}>
                SELECTED_WORKS (03)
            </h2>
            <div>
                <ProjectItem title="Neural Chat" category="AI / PYTHON / NLP" year="2024" />
                <ProjectItem title="Cosmic Comm" category="REACT / THREE.JS / WEBGL" year="2023" />
                <ProjectItem title="Data Viz Core" category="D3.JS / ANALYTICS" year="2023" />
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '1rem' }}>LET'S COLLABORATE</h2>
            <p style={{ maxWidth: '400px', color: '#94a3b8', marginBottom: '3rem' }}>
                Ready to turn impossible ideas into functional code? I'm available for internships and freelance.
            </p>
            <MagneticButton
                href="mailto:hello@example.com"
                style={{
                    padding: '1.5rem 3rem',
                    borderRadius: '50px',
                    background: '#fff',
                    color: '#000',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    border: 'none',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                INITIATE CONTACT
            </MagneticButton>
        </section>
    );
};

export const Interface = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div style={{ position: 'relative', zIndex: 10 }}>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: '#00f0ff',
                    transformOrigin: '0%',
                    scaleX,
                    zIndex: 100
                }}
            />

            <Hero />
            <StickyTerminal />
            <Projects />
            <Contact />

            {/* Footer */}
            <footer style={{ padding: '2rem', textAlign: 'center', opacity: 0.3, fontFamily: 'monospace' }}>
                <p>SYSTEM.EXIT(0)</p>
            </footer>
        </div>
    );
};
