import { useParams, Link } from 'react-router-dom'
import lessons from '../data/lessons'
import { isComplete, toggleComplete } from '../utils/storage'
import { useMemo, useState } from 'react'

export default function LessonDetail() {
  const { id } = useParams()
  const lesson = useMemo(() => lessons.find(l => l.id === id), [id])
  const [completed, setCompleted] = useState(isComplete(id))

  if (!lesson) {
    return (
      <section className="container-x py-10">
        <h1 className="section-title mb-4">Lección no encontrada</h1>
        <Link to="/lecciones" className="btn btn-primary">Volver a lecciones</Link>
      </section>
    )
  }

  const handleToggle = () => setCompleted(toggleComplete(lesson.id))

  return (
    <section className="container-x py-10">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h1 className="section-title">{lesson.title}</h1>
        <span className="pill">{lesson.level}</span>
      </div>

      <p className="mt-2 text-gray-600">{lesson.desc}</p>

      {lesson.videoUrl && (
        <div className="mt-6 aspect-video rounded-3xl overflow-hidden shadow-soft">
          <iframe
            className="w-full h-full"
            src={lesson.videoUrl}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <ol className="mt-6 space-y-3 list-decimal list-inside">
        {lesson.content.map((step, idx) => (
          <li key={idx} className="card p-4">{step}</li>
        ))}
      </ol>

      <div className="mt-6 flex gap-3">
        <button onClick={handleToggle} className="btn btn-primary">
          {completed ? 'Marcar como pendiente' : 'Marcar como completada'}
        </button>
        <Link to="/lecciones" className="btn btn-ghost">Volver</Link>
      </div>
    </section>
  )
}
