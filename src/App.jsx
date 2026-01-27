import { Interface } from './components/Interface'
import { CustomCursor } from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay"></div>
      <div className="glow-blob" style={{ top: '10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,0,0,0) 70%)' }}></div>
      <div className="glow-blob" style={{ top: '60%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(112,0,255,0.1) 0%, rgba(0,0,0,0) 70%)', animationDelay: '-10s' }}></div>

      <Interface />
    </>
  )
}

export default App
