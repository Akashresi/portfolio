import { Interface } from './components/Interface'
import './App.css'

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      {/* Removed heavy glow blobs for a calmer look */}
      <Interface />
    </>
  )
}

export default App
