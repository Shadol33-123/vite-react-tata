import { Link } from "react-router-dom";

export default function Lecciones() {
  const niveles = [
    {
      id: "basico",
      title: "Nivel Básico",
      desc: "Aprende los conceptos esenciales y juega para practicar.",
      level: "Fácil",
    },
    {
      id: "medio",
      title: "Nivel Medio",
      desc: "Mejora tus habilidades con WhatsApp y videollamadas.",
      level: "Medio",
    },
    {
      id: "avanzado",
      title: "Nivel Avanzado",
      desc: "Domina la seguridad y los pagos digitales.",
      level: "Difícil",
    },
  ];

  return (
    <section className="container-x py-16">
      <h1 className="section-title mb-6">Lecciones por Nivel</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {niveles.map((nivel) => (
          <article key={nivel.id} className="card p-5 hover:shadow-lift transition">
            <div className="flex items-center justify-between">
              <h3 className="sub-title">{nivel.title}</h3>
              <span className="pill">{nivel.level}</span>
            </div>
            <p className="mt-2 text-gray-600">{nivel.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <Link to={`/lecciones/${nivel.id}`} className="btn btn-primary">
                Abrir
              </Link>
              <span className="text-gray-400">0% progreso</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
