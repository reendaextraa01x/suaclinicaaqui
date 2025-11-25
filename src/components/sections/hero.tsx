'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
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
      delay: 1.5,
    },
  },
};

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const title = "Sua Beleza, Nossa Inspiração.";

  return (
    <motion.section
      className="relative h-[90svh] w-full overflow-hidden"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          className="object-cover"
        />
      )}
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-8"
          >
            <AnimatePresence>
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                aria-label={title}
                className="font-headline text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-pink-200"
                style={{ textShadow: '0 4px 30px rgba(0, 0, 0, 0.4)' }}
              >
                {title.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>
            <motion.p
              variants={itemVariants}
              className="font-body text-xl text-white/90 md:text-2xl"
              style={{ textShadow: '0 3px 20px rgba(0, 0, 0, 0.8)' }}
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
