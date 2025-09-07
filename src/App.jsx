import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LessonsPage from "./pages/LessonsPage";
import LessonDetail from "./pages/LessonDetail";
import Community from "./pages/Community";
import Ranking from "./pages/Ranking";

// Importar las nuevas páginas
import NivelBasico from "./pages/NivelBasico";
import NivelMedio from "./pages/NivelMedio";
import NivelAvanzado from "./pages/NivelAvanzado";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lecciones" element={<LessonsPage />} />

          {/* Rutas para las nuevas lecciones */}
          <Route path="/leccion/Nivel-Básico" element={<NivelBasico />} />
          <Route path="/leccion/Nivel-Medio" element={<NivelMedio />} />
          <Route path="/leccion/Nivel-Avanzado" element={<NivelAvanzado />} />

          {/* Rutas dinámicas para otras lecciones */}
          <Route path="/leccion/:id" element={<LessonDetail />} />

          <Route path="/comunidad" element={<Community />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
