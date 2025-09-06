import Hero from "../components/Hero";
import LessonsPreview from "../components/LessonsPreview";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <Hero />

      {/* SECCIÓN DE BENEFICIOS */}
      <section className="container-x py-16">
        <h2 className="section-title text-center">¿Por qué Ayuda Tata?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-3 mb-10">
          Ayuda Tata es una plataforma diseñada para enseñar tecnología de forma fácil, práctica y divertida.
          Nuestros cursos están pensados para adultos mayores y principiantes que quieren aprender sin enredos.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-5 text-center">
            <h3 className="sub-title">📱 Aprende paso a paso</h3>
            <p className="mt-2 text-gray-600">Lecciones sencillas, con ejemplos claros y guías visuales.</p>
          </div>
          <div className="card p-5 text-center">
            <h3 className="sub-title">🤝 Comunidad activa</h3>
            <p className="mt-2 text-gray-600">Comparte tus avances, preguntas y logros con otras personas.</p>
          </div>
          <div className="card p-5 text-center">
            <h3 className="sub-title">🏆 Mejora constante</h3>
            <p className="mt-2 text-gray-600">Supera desafíos, gana puntos y avanza en tu ranking personal.</p>
          </div>
        </div>
      </section>

      {/* LECCIONES DESTACADAS */}
      <section className="container-x py-16">
        <LessonsPreview />
      </section>

      {/* SECCIÓN DE ACCESOS RÁPIDOS */}
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 flex flex-col items-center text-center">
            <h3 className="sub-title mb-3">🏆 Ranking semanal</h3>
            <p className="text-gray-600 mb-4">Ve tu progreso y compáralo con otros estudiantes.</p>
            <Link to="/ranking" className="btn btn-primary">Ir al Ranking</Link>
          </div>
          <div className="card p-6 flex flex-col items-center text-center">
            <h3 className="sub-title mb-3">💬 Comunidad</h3>
            <p className="text-gray-600 mb-4">Únete a la comunidad, comparte dudas y celebra tus logros.</p>
            <Link to="/comunidad" className="btn btn-primary">Ir a Comunidad</Link>
          </div>
        </div>
      </section>
    </div>
  );
}