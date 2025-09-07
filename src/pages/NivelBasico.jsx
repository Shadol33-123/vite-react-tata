import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function NivelBasico() {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [totalClicks, setTotalClicks] = useState(0);
  const [targetColor, setTargetColor] = useState(null);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [feedback, setFeedback] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Generar círculo nuevo
  const generateTarget = useCallback(() => {
    const colors = ["red", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setPosition({
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
    });
  }, []);

  // Iniciar juego
  const startGame = useCallback(() => {
    setScore(0);
    setCombo(0);
    setAccuracy(100);
    setTotalClicks(0);
    setGameOver(false);
    setTimeLeft(30);
    generateTarget();
    startTimer();
  }, [generateTarget]);

  // Control del temporizador
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Ejecutar juego al cargar
  useEffect(() => {
    startGame();
  }, [startGame]);

  // Manejo de clics
  const handleClick = (e) => {
    e.preventDefault();
    if (gameOver) return;

    setTotalClicks((prev) => prev + 1);
    const correct =
      (e.type === "click" && targetColor === "blue") ||
      (e.type === "contextmenu" && targetColor === "red");

    if (correct) {
      setScore((prev) => prev + 1);
      setCombo((prev) => prev + 1);
      setFeedback("Perfect!");
      setTimeout(() => setFeedback(""), 500);
      generateTarget();
    } else {
      setCombo(0);
      setFeedback("Intenta de nuevo");
      setTimeout(() => setFeedback(""), 700);
    }

    setAccuracy(((score + 1) / (totalClicks + 1) * 100).toFixed(1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Click Trainer: Red & Blue
        </h1>
        <p className="text-gray-600 mb-4">
          🎯 ROJO = <b>Click Derecho</b> | 🔵 AZUL = <b>Click Izquierdo</b>
        </p>
        <p className="text-lg font-semibold mb-4">
          Tiempo restante:{" "}
          <span className="text-red-500 font-bold">{timeLeft}s</span>
        </p>

        {!gameOver ? (
          <div className="relative w-full h-[400px] border rounded-lg bg-gray-100 flex items-center justify-center">
            <div
              onClick={handleClick}
              onContextMenu={handleClick}
              style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                width: "60px",
                height: "60px",
                backgroundColor: targetColor,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
            {feedback && (
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-bold text-green-600">
                {feedback}
              </p>
            )}
          </div>
        ) : (
          <p className="mt-6 text-lg text-gray-600">
            🎮 Juego terminado. Tu puntaje:{" "}
            <span className="text-blue-600 font-bold">{score}</span>
          </p>
        )}

        <div className="mt-6 text-lg">
          <p>Puntos: <span className="font-bold">{score}</span> / 15</p>
          <p>Precisión: <span className="font-bold">{accuracy}%</span></p>
          <p>Combo: <span className="font-bold">{combo}</span></p>
        </div>

        {/* Botón para pasar al CAPTCHA */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/leccion/Nivel-Básico/captcha")}
            disabled={score < 15}
            className={`btn btn-primary w-full max-w-xs text-lg transition-all ${
              score < 15 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {score < 15 ? "Alcanza 15 puntos para continuar" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
}
