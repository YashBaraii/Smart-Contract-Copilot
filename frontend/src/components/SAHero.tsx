
import React, { useEffect, useRef } from 'react';
import Button from './SAButton';
import { ArrowRight, Shield, Lock, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const floatingElements = [
  { id: 1, icon: Shield, color: 'bg-blue-500', size: 'w-10 h-10', position: 'top-1/4 left-1/4', delay: '0s' },
  { id: 2, icon: Lock, color: 'bg-blue-600', size: 'w-8 h-8', position: 'top-1/3 right-1/4', delay: '0.5s' },
  { id: 3, icon: FileCheck, color: 'bg-blue-700', size: 'w-12 h-12', position: 'bottom-1/4 right-1/3', delay: '1s' },
];

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match the container
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create a particle system
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number, opacity: number}[] = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap particles around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(drawParticles);
    };
    
    const animationId = requestAnimationFrame(drawParticles);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background particle effect */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-70"></div>
      
      {/* Floating elements */}
      {floatingElements.map(({ id, icon: Icon, color, size, position, delay }) => (
        <div 
          key={id}
          className={cn(
            "absolute rounded-lg flex items-center justify-center z-10 animate-float",
            color,
            size, 
            position
          )}
          style={{ animationDelay: delay }}
        >
          <Icon className="text-white" size={24} />
        </div>
      ))}
      
      <div className="container px-4 sm:px-6 relative z-10 mx-auto mt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Cutting-edge Aptos Security
            </span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient">Automated Security</span> in<br /> Aptos Move Smart Contracts
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Build secure, tamper-proof smart contracts with automated protection mechanisms. 
            Keep your blockchain applications safe from attacks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="px-8"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              Learn About Automated Security
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8"
            >
              Get Started with Secure Coding
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 42.7C840 38 960 35 1080 40.7C1200 47 1320 61 1380 68L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
