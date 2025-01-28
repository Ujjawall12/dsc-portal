// AnimatedBackground.tsx
"use client";
import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const particles: Particle[] = [];
    const particleCount = 50;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas as HTMLCanvasElement).width;
        this.y = Math.random() * (canvas as HTMLCanvasElement).height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas as HTMLCanvasElement).width) this.x = 0;
        if (this.x < 0) this.x = (canvas as HTMLCanvasElement).width;
        if (this.y > (canvas as HTMLCanvasElement).height) this.y = 0;
        if (this.y < 0) this.y = (canvas as HTMLCanvasElement).height;
      }

      draw() {
        (ctx as CanvasRenderingContext2D).fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        (ctx as CanvasRenderingContext2D).beginPath();
        (ctx as CanvasRenderingContext2D).arc(this.x, this.y, this.size, 0, Math.PI * 2);
        (ctx as CanvasRenderingContext2D).fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = "rgba(26, 26, 26, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}