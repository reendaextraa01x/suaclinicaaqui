'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gradientX = useTransform(mouseX, (val) => `${val}px`);
  const gradientY = useTransform(mouseY, (val) => `${val}px`);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      className="relative h-[90svh] w-full overflow-hidden"
    >
      {heroImage && (
        <video
          src={heroImage.imageUrl.replace('.jpg', '.mp4')}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
          poster={heroImage.imageUrl}
        >
          <source src={heroImage.imageUrl.replace('.jpg', '.mp4')} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      )}

      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${gradientX} ${gradientY}, hsl(var(--primary) / 0.15), transparent 80%)`,
        }}
      />
      
      <div className="absolute inset-0 bg-black/10" />
      <div className="diamond-dust"></div>
      <div className="diamond-dust layer-2"></div>
      <div className="diamond-dust layer-3"></div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              Sua Beleza, Nossa Inspiração.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-foreground/80 md:text-2xl"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            >
              Eleve sua autoestima com tratamentos que transcendem o comum.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="font-bold text-lg glow-on-hover hover:scale-105">
                <Link href="#booking">Agende Sua Consulta</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
