# 3D Cyber Portfolio

A modern, immersive 3D portfolio website built with React, Three.js, and React Three Fiber.

## Features

- **3D Interactive World**: Scroll to travel through different sections of the portfolio.
- **Glassmorphism UI**: Stylish HTML overlay for content.
- **Responsive Design**: Works on desktop and mobile (canvas scales).
- **Sections**:
  - Hero (3D Avatar & Code Snippets)
  - About (Holographic Lab)
  - Skills (Floating Orbs)
  - Projects (Interactive Cards)
  - Achievements (Trophies)
  - Contact (Futuristic Terminal)

## Tech Stack

- React
- Vite
- @react-three/fiber (R3F)
- @react-three/drei
- Framer Motion

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173

## Customization

- **3D Avatar**: Replace the Capsule mesh in `src/components/sections/Hero3D.jsx` with a `.glb` model using `useGLTF`.
- **Content**: Update text in `src/components/Interface.jsx`.
- **Colors**: Modified in individual 3D section files or `index.css` for the overlay.
