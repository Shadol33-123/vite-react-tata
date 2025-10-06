import { useState } from "react";
import whatsapp from "../assets/icons/whatsapp.png";
import facebook from "../assets/icons/facebook.png";
import camera from "../assets/icons/camera.png";
import settings from "../assets/icons/settings.png";
import gallery from "../assets/icons/gallery.png";

const icons = [
  { id: "whatsapp", label: "WhatsApp", image: whatsapp },
  { id: "facebook", label: "Facebook", image: facebook },
  { id: "camera", label: "Cámara", image: camera },
  { id: "settings", label: "Ajustes", image: settings },
  { id: "gallery", label: "Galería", image: gallery },
];

export default function IconFinder() {
  const [target, setTarget] = useState(
    icons[Math.floor(Math.random() * icons.length)]
  );
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleClick = (icon) => {
    if (icon.id === target.id) {
      setMessage(`✅ ¡Correcto! Era ${target.label}.`);
      setScore(score + 1);
      setTarget(icons[Math.floor(Math.random() * icons.length)]);
    } else {
      setMessage(`❌ Era ${target.label}. Intenta otra vez.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">📷 Encuentra el ícono</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Haz clic en el ícono de <b>{target.label}</b>
        </p>

        {/* Íconos */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 mb-6">
          {icons.map((icon) => (
            <button
              key={icon.id}
              onClick={() => handleClick(icon)}
              className="p-4 bg-gray-100 rounded-xl hover:bg-green-100 transition"
            >
              <img
                src={icon.image}
                alt={icon.label}
                className="w-16 h-16 object-contain mx-auto"
              />
            </button>
          ))}
        </div>

        {/* Mensaje de retroalimentación */}
        {message && <p className="text-lg font-semibold text-gray-700 mb-3">{message}</p>}

        {/* Puntaje */}
        <p className="text-gray-600 mt-2">
          Puntaje: <b>{score}</b>
        </p>
      </div>
    </div>
  );
}
