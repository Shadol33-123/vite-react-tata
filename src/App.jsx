import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LessonsPage from './pages/LessonsPage'
import LessonDetail from './pages/LessonDetail'
import Community from './pages/Community'
import Ranking from './pages/Ranking'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lecciones" element={<LessonsPage />} />
          <Route path="/leccion/:id" element={<LessonDetail />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
