import { motion } from 'framer-motion';

const Section = (props) => {
    const { align = 'left', children } = props;

    return (
        <section
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'center',
                padding: '0 5%',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{ pointerEvents: 'auto', maxWidth: '600px', width: '100%' }}
            >
                {children}
            </div>
        </section>
    );
};

const GlassCard = ({ children, className = '' }) => (
    <div
        className={`glass-card ${className}`}
        style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
    >
        {children}
    </div>
);

export const Interface = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>

            {/* Hero Section */}
            <Section align="left">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: 0, background: 'linear-gradient(to right, #00d2ff, #3a7bd5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        HELLO WORLD
                    </h1>
                    <h2 style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#fff' }}>I'm a CS Student</h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Aspiring Software Engineer | Creative Developer</p>
                </motion.div>
            </Section>

            {/* About Section */}
            <Section align="right">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <GlassCard>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#00d2ff' }}>About Me</h2>
                        <p style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>
                            I am a passionate Computer Science student exploring the depths of AI, Web Development, and Cloud Computing.
                            My journey is fueled by coffee and code, transforming abstract algorithms into immersive digital experiences.
                        </p>
                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                            <span className="badge">Python</span>
                            <span className="badge">JavaScript</span>
                            <span className="badge">React</span>
                        </div>
                    </GlassCard>
                </motion.div>
            </Section>

            {/* Skills Section */}
            <Section align="left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <GlassCard>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#9d50bb' }}>Skills & Stack</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <h3 style={{ borderBottom: '2px solid #00d2ff', display: 'inline-block' }}>Languages</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>Javascript / TypeScript</li>
                                    <li>Python / C++</li>
                                    <li>SQL / NoSQL</li>
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ borderBottom: '2px solid #9d50bb', display: 'inline-block' }}>Frameworks</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li>React / Next.js</li>
                                    <li>Three.js / R3F</li>
                                    <li>Node.js / Express</li>
                                </ul>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </Section>

            {/* Projects Section */}
            <Section align="right">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 style={{ fontSize: '3rem', color: '#fff', textAlign: 'right', marginBottom: '2rem' }}>Featured Projects</h2>
                    {/* Projects are mostly visualized in 3D, here we instruct user */}
                    <p style={{ textAlign: 'right', opacity: 0.7 }}>Scroll to explore the galaxy of my work.</p>
                </motion.div>
            </Section>

            {/* Achievements / Extra */}
            <Section align="center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <GlassCard style={{ textAlign: 'center' }}>
                        <h2 style={{ color: '#ffd700' }}>Achievements</h2>
                        <p>🏆 Hackathon Winner 2024</p>
                        <p>📜 AWS Certified Cloud Practitioner</p>
                        <p>⭐ 500+ Stars on GitHub</p>
                    </GlassCard>
                </motion.div>
            </Section>

            {/* Contact Section */}
            <Section align="center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <GlassCard style={{ maxWidth: '500px', width: '100%' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center', color: '#00ff87' }}>Get In Touch</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Name" style={inputStyle} />
                            <input type="email" placeholder="Email" style={inputStyle} />
                            <textarea placeholder="Message" rows={4} style={inputStyle}></textarea>
                            <button style={buttonStyle}>Send Message</button>
                        </form>
                    </GlassCard>
                </motion.div>
            </Section>
        </div>
    );
};

const inputStyle = {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid #333',
    padding: '1rem',
    color: '#fff',
    borderRadius: '8px',
    outline: 'none',
    fontFamily: 'inherit'
};

const buttonStyle = {
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)',
    border: 'none',
    padding: '1rem',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    textTransform: 'uppercase'
};
