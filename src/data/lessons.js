const lessons = {
  basico: [
    {
      id: "click-trainer",
      title: "Click Trainer: Red & Blue",
      desc: "Aprende a diferenciar entre clic izquierdo y derecho con este juego interactivo.",
      type: "game" // 👈 Marcamos que es un juego
    },
    {
      id: "captcha-practice",
      title: "Captcha Trainer",
      desc: "Practica escribiendo correctamente letras y números.",
      type: "game" // 👈 Otro juego
    }
  ],
  medio: [
    {
      id: "whatsapp-basico",
      title: "WhatsApp básico",
      desc: "Enviar mensajes, notas de voz y fotos.",
      videoUrl: "https://www.youtube.com/embed/G6o1Y6N0_demo",
      type: "video"
    },
    {
      id: "videollamadas",
      title: "Videollamadas",
      desc: "Llamadas por WhatsApp y Zoom.",
      videoUrl: "https://www.youtube.com/embed/2Z_demo_video",
      type: "video"
    }
  ],
  avanzado: [
    {
      id: "seguridad",
      title: "Seguridad",
      desc: "Detectar estafas y proteger tus cuentas.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      type: "video"
    },
    {
      id: "pagos-digitales",
      title: "Pagos digitales",
      desc: "Transferencias y pagos sin filas.",
      videoUrl: "",
      type: "video"
    }
  ]
};

export default lessons;
