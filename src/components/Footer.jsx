export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100">
      <div className="container-x py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 bg-lime-400 text-black font-extrabold rounded-lg grid place-items-center">AT</span>
          <span className="font-semibold">Ayuda Tata</span>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ayuda Tata. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
