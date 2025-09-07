import { useParams } from "react-router-dom";
import { useMemo } from "react";
import lessons from "../data/lessons";
import ClickTrainer from "../game/ClickTrainer";
import CaptchaTrainer from "../game/CaptchaTrainer";

// Convierte cualquier URL de YouTube a embed con autoplay activado
function toYTEmbedAutoplay(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    const host = u.hostname;
    let id = "";

    if (host.includes("youtu.be")) {
      id = u.pathname.slice(1);
    } else if (host.includes("youtube.com")) {
      if (u.pathname.startsWith("/watch")) {
        id = u.searchParams.get("v") || "";
      } else if (u.pathname.startsWith("/shorts/")) {
        id = u.pathname.split("/")[2] || "";
      } else if (u.pathname.startsWith("/embed/")) {
        id = u.pathname.split("/")[2] || "";
      }
    }

    if (!id) return url;

    const base = `https://www.youtube-nocookie.com/embed/${id}`;
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "0",
      playsinline: "1",
      modestbranding: "1",
      rel: "0",
    });

    return `${base}?${params.toString()}`;
  } catch {
    return url;
  }
}

export default function LessonDetail() {
  const { id } = useParams();

  // Unificamos todas las lecciones
  const allLessons = [
    ...lessons.basico,
    ...lessons.medio,
    ...lessons.avanzado,
  ];

  const lesson = allLessons.find((item) => item.id === id);

  // 🔹 Usamos useMemo SIEMPRE, sin condicional
  const embedUrl = useMemo(() => {
    return lesson && lesson.videoUrl ? toYTEmbedAutoplay(lesson.videoUrl) : "";
  }, [lesson]);

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

      {/* Juegos */}
      {lesson.type === "game" && lesson.id === "click-trainer" && <ClickTrainer />}
      {lesson.type === "game" && lesson.id === "captcha-practice" && <CaptchaTrainer />}

      {/* Video con autoplay */}
      {lesson.type === "video" && lesson.videoUrl && (
        <>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              title={lesson.title}
              frameBorder="0"
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="mt-3 text-sm text-gray-500">
            Si no se reproduce automáticamente,{" "}
            <a
              href={lesson.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              ábrelo en YouTube
            </a>.
          </div>
        </>
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
