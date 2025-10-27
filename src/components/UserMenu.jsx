import { useState } from "react";
import { Moon, Sun, LogOut, User, Settings } from "lucide-react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const user = localStorage.getItem("userName");

  const toggleMenu = () => setOpen(!open);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.href = "/";
  };

  return (
    <div className="relative">
      {/* Botón Avatar */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 transition"
      >
        <User size={20} className="text-gray-700" />
        <span className="font-medium text-sm">{user || "Invitado"}</span>
      </button>

      {/* Panel desplegable */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white shadow-2xl rounded-2xl p-4 z-50 border">
          {/* Encabezado */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-lime-400 text-black font-extrabold grid place-items-center">
              {user ? user[0].toUpperCase() : "?"}
            </div>
            <div>
              <p className="font-semibold">{user || "Invitado"}</p>
              <p className="text-xs text-gray-500">Cuenta Connect! Mayor</p>
            </div>
          </div>

          {/* Opciones */}
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-lg transition">
              <div className="flex items-center gap-2">
                <Settings size={16} />
                <span>Configuración</span>
              </div>
            </li>

            <li
              onClick={toggleDarkMode}
              className="flex justify-between items-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded-lg transition"
            >
              <div className="flex items-center gap-2">
                {darkMode ? <Moon size={16} /> : <Sun size={16} />}
                <span>Modo oscuro</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={darkMode} readOnly className="sr-only" />
                <div className="w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4"></div>
              </label>
            </li>

            {user && (
              <li
                onClick={handleLogout}
                className="flex items-center gap-2 cursor-pointer text-red-600 hover:bg-red-50 px-2 py-2 rounded-lg transition"
              >
                <LogOut size={16} />
                <span>Cerrar sesión</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
