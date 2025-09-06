import { Link } from 'react-router-dom'
import lessons from '../data/lessons'
import { isComplete } from '../utils/storage'

export default function LessonsPreview() {
  const top = lessons.slice(0,3)
  return (
    <div>
      <h2 className="section-title mb-6">Lecciones recomendadas</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {top.map(item => (
          <article key={item.id} className="card p-5 flex flex-col hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <h3 className="sub-title">{item.title}</h3>
              <span className="pill">{item.level}</span>
            </div>
            <p className="mt-2 text-gray-600">{item.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <Link to={`/leccion/${item.id}`} className="btn btn-primary">Abrir</Link>
              {isComplete(item.id) ? (
                <span className="text-green-600 font-semibold">Completado ✔</span>
              ) : (
                <span className="text-gray-400">0% progreso</span>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/lecciones" className="btn btn-ghost">Ver todas</Link>
      </div>
    </div>
  )
}
