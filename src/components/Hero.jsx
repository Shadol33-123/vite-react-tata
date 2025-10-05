import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import heroImg from "../assets/hero-image.png";
import clickIzqGif from "../assets/click-izquierdo.gif";
import clickDerGif from "../assets/click-derecho.gif";

export default function Hero() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [fails, setFails] = useState(0);
  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (step === 1) {
      setStep(2);
    } else if (step > 0) {
      handleFail();
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (step === 2) {
      setStep(3);
    } else if (step > 0) {
      handleFail();
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
      
    if (step === 3 && name.trim() !== "" && name === name.toLowerCase()) {
      toast.success(`🎉 ¡Felicidades ${name}! Has completado el test.`);
      setStep(0);
      setName("");
    } else {
      toast.error("⚠️ Tu nombre debe estar en minúsculas y no vacío.");
      handleFail();
     }
  };

  const handleFail = () => {
    setFails((prev) => {
      const updated = prev + 1;
      if (updated >= 3) {
        navigate("/leccion/Nivel-Basico/click-trainer");
      }
      return updated;
    });
  };

  const startTest = () => {
    setStep(1);
    setFails(0);
    setName("");
  };

  return (
    <header className="relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-300 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-pink-300 blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container-x py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto principal */}
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <p className="pill mb-4 bg-red-100 text-red-700 border-red-200">
            Aprende paso a paso
          </p>
          <h1 className="section-title text-gray-900">
            Tecnología para personas mayores
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Clases simples, ejercicios guiados y una comunidad que acompaña.
            ¡Sin enredos!
          </p>

          {/* Botones principales (agrandados) */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/lecciones"
              className="btn btn-primary text-lg font-bold px-8 py-4 shadow-lg hover:scale-105 transition"
            >
              Ver lecciones
            </Link>
            <button
              onClick={startTest}
              className="btn btn-ghost text-lg font-bold px-8 py-4 shadow-lg hover:scale-105 transition"
            >
              Hacer test
            </button>
          </div>

          {/* Test interactivo */}
          {step > 0 && (
            <div className="mt-6 bg-white shadow-soft rounded-xl p-5 max-w-md border border-gray-200">
              <p className="text-gray-500 mb-4 text-sm">
                Intentos fallidos:{" "}
                <span
                  className={`font-bold ${
                    fails >= 2 ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {fails} / 3
                </span>
              </p>

              {/* Paso 1 */}
              {step === 1 && (
                <p className="flex items-center gap-2">
                  Paso 1: Haz <b>click izquierdo</b> en el botón 
                  <img
                    src={clickIzqGif}
                    alt="Click izquierdo"
                    className="w-10 h-10 rounded-md"
                  />
                </p>
              )}

              {/* Paso 2 */}
              {step === 2 && (
                <p className="flex items-center gap-2">
                  Paso 2: Haz <b>click derecho</b> en el mismo botón 👇
                  <img
                    src={clickDerGif}
                    alt="Click derecho"
                    className="w-10 h-10 rounded-md"
                  />
                </p>
              )}

              {/* Paso 3 */}
              {step === 3 && (
                <div className="flex flex-col items-center gap-3">
                  <p>
                    Paso 3: Escribe tu <b>nombre</b> en minúsculas y presiona{" "}
                    <b>Enter</b> ✅
                  </p>
                </div>
              )}

              {/* Botón rojo grande para clics */}
              {step < 3 && (
                <button
                  onClick={handleLeftClick}
                  onContextMenu={handleRightClick}
                  className="btn btn-primary w-full py-3 text-lg font-semibold"
                >
                  !PRESIONE AQUI¡
                </button>
              )}

              {/* Campo de nombre */}
              {step === 3 && (
                <form
                  onSubmit={handleNameSubmit}
                  className="flex flex-col items-center gap-3 mt-3"
                >
                  <input
                    type="text"
                    placeholder="Escribe tu nombre..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm focus:ring-2 focus:ring-red-400 outline-none"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary w-full py-3 text-lg font-semibold"
                  >
                    Enviar
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-lg animate-[fadeIn_1s_ease-out]">
            <img
              src={heroImg}
              alt="Aprendiendo tecnología"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft p-4 hidden md:block">
            <div className="text-sm font-bold text-red-600">+120 alumnos</div>
            <div className="text-xs text-gray-600">
              aprendiendo cada semana
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
