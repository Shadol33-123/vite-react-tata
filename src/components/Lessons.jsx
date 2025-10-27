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

  // Categorización de lecciones según nivel
  let categorias = [];

  if (nivel === "basico") {
    categorias = [
      {
        titulo: "Teclado y Mouse",
        items: data.filter(
          (item) => item.id === "click-trainer" || item.id === "captcha-practice"
        ),
      },
      {
        titulo: "Navegación",
        items: data.filter((item) => item.id === "icon-finder"),
      },
    ];
  } else if (nivel === "medio") {
    categorias = [
      {
        titulo: "Comunicación",
        items: data,
      },
    ];
  } else if (nivel === "avanzado") {
    categorias = [
      {
        titulo: "Seguridad y Finanzas",
        items: data,
      },
    ];
  }

  return (
    <section className="container-x py-16">
      <h2 className="section-title mb-8">
        {nivel === "basico" && "Nivel Básico"}
        {nivel === "medio" && "Nivel Medio"}
        {nivel === "avanzado" && "Nivel Avanzado"}
      </h2>

      {categorias.map((cat, index) => (
        <div key={index} className="mb-10">
          <h3 className="sub-title mb-4">{cat.titulo}</h3>
          {cat.items.length === 0 ? (
            <p className="text-gray-500">No hay lecciones en esta categoría.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <LessonCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
