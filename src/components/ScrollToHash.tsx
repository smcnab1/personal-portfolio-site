"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    const element = id ? document.getElementById(id) : null;
    if (element) {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  }, []);

  return null;
}
