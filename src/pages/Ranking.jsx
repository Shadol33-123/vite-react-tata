const users = [
  { id: 1, name: "Ana", points: 1200, level: "Intermedio" },
  { id: 2, name: "Luis", points: 980, level: "Básico" },
  { id: 3, name: "Sofía", points: 905, level: "Básico" },
  { id: 4, name: "Carlos", points: 870, level: "Básico" },
]

export default function Ranking() {
  return (
    <section className="container-x py-10">
      <h1 className="section-title mb-6">Ranking semanal</h1>
      <div className="card overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-amber-50">
            <tr>
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Nombre</th>
              <th className="py-3 px-4">Nivel</th>
              <th className="py-3 px-4">Puntos</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={u.id} className="border-t hover:bg-amber-50/40">
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4 font-semibold">{u.name}</td>
                <td className="py-3 px-4">{u.level}</td>
                <td className="py-3 px-4">{u.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
