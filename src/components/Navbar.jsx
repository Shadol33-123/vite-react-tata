import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const items = [
    { to: '/', label: 'Inicio' },
    { to: '/lecciones', label: 'Lecciones' },
    { to: '/comunidad', label: 'Comunidad' },
    { to: '/ranking', label: 'Ranking' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-x py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Ir al inicio">
          <span className="w-10 h-10 bg-lime-400 text-black font-extrabold rounded-xl grid place-items-center shadow-soft group-hover:scale-105 transition">AT</span>
          <span className="text-2xl font-bold text-brand">Ayuda Tata</span>
        </Link>
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
        <Link to="/lecciones" className="btn btn-primary hidden sm:inline-flex">Comenzar</Link>
      </div>
    </nav>
  )
}
