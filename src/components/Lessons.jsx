import { useParams } from "react-router-dom";
import lessons from "../data/lessons";
import { Link } from "react-router-dom";

function LessonCard({ item }) {
  return (
    <article className="card p-5 flex flex-col hover:-translate-y-0.5 transition">
      <div className="flex items-center justify-between">
        <h3 className="sub-title">{item.title}</h3>
        <span className="pill">{item.level}</span>
      </div>
      <p className="mt-2 text-gray-600">{item.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/leccion/${item.id}`} className="btn btn-primary">
          Iniciar
        </Link>
        {item.done ? (
          <span className="text-green-600 font-semibold">Completado ✔</span>
        ) : (
          <span className="text-gray-400">0% progreso</span>
        )}
      </div>
    </article>
  );
}

export default function Lessons() {
  const { nivel } = useParams();
  const data = lessons[nivel] || [];

  return (
    <section className="container-x py-16">
      <h2 className="section-title mb-6">
        {nivel === "basico" && "Nivel Básico"}
        {nivel === "medio" && "Nivel Medio"}
        {nivel === "avanzado" && "Nivel Avanzado"}
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500">No hay lecciones disponibles para este nivel.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <LessonCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
