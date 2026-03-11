"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(text: string, speed = 60) {
  const [display, setDisplay] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const hideScheduledRef = useRef(false);

  useEffect(() => {
    if (display.length >= text.length) {
      if (hideScheduledRef.current) return;
      hideScheduledRef.current = true;
      setTimeout(() => setShowCursor(false), 2000);
      return;
    }
    const timeout = setTimeout(() => {
      setDisplay(text.slice(0, display.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [display, text, speed]);

  return { display, showCursor };
}
