const data = [
  { id: 1, title: "WhatsApp básico", level: "Fácil", desc: "Enviar mensajes, notas de voz y fotos.", done: false },
  { id: 2, title: "Videollamadas", level: "Fácil", desc: "Llamadas por WhatsApp y Zoom.", done: true },
  { id: 3, title: "Seguridad", level: "Medio", desc: "Detectar estafas y proteger tus cuentas.", done: false },
  { id: 4, title: "Pagos digitales", level: "Medio", desc: "Transferencias y pagos sin filas.", done: false },
]

function LessonCard({ item }) {
  return (
    <article className="card p-5 flex flex-col hover:-translate-y-0.5">
      <div className="flex items-center justify-between">
        <h3 className="sub-title">{item.title}</h3>
        <span className="pill">{item.level}</span>
      </div>
      <p className="mt-2 text-gray-600">{item.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <a href="#" className="btn btn-primary">Iniciar</a>
        {item.done ? (
          <span className="text-green-600 font-semibold">Completado ✔</span>
        ) : (
          <span className="text-gray-400">0% progreso</span>
        )}
      </div>
    </article>
  )
}

export default function Lessons() {
  return (
    <div>
      <h2 className="section-title mb-6">Lecciones recomendadas</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(item => <LessonCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}
