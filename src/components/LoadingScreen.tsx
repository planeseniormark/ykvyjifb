"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200);
    const removeTimer = setTimeout(() => setRemoved(true), 2800);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`loading-screen ${hidden ? "loading-screen--hidden" : ""}`}>
      <div className="loading-pulse" />
      <div className="loading-pulse" />
      <div className="loading-pulse" />
      <div className="loading-cubes-container">
        <div className="loading-cube">
          <div className="face front">YO</div>
          <div className="face back">YO</div>
          <div className="face right">YO</div>
          <div className="face left">YO</div>
          <div className="face top">YO</div>
          <div className="face bottom">YO</div>
        </div>
        <div className="loading-cube">
          <div className="face front">LO</div>
          <div className="face back">LO</div>
          <div className="face right">LO</div>
          <div className="face left">LO</div>
          <div className="face top">LO</div>
          <div className="face bottom">LO</div>
        </div>
      </div>
    </div>
  );
}
