"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const LOGOS = [
  "/logos/client-logo-vtb.png",
  "/logos/client-logo-gazprom.png",
  "/logos/client-logo-alfa.webp",
  "/logos/client-logo-cosmos.webp",
  "/logos/client-logo-mgimo.jpg",
  "/logos/client-logo-stellar.png",
];

export default function MatterLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, Runner, Bodies, Composite, Body } = Matter;
    const engine = Engine.create({ gravity: { x: 0, y: 1, scale: 0.001 } });
    const runner = Runner.create();

    let width = container.clientWidth;
    let height = container.clientHeight;
    const radius = Math.max(width * 0.11, 24);
    const wallThickness = 200;

    const makeWalls = () => [
      Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, { isStatic: true }),
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 4, { isStatic: true }),
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 4, { isStatic: true }),
    ];
    let walls = makeWalls();
    Composite.add(engine.world, walls);

    const bodies = LOGOS.map((_, i) =>
      Bodies.circle(
        radius + Math.random() * Math.max(width - radius * 2, 1),
        -radius - i * radius * 2.2,
        radius,
        { restitution: 0.6, friction: 0.1, frictionAir: 0.01 }
      )
    );
    Composite.add(engine.world, bodies);

    let frame = 0;
    const update = () => {
      bodies.forEach((body, i) => {
        const el = logoRefs.current[i];
        if (el) {
          el.style.transform = `translate(${body.position.x - radius}px, ${body.position.y - radius}px) rotate(${body.angle}rad)`;
          el.style.width = `${radius * 2}px`;
          el.style.height = `${radius * 2}px`;
        }
      });
      frame = requestAnimationFrame(update);
    };

    Runner.run(runner, engine);
    frame = requestAnimationFrame(update);

    const kick = () => {
      bodies.forEach((body) => {
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.05 * body.mass,
          y: -0.08 * body.mass * Math.random(),
        });
      });
    };
    container.parentElement?.addEventListener("click", kick);

    const onResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      Composite.remove(engine.world, walls);
      walls = makeWalls();
      Composite.add(engine.world, walls);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      container.parentElement?.removeEventListener("click", kick);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div ref={containerRef} className="matter-canvas">
      {LOGOS.map((src, i) => (
        <div
          key={src}
          className="matter-logo"
          ref={(el) => {
            logoRefs.current[i] = el;
          }}
        >
          <img src={src} alt="" />
        </div>
      ))}
    </div>
  );
}
