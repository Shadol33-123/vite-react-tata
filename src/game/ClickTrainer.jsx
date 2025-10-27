import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ClickTrainer() {
  const [score, setScore] = useState(0);
  const [precision, setPrecision] = useState(100);
  const [time, setTime] = useState(30);
  const [color, setColor] = useState("red");
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [clicks, setClicks] = useState(0);
  const [hits, setHits] = useState(0);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [running, setRunning] = useState(true);
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();
  const areaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (running && time > 0) {
        setTime((t) => t - 1);
      } else if (time <= 0 && running) {
        setRunning(false);
        setFinished(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [running, time]);

  const randomPos = () => ({
    x: Math.random() * 80 + 10, // margen seguro
    y: Math.random() * 70 + 15,
  });

  const randomColor = () => (Math.random() > 0.5 ? "red" : "blue");

  const handleClick = (e) => {
    if (!running) return;
    setClicks((c) => c + 1);

    const isLeft = e.button === 0;
    const isRight = e.button === 2;
    const correct =
      (color === "blue" && isLeft) || (color === "red" && isRight);

    if (correct) {
      setScore((s) => s + 1);
      setHits((h) => h + 1);
      setMessage("✅ ¡Bien hecho!");
      setMessageColor("text-green-600");
      setColor(randomColor());
      setPos(randomPos());
    } else {
      setMessage("❌ Error, intenta de nuevo");
      setMessageColor("text-red-600");
    }

    setPrecision(((hits / (clicks + 1)) * 100).toFixed(0));
  };

  const handleContextMenu = (e) => e.preventDefault();

  const restart = () => {
    setScore(0);
    setPrecision(100);
    setTime(30);
    setClicks(0);
    setHits(0);
    setRunning(true);
    setFinished(false);
    setMessage("");
    setColor(randomColor());
    setPos({ x: 50, y: 50 });
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-gray-50 overflow-hidden"
      onContextMenu={handleContextMenu}
    >
      {/* Header */}
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold text-gray-800">
          Click Trainer: Red & Blue
        </h1>
        <p className="text-gray-600 mt-1">
          🔵 <b>AZUL = Click Izquierdo</b> | 🔴 <b>ROJO = Click Derecho</b>
        </p>
        <p className="font-semibold mt-1">
          Tiempo restante:{" "}
          <span className="text-red-500 font-bold">{time}s</span>
        </p>
      </div>

      {/* Área de juego fullscreen */}
      <div
        ref={areaRef}
        className="relative bg-gray-100 rounded-xl border border-gray-200"
        style={{
          width: "85%",
          height: "65vh",
          maxWidth: "1200px",
        }}
        onMouseDown={handleClick}
      >
        {running && (
          <div
            style={{
              position: "absolute",
              top: `${pos.y}%`,
              left: `${pos.x}%`,
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: color,
              cursor: "pointer",
              boxShadow: "0 0 12px rgba(0,0,0,0.2)",
              transition: "all 0.2s ease",
            }}
          ></div>
        )}
      </div>

      {/* Mensajes dinámicos */}
      {message && (
        <p className={`mt-3 text-lg font-semibold ${messageColor}`}>
          {message}
        </p>
      )}

      {/* Puntajes */}
      <div className="mt-4 text-gray-700 font-medium">
        <p>
          Puntos: <b>{score}</b> / 15
        </p>
        <p>Precisión: {precision}%</p>
      </div>

      {/* Final del juego */}
      {finished && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-green-600 font-semibold">
            ¡Tiempo terminado! 🎉
          </p>
          <button
            onClick={restart}
            className="btn btn-primary text-lg w-full max-w-xs"
          >
            Reiniciar
          </button>
          <button
            onClick={() => navigate("/leccion/nivel-basico/captcha")}
            disabled={score < 15}
            className={`btn btn-primary w-full max-w-xs text-lg transition-all ${
              score < 15 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {score < 15
              ? "Alcanza 15 puntos para continuar"
              : "Siguiente"}
          </button>
        </div>
      )}
    </div>
  );
}
