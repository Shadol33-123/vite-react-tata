import { useState } from "react";

export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, author: "Marta", text: "¡Pude hacer mi primera videollamada con mi nieta!", likes: 12 },
    { id: 2, author: "Pedro", text: "Al fin aprendí a mandar audios sin equivocarme 😅", likes: 7 },
    { id: 3, author: "Rosa", text: "Me encantó la clase de seguridad, ahora me siento más tranquila.", likes: 15 },
  ]);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [helpers] = useState(["Ana López", "Carlos Pérez", "María González"]);

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage = { id: Date.now(), text: input, sender: "Tú" };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <section className="px-4 sm:px-6 py-12 md:py-16">
      <div className="container card p-6 md:p-8 shadow-lg rounded-2xl bg-white">
        {/* Encabezado */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Comunidad de apoyo</h2>
          <span className="pill bg-green-100 text-green-800 px-3 py-1 rounded-lg">
            Moderada
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Publicaciones */}
          <div className="md:col-span-2 space-y-5">
            {posts.map((p) => (
              <article key={p.id} className="card p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-brand">{p.author}</h3>
                  <span className="pill bg-amber-100 text-amber-800">+{p.likes} 👍</span>
                </div>
                <p className="mt-2 text-gray-700">{p.text}</p>
                <div className="mt-4 flex gap-2">
                  <button className="btn btn-ghost">Comentar</button>
                  <button
                    onClick={() => handleLike(p.id)}
                    className="btn btn-primary"
                  >
                    Me gusta
                  </button>
                </div>
              </article>
            ))}

            {/* Chat */}
            <div className="card p-4 mt-6 shadow-inner border">
              <h3 className="sub-title mb-3">Chat de apoyo</h3>
              <div className="h-48 overflow-y-auto space-y-3 bg-gray-50 rounded-lg p-3 border">
                {messages.length === 0 ? (
                  <p className="text-gray-500 text-center">No hay mensajes aún. ¡Sé el primero en saludar! 👋</p>
                ) : (
                  messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-3 rounded-lg max-w-[80%] ${
                        msg.sender === "Tú"
                          ? "bg-amber-100 ml-auto text-right"
                          : "bg-gray-200"
                      }`}
                    >
                      <p className="text-sm font-semibold">{msg.sender}</p>
                      <p>{msg.text}</p>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 rounded-xl px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Barra lateral */}
          <aside className="space-y-4">
            {/* Voluntarios */}
            <div className="card p-4">
              <h4 className="font-bold text-[#800000] mb-2">Voluntarios conectados</h4>
              <ul className="space-y-1 text-gray-700">
                {helpers.map((helper, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    🟢 {helper}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reglas */}
            <div className="card p-4">
              <h4 className="font-bold text-[#800000] mb-2">Reglas de convivencia</h4>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                <li>Respeto primero.</li>
                <li>No compartas contraseñas.</li>
                <li>Reporta mensajes sospechosos.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
