export default function Lecciones() {
  return (
    <section className="container-x py-16">
      <h1 className="section-title mb-6">Lecciones</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <a href="/leccion/whatsapp-basico" className="card p-5 hover:shadow-lift transition">
          <h3 className="sub-title">WhatsApp Básico</h3>
          <p className="mt-2 text-gray-600">Aprende a enviar mensajes, notas de voz e imágenes.</p>
        </a>
      </div>
    </section>
  )
}
