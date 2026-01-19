import { useState, useEffect, useRef } from "react";
import { autoResizeTextarea } from "@libs/textArea.js";

export default function Heart() {
  const [show, setShow] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    const cleanup = autoResizeTextarea(textareaRef.current, {
      maxHeight: 100,
      scrollThreshold: 50,
    });

    return cleanup; // limpieza del listener
  }, []);

  return (
    <>
      <div className="flex gap-2 w-full justify-center items-center flex-row">
        <textarea
          ref={textareaRef}
          name="primeInput"
          placeholder="Enter a number to check if it's prime"
          className="w-full p-2 rounded-2xl resize-none max-h-25 overflow-y-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-200"
        />

        <button
          onClick={() => setShow(!show)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          →
        </button>
      </div>

      {show && <ChildComponent />}
    </>
  );
}

function ChildComponent() {
  return <div>Contenido dinámico</div>;
}
