import { Interface } from './components/Interface'
import { Background3D } from './components/Background3D'
import './App.css'

function App() {
  return (
    <>
      {/* 3D Background Layer */}
      <Background3D />

      {/* Noise Overlay (Texture) */}
      <div className="noise-overlay"></div>

      {/* Main Content */}
      <Interface />
    </>
  )
}

export default App
