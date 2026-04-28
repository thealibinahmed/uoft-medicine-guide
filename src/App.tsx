import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import PostAcceptance from './pages/PostAcceptance'
import Housing from './pages/Housing'
import Finances from './pages/Finances'
import Handbook from './pages/Handbook'

function App() {
  return (
    <BrowserRouter basename="/uoft-medicine-guide/">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/post-acceptance" element={<PostAcceptance />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/handbook" element={<Handbook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
