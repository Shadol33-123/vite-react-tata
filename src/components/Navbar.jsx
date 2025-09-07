import { NavLink, Link } from 'react-router-dom';
import { User } from 'lucide-react'; // Icono minimalista

export default function Navbar() {
  const items = [
    { to: '/', label: 'Inicio' },
    { to: '/lecciones', label: 'Lecciones' },
    { to: '/comunidad', label: 'Comunidad' },
    { to: '/ranking', label: 'Ranking' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-x py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Ir al inicio">
          <span className="w-10 h-10 bg-lime-400 text-black font-extrabold rounded-xl grid place-items-center shadow-soft group-hover:scale-105 transition">
            CM
          </span>
          <span className="text-2xl font-bold text-brand">Connect! Mayor</span>
        </Link>

        {/* Navegación */}
        <div className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) => `${isActive ? 'nav-link nav-active' : 'nav-link'}`}
              end={it.to === '/'}
            >
              {it.label}
            </NavLink>
          ))}
        </div>

        {/* Botón Comenzar y Perfil */}
        <div className="flex items-center gap-4">
          <Link to="/lecciones" className="btn btn-primary hidden sm:inline-flex">
            Comenzar
          </Link>

          {/* Perfil */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full shadow-sm cursor-pointer hover:bg-gray-200 transition">
            <User size={20} className="text-gray-700" />
            <span className="text-gray-700 font-medium text-sm">matias</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
