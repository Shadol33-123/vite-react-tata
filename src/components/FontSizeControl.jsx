import { useState, useEffect } from "react";

export default function FontSizeControl() {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-full p-3 flex gap-2 z-50">
      <button
        onClick={() => setFontSize((f) => Math.max(80, f - 10))}
        className="btn btn-ghost text-lg px-3"
      >
        A-
      </button>
      <button
        onClick={() => setFontSize((f) => Math.min(150, f + 10))}
        className="btn btn-primary text-lg px-3"
      >
        A+
      </button>
    </div>
  );
}
