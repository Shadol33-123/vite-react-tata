import { useParams } from "react-router-dom";
import lessons from "../data/lessons";

// Importamos los juegos
import ClickTrainer from "../game/ClickTrainer";
import CaptchaTrainer from "../game/CaptchaTrainer";

export default function LessonDetail() {
  const { id } = useParams();

  // Combinamos todas las lecciones en un solo array
  const allLessons = [
    ...lessons.basico,
    ...lessons.medio,
    ...lessons.avanzado
  ];

  // Buscamos la lección
  const lesson = allLessons.find((item) => item.id === id);

  if (!lesson) {
    return (
      <div className="container-x py-16">
        <h1 className="text-2xl font-bold text-red-600">Lección no encontrada</h1>
        <p className="mt-3 text-gray-600">
          La lección solicitada no existe o fue eliminada.
        </p>
      </div>
    );
  }

  return (
    <section className="container-x py-16">
      <h1 className="section-title mb-4">{lesson.title}</h1>
      <p className="text-gray-700 mb-6">{lesson.desc}</p>

      {/* Si la lección es un juego */}
      {lesson.type === "game" && lesson.id === "click-trainer" && <ClickTrainer />}
      {lesson.type === "game" && lesson.id === "captcha-practice" && <CaptchaTrainer />}

      {/* Si la lección es un video */}
      {lesson.type === "video" && lesson.videoUrl && (
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}

      {/* Si no hay video */}
      {lesson.type === "video" && !lesson.videoUrl && (
        <p className="text-gray-500 italic">
          Esta lección no tiene un video disponible.
        </p>
      )}
    </section>
  );
}
