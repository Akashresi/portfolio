import { motion } from 'framer-motion';

// --- Reusable Components ---

const Section = ({ id, children, align = 'center' }) => {
    return (
        <section id={id} className="section" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
            <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start' }}>
                {children}
            </div>
        </section>
    );
};

const SectionTitle = ({ children }) => (
    <motion.h2
        className="glow-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
            fontSize: '3rem',
            marginBottom: '3rem',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            display: 'inline-block'
        }}
    >
        {children}
        <span style={{
            display: 'block',
            width: '50%',
            height: '4px',
            background: 'var(--neon-blue)',
            margin: '0.5rem auto 0',
            borderRadius: '2px'
        }} />
    </motion.h2>
);

const GlassCard = ({ children, className = '', delay = 0 }) => (
    <motion.div
        className={`glass-card ${className}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
        style={{ padding: '2.5rem', borderRadius: '16px', width: '100%', boxSizing: 'border-box' }}
    >
        {children}
    </motion.div>
);

const SkillTag = ({ name }) => (
    <span style={{
        padding: '0.6rem 1.2rem',
        borderRadius: '50px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: '500'
    }}>
        {name}
    </span>
);

const ProjectCard = ({ title, tech, desc, link, delay }) => (
    <GlassCard delay={delay} className="project-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--neon-blue)' }}>{title}</h3>
            <a href={link} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}>↗</a>
        </div>
        <p style={{ color: '#ccc', lineHeight: 1.6, marginBottom: '1.5rem' }}>{desc}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {tech.map((t, i) => <span key={i} style={{ fontSize: '0.8rem', color: 'var(--neon-green)', fontFamily: 'monospace' }}>#{t}</span>)}
        </div>
    </GlassCard>
);

// --- Main Interface ---

export const Interface = () => {
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>

            {/* 1. Hero Section */}
            <Section id="home" align="left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    style={{ maxWidth: '800px' }}
                >
                    <h3 style={{ color: 'var(--neon-green)', fontFamily: 'monospace', fontSize: '1.2rem', marginBottom: '1rem' }}>
                        &lt;user&gt; Welcome &lt;/user&gt;
                    </h3>
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
                        HELLO <br />
                        <span className="text-gradient">WORLD.</span>
                    </h1>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#aaa', margin: '2rem 0' }}>
                        I am a <span style={{ color: '#fff' }}>Computer Science Student</span> &<br /> Aspiring Software Engineer.
                    </h2>
                    <p style={{ maxWidth: '500px', lineHeight: 1.8, fontSize: '1.1rem', color: '#ccc', marginBottom: '2.5rem' }}>
                        Crafting scalable software and immersive digital experiences.
                        Focused on AI, Web Technologies, and clean code.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.1rem',
                            background: 'transparent',
                            border: '2px solid var(--neon-blue)',
                            color: 'var(--neon-blue)',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            letterSpacing: '1px'
                        }}
                    >
                        EXPLORE WORK
                    </motion.button>
                </motion.div>
            </Section>

            {/* 2. About Me */}
            <Section id="about" align="center">
                <SectionTitle>About Me</SectionTitle>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
                    <GlassCard delay={0.2}>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#ddd' }}>
                            I'm currently pursuing my degree in Computer Science. My passion lies in solving complex problems through elegant code.
                            I started my journey with simple scripts and have since fallen in love with full-stack development and artificial intelligence.
                        </p>
                    </GlassCard>
                    <GlassCard delay={0.4}>
                        <h3 style={{ color: 'var(--neon-purple)', marginTop: 0 }}>Education</h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>B.S. Computer Science</h4>
                            <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>University of Technology, 2023 - Present</p>
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 0.5rem 0' }}>High School</h4>
                            <p style={{ margin: 0, color: '#888', fontSize: '0.9rem' }}>Science Major, 2021 - 2023</p>
                        </div>
                    </GlassCard>
                </div>
            </Section>

            {/* 3. Skills & Stack */}
            <Section id="skills" align="center">
                <SectionTitle>Skills & Stack</SectionTitle>
                <div style={{ width: '100%', maxWidth: '800px' }}>

                    <GlassCard>
                        <div style={{ display: 'grid', gap: '3rem' }}>
                            <div>
                                <h3 style={{ color: '#fff', borderLeft: '4px solid var(--neon-blue)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>Languages</h3>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    {['JavaScript (ES6+)', 'Python', 'C++', 'Java', 'SQL', 'HTML/CSS'].map(s => <SkillTag key={s} name={s} />)}
                                </div>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', borderLeft: '4px solid var(--neon-purple)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>Frameworks & Libraries</h3>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    {['React.js', 'Next.js', 'Node.js', 'Three.js', 'Tailwind CSS', 'Framer Motion'].map(s => <SkillTag key={s} name={s} />)}
                                </div>
                            </div>

                            <div>
                                <h3 style={{ color: '#fff', borderLeft: '4px solid var(--neon-green)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>Tools</h3>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    {['Git & GitHub', 'VS Code', 'Figma', 'Postman', 'Vercel', 'Docker'].map(s => <SkillTag key={s} name={s} />)}
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Section>

            {/* 4. Projects */}
            <Section id="projects" align="center">
                <SectionTitle>Featured Projects</SectionTitle>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
                    <ProjectCard
                        title="AI Chatbot Assistant"
                        desc="A smart chatbot built with Python and TensorFlow that can answer query related to campus activities. Integrated with a Flask backend."
                        tech={['Python', 'NLP', 'Flask', 'React']}
                        link="#"
                        delay={0.1}
                    />
                    <ProjectCard
                        title="E-Commerce Dashboard"
                        desc="Full-stack admin dashboard for managing products and orders. Features real-time analytics charts and secure authentication."
                        tech={['MERN Stack', 'Chart.js', 'JWT']}
                        link="#"
                        delay={0.3}
                    />
                    <ProjectCard
                        title="Crypto Tracker"
                        desc="Real-time cryptocurrency price tracker using CoinGecko API. Features dark mode and historical price graphs."
                        tech={['React', 'Axios', 'Tailwind']}
                        link="#"
                        delay={0.5}
                    />
                </div>
            </Section>

            {/* 5. Contact */}
            <Section id="contact" align="center">
                <div style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
                    <SectionTitle>Get In Touch</SectionTitle>
                    <GlassCard>
                        <p style={{ color: '#ccc', marginBottom: '2rem' }}>
                            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input type="text" placeholder="Name" style={inputStyle} />
                                <input type="email" placeholder="Email" style={inputStyle} />
                            </div>
                            <input type="text" placeholder="Subject" style={inputStyle} />
                            <textarea placeholder="Message" rows={5} style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={submitButtonStyle}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </GlassCard>
                </div>
            </Section>

            {/* Footer */}
            <footer style={{ padding: '2rem', textAlign: 'center', color: '#666', fontSize: '0.9rem', borderTop: '1px solid #111' }}>
                <p>© 2026 AR Portfolio. Code by Me.</p>
            </footer>
        </div>
    );
};

// --- Styles ---
const inputStyle = {
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '1rem',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
};

const submitButtonStyle = {
    background: 'linear-gradient(135deg, var(--neon-blue) 0%, var(--neon-purple) 100%)',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(0, 243, 255, 0.3)'
};
