import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  maxOpacity: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Star Colors (deep space tones: cold white, icy blue, soft violet, warm glow)
    const starColors = ['#ffffff', '#e0e7ff', '#c7d2fe', '#fdf4ff', '#e2e8f0'];

    // 1. Static & Twinkling Stars
    let stars: Star[] = [];
    const initStars = () => {
      const starCount = Math.floor((width * height) / 8000); // Responsive density
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const baseAlpha = Math.random() * 0.7 + 0.2;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.3 + 0.4,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };
    initStars();

    // 2. Realistic Shooting Stars (Meteors)
    const shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = Date.now() + Math.random() * 1500 + 500;

    const spawnShootingStar = () => {
      // Spawn naturally from upper-right / top quadrants
      const angle = (Math.PI / 180) * (Math.random() * 15 + 130); // ~130-145 deg angle
      const startX = Math.random() * (width * 1.2) - width * 0.1;
      const startY = Math.random() * (height * 0.45) - 50;
      const speed = Math.random() * 10 + 16; // Swift meteor velocity
      const length = Math.random() * 160 + 110;
      const maxLife = Math.random() * 35 + 25;

      shootingStars.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        opacity: 0,
        maxOpacity: Math.random() * 0.7 + 0.3,
        life: 0,
        maxLife,
        color: Math.random() > 0.35 ? '#818cf8' : '#38bdf8', // Indigo / Cyan
        size: Math.random() * 1.5 + 1.2,
      });

      // Schedule next meteor (every 2 to 5 seconds)
      nextShootingStarTime = Date.now() + Math.random() * 3000 + 2000;
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- Draw Twinkling Stars ---
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.9 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      // --- Spawn Meteor on schedule ---
      if (Date.now() > nextShootingStarTime && shootingStars.length < 3) {
        spawnShootingStar();
      }

      // --- Draw Realistic Meteors with Glowing Head and Soft Tail ---
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.life++;

        // Smooth fade-in, peak flare, and graceful fade-out
        const halfLife = s.maxLife / 2;
        if (s.life < halfLife) {
          s.opacity = (s.life / halfLife) * s.maxOpacity;
        } else {
          s.opacity = ((s.maxLife - s.life) / halfLife) * s.maxOpacity;
        }

        const vx = Math.cos(s.angle) * s.speed;
        const vy = Math.sin(s.angle) * s.speed;

        s.x += vx;
        s.y += vy;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        // Gradient for meteor trail
        const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.7, `${s.color}${Math.floor(s.opacity * 180).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 12;
        ctx.shadowColor = s.color;
        ctx.stroke();

        // Meteor Head Spark & Corona
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.shadowBlur = 16;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
        ctx.restore();

        // Remove expired meteors
        if (s.life >= s.maxLife || s.x < -100 || s.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Canvas Night Sky */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Deep Space Ambient Nebulas & Vignette */}
      <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#050508]/60 via-transparent to-[#050508]/90" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/5 blur-[160px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/5 blur-[140px] rounded-full" />
    </div>
  );
};
