'use client';

import Image from 'next/image';
import { Award, Gem, HandHeart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Materiais Premium',
    description: 'Usamos apenas os produtos da mais alta qualidade e livres de crueldade para resultados bonitos e duradouros.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Técnicos Especialistas',
    description: 'Nossos artistas certificados são mestres em sua arte, dedicados à perfeição em cada detalhe.',
  },
  {
    icon: <HandHeart className="h-8 w-8 text-primary" />,
    title: 'Cuidado Personalizado',
    description: 'Cada tratamento é adaptado às suas características únicas e ao resultado desejado para um visual que é todo seu.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function WhyChooseUs() {
  const parallaxImage = PlaceHolderImages.find((img) => img.id === 'why-choose-us-parallax');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);


  return (
    <section ref={sectionRef} className="relative w-full py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {parallaxImage && (
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              src={parallaxImage.imageUrl}
              alt={parallaxImage.description}
              data-ai-hint={parallaxImage.imageHint}
              fill
              className="object-cover object-center"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="mx-auto mb-12 max-w-2xl text-center" variants={itemVariants}>
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Por que nos escolher?</h2>
          <p className="mt-4 text-foreground/80 md:text-lg">
            Onde a arte encontra o luxo para uma experiência de beleza inesquecível.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl border border-primary/20 bg-white/50 p-8 text-center text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-primary/10 hover:shadow-primary/20 hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted/50">
                {feature.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
