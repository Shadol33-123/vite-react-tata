const events = [
  { id: 1, date: "Lun 8", time: "10:00", title: "WhatsApp para empezar", place: "Sede Centro" },
  { id: 2, date: "Mié 10", time: "15:00", title: "Videollamadas con familia", place: "Sede Norte" },
  { id: 3, date: "Vie 12", time: "11:00", title: "Cuidar tus contraseñas", place: "Online" },
]

export default function Agenda() {
  return (
    <div>
      <h2 className="section-title mb-6">Agenda de clases</h2>
      <ul className="grid md:grid-cols-3 gap-6">
        {events.map(ev => (
          <li key={ev.id} className="card p-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 grid place-items-center text-brand font-extrabold">
                {ev.date}
              </div>
              <div>
                <p className="text-sm text-gray-500">{ev.time} · {ev.place}</p>
                <p className="font-semibold">{ev.title}</p>
              </div>
            </div>
            <a href="#" className="btn btn-ghost mt-4">Inscribirme</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
