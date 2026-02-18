import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#fff" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#3b82f6" },
          links: { enable: true, color: "#3b82f6", distance: 150, opacity: 0.3, width: 1 },
          move: { enable: true, speed: 2, outModes: { default: "bounce" } },
          number: { value: 40 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
