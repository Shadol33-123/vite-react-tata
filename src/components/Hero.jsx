import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/hero-image.png"; // Usa tu imagen aquí
import clickIzqGif from "../assets/click-izquierdo.png";
import clickDerGif from "../assets/click-derecho.png";

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
    // Verificamos que el nombre esté en minúsculas
    if (step === 3 && name.trim() !== "" && name === name.toLowerCase()) {
      alert(`¡Felicidades ${name}! 🎉 Has completado el test.`);
      setStep(0);
      setName("");
    } else {
      handleFail();
    }
  };

  const handleFail = () => {
    setFails((prev) => {
      const updated = prev + 1;
      if (updated >= 3) {
        navigate("/leccion/whatsapp-basico");
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-300 blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-rose-300 blur-3xl opacity-40 animate-pulse"></div>
      </div>

      <div className="container-x py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto principal */}
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <p className="pill mb-4 bg-amber-50 text-amber-700 border-amber-200">Aprende paso a paso</p>
          <h1 className="section-title">Tecnología para personas mayores</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Clases simples, ejercicios guiados y una comunidad que acompaña. ¡Sin enredos!
          </p>

          {/* Botones */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/lecciones" className="btn btn-primary">Ver lecciones</Link>
            <button onClick={startTest} className="btn btn-ghost">Hacer test</button>
          </div>

          {/* Test interactivo */}
          {step > 0 && (
            <div className="mt-6 bg-white shadow-soft rounded-xl p-5 max-w-md">
              <p className="text-gray-500 mb-4 text-sm">Intentos fallidos: {fails} / 3</p>

              {step === 1 && (
                <p className="flex items-center justify-center gap-2">
                  Paso 1: Haz <b>clic izquierdo</b> en el botón azul 👇
                  <img
                    src={clickIzqGif}
                    alt="Click izquierdo"
                    className="w-10 h-10 inline-block rounded-md"
                  />
                </p>
              )}

              {step === 2 && (
                <p className="flex items-center justify-center gap-2">
                  Paso 2: Haz <b>clic derecho</b> en el mismo botón 👇
                  <img
                    src={clickDerGif}
                    alt="Click derecho"
                    className="w-10 h-10 inline-block rounded-md"
                  />
                </p>
              )}

              {step === 3 && (
                <div className="flex flex-col items-center gap-3">
                  <p>Paso 3: Escribe tu <b>nombre</b> en minúsculas y presiona Enter ✅</p>
                </div>
              )}

              {/* Botón azul para los clics */}
              {step < 3 && (
                <button
                  onClick={handleLeftClick}
                  onContextMenu={handleRightClick}
                  className="btn btn-primary px-6 py-3 text-lg"
                >
                  Botón Azul
                </button>
              )}

              {/* Campo de nombre */}
              {step === 3 && (
                <form onSubmit={handleNameSubmit} className="flex flex-col items-center gap-3 mt-3">
                  <input
                    type="text"
                    placeholder="Escribe tu nombre..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm focus:ring-2 focus:ring-amber-400 outline-none"
                  />
                  <button type="submit" className="btn btn-primary w-full max-w-sm">Enviar</button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-lift animate-[fadeIn_1s_ease-out]">
            <img
              src={heroImg}
              alt="Aprendiendo tecnología"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft p-4 hidden md:block">
            <div className="text-sm font-semibold text-brand">+120 alumnos</div>
            <div className="text-xs text-gray-600">aprendiendo cada semana</div>
          </div>
        </div>
      </div>
    </header>
  );
}
