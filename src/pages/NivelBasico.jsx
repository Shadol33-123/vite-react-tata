import { useState, useEffect } from "react";

export default function NivelBasico() {
  const [circle, setCircle] = useState(generateCircle());
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const [correctClicks, setCorrectClicks] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  // Generar un nuevo círculo en posición aleatoria
  function generateCircle() {
    const colors = ["red", "blue"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.floor(Math.random() * 80) + 10;
    const y = Math.floor(Math.random() * 60) + 20;
    return { color, x, y };
  }

  // Manejar clics en los círculos
  const handleClick = (e, expectedColor) => {
    e.preventDefault();
    if (gameOver) return;

    setTotalClicks(prev => prev + 1);

    const correctClick =
      (expectedColor === "blue" && e.type === "click") ||
      (expectedColor === "red" && e.type === "contextmenu");

    if (correctClick) {
      setScore(prev => prev + 10);
      setCombo(prev => prev + 1);
      setCorrectClicks(prev => prev + 1);
      setFeedback("¡Perfecto!");
      setCircle(generateCircle());
    } else {
      setCombo(0);
      setFeedback("¡Ups! Intenta de nuevo…");
    }

    setTimeout(() => setFeedback(""), 700);
  };

  // Prevenir menú clic derecho
  useEffect(() => {
    const preventContext = e => e.preventDefault();
    window.addEventListener("contextmenu", preventContext);
    return () => window.removeEventListener("contextmenu", preventContext);
  }, []);

  // Temporizador
  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Precisión
  const accuracy = totalClicks > 0 ? ((correctClicks / totalClicks) * 100).toFixed(1) : 0;

  // Reiniciar el juego
  const restartGame = () => {
    setCircle(generateCircle());
    setScore(0);
    setCombo(0);
    setTotalClicks(0);
    setCorrectClicks(0);
    setFeedback("");
    setTimeLeft(60);
    setGameOver(false);
  };

  return (
    <section className="container-x py-8 min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Título y leyenda */}
      <h1 className="section-title text-red-500">Click Trainer: Red & Blue</h1>
      <p className="mt-1 text-gray-700 text-center font-medium">
        🎯 ROJO = <b>Click Derecho</b> | 🔵 AZUL = <b>Click Izquierdo</b>
      </p>

      {/* Marcadores */}
      <div className="flex flex-wrap justify-center gap-8 mt-4 text-lg font-semibold">
        <div className="text-blue-600">Puntos: {score}</div>
        <div className="text-green-600">Combo: {combo}</div>
        <div className="text-purple-600">Precisión: {accuracy}%</div>
        <div className="text-red-600">⏳ Tiempo: {timeLeft}s</div>
      </div>

      {/* Zona de juego */}
      <div className="relative w-full max-w-3xl h-[500px] bg-white shadow-lg rounded-lg mt-6 overflow-hidden flex items-center justify-center">
        {/* Feedback flotante */}
        {feedback && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 px-4 py-2 rounded-lg text-white font-bold text-lg shadow-lg animate-pulse">
            {feedback}
          </div>
        )}

        {/* Círculo interactivo */}
        {!gameOver && (
          <div
            onClick={(e) => handleClick(e, circle.color)}
            onContextMenu={(e) => handleClick(e, circle.color)}
            className="absolute rounded-full cursor-pointer shadow-lg transition-all duration-200"
            style={{
              backgroundColor: circle.color,
              width: "70px",
              height: "70px",
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
          ></div>
        )}

        {/* Pantalla de fin de juego */}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 rounded-lg">
            <h2 className="text-3xl font-bold text-white">¡Tiempo agotado!</h2>
            <p className="text-white mt-2 text-lg">Puntos finales: {score}</p>
            <button
              onClick={restartGame}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition"
            >
              Reiniciar Juego
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
