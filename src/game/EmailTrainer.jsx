import { useState } from "react";

export default function EmailTrainer() {
  const [phrase, setPhrase] = useState("mi correo es ejemplo@gmail.com");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === phrase) {
      setMessage("✅ ¡Perfecto! Has escrito el correo correctamente.");
      setScore(score + 1);
      // Nueva frase aleatoria
      const phrases = [
        "mi correo es ejemplo@gmail.com",
        "mi correo es maria123@hotmail.com",
        "mi correo es usuario@gmail.com",
      ];
      setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    } else {
      setMessage("❌ Revisa mayúsculas, espacios o el símbolo @");
    }
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">⌨️ Escribe tu correo</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Copia exactamente la frase que ves a continuación:
        </p>

        <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 text-xl font-bold mb-4">
          {phrase}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe aquí..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-400 outline-none"
          />
          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg font-semibold"
          >
            Verificar
          </button>
        </form>

        {message && <p className="mt-4 text-lg font-semibold text-gray-700">{message}</p>}
        <p className="text-gray-600 mt-3">Puntaje: <b>{score}</b></p>
      </div>
    </div>
  );
}
