const posts = [
  { id: 1, author: "Marta", text: "¡Pude hacer mi primera videollamada con mi nieta!", likes: 12 },
  { id: 2, author: "Pedro", text: "Al fin aprendí a mandar audios sin equivocarme 😅", likes: 7 },
  { id: 3, author: "Rosa", text: "Me encantó la clase de seguridad, ahora me siento más tranquila.", likes: 15 },
]

export default function Community() {
  return (
    <section className="container-x py-10">
      <h1 className="section-title mb-6">Comunidad</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.id} className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-brand">{p.author}</h3>
              <span className="pill">+{p.likes} 👍</span>
            </div>
            <p className="mt-2 text-gray-700">{p.text}</p>
            <div className="mt-4 flex gap-2">
              <button className="btn btn-ghost">Comentar</button>
              <button className="btn btn-primary">Me gusta</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
