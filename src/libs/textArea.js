// src/libs/textArea.js
export function autoResizeTextarea(
  textarea,
  { maxHeight = 100, scrollThreshold = 50 } = {}
) {
  if (!textarea) return;

  const resize = () => {
    textarea.style.height = "auto";

    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;

    textarea.style.overflowY =
      textarea.scrollHeight > scrollThreshold ? "auto" : "hidden";
  };

  textarea.addEventListener("input", resize);
  resize();

  return () => {
    textarea.removeEventListener("input", resize);
  };
}
