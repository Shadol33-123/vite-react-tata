import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NivelBasicoCaptcha() {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [colorMensaje, setColorMensaje] = useState("");
  const [completado, setCompletado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    generarCaptcha();
  }, []);

  const generarCaptcha = () => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ñÑ";
    let codigo = "";
    for (let i = 0; i < 7; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setCaptcha(codigo);
  };

  const verificarCaptcha = (e) => {
    e.preventDefault();
    if (input === captcha) {
      setMensaje("✅ ¡Correcto! Has completado el nivel básico.");
      setColorMensaje("text-green-600");
      setCompletado(true);
    } else {
      setMensaje("❌ Error, inténtalo de nuevo.");
      setColorMensaje("text-red-600");
      generarCaptcha();
      setCompletado(false);
    }
    setInput("");
  };

  const refrescarCaptcha = () => {
    generarCaptcha();
    setMensaje("");
    setInput("");
    setCompletado(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">🧠 Verificación CAPTCHA</h1>
        <p className="text-gray-600 mb-6">
          Escribe el código exactamente como aparece para completar el nivel básico.
        </p>

        <div className="flex justify-center items-center gap-3 mb-5">
          <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 text-2xl font-bold tracking-widest select-none">
            {captcha}
          </div>
          <button
            onClick={refrescarCaptcha}
            className="btn btn-ghost px-3 py-2 text-sm"
          >
            ↻
          </button>
        </div>

        <form onSubmit={verificarCaptcha} className="flex flex-col gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe aquí el código..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-amber-400 outline-none"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-lg font-semibold"
          >
            Verificar
          </button>
        </form>

        {mensaje && (
          <p className={`mt-4 text-lg font-semibold ${colorMensaje}`}>
            {mensaje}
          </p>
        )}

        {/* Botón para pasar al Icon Finder */}
        {completado && (
          <div className="mt-6">
            <button
              onClick={() => navigate("/leccion/nivel-basico/icon-finder")}
              className="btn btn-primary w-full max-w-xs text-lg transition-all"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
