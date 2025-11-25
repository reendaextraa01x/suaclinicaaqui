
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

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

  return (
    <section className="relative h-[90svh] w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-headline text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
            >
              A Arte da Beleza, Redefinida
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="font-body text-xl text-primary md:text-2xl"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
            >
              Descubra tratamentos exclusivos para realçar sua elegância natural.
            </motion.p>
            <motion.div
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="font-bold text-lg"
              >
                <Link href="#booking">Agende Sua Consulta</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
