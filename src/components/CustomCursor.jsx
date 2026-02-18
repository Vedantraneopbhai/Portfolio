import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.style.position = "fixed";
    cursor.style.zIndex = 9999;
    cursor.style.width = "32px";
    cursor.style.height = "32px";
    cursor.style.border = "2px solid #3b82f6";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "background 0.2s, border 0.2s";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);
  return null;
};

export default CustomCursor;
