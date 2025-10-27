import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lecciones from "./pages/Lecciones";
import Lessons from "./components/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Community from "./pages/Community";
import Ranking from "./pages/Ranking";
import ClickTrainer from "./game/ClickTrainer";
import CaptchaTrainer from "./game/CaptchaTrainer";
import IconFinder from "./game/IconFinder";
import EmailTrainer from "./game/EmailTrainer";
import FontSizeControl from "./components/FontSizeControl";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lecciones" element={<Lecciones />} />
          <Route path="/lecciones/:nivel" element={<Lessons />} />
          <Route path="/leccion/:id" element={<LessonDetail />} />
          <Route path="/leccion/nivel-basico/click-trainer" element={<ClickTrainer />} />
          <Route path="/leccion/nivel-basico/captcha" element={<CaptchaTrainer />} />
          <Route path="/leccion/nivel-basico/icon-finder" element={<IconFinder />} />
          <Route path="/leccion/nivel-medio/email-trainer" element={<EmailTrainer />} />
          <Route path="/comunidad" element={<Community />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <FontSizeControl /> 
      <Footer />
    </div>
  );
}
