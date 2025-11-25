'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Heart, Scissors, Sparkle } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const WHATSAPP_LINK = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Vi seu perfil no site e gostaria de agendar um horário.")}`;

export function AboutMe() {
  const professionalImage = PlaceHolderImages.find((img) => img.id === 'about-me-professional');

  return (
    <section className="w-full bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="relative aspect-square w-full max-w-md mx-auto" variants={itemVariants}>
            {professionalImage && (
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-8 border-secondary">
                <Image
                  src={professionalImage.imageUrl}
                  alt="Foto da profissional"
                  data-ai-hint={professionalImage.imageHint}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </motion.div>
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.h2 className="font-headline text-4xl font-bold text-primary md:text-5xl" variants={itemVariants}>
              Conheça a Artista por Trás da Beleza
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
              Olá, eu sou [Seu Nome], a fundadora da Sua Clínica e uma apaixonada por realçar a beleza única que existe em cada pessoa. Com mais de [X] anos de experiência, minha missão é combinar técnica, arte e um atendimento personalizado para criar resultados que não apenas embelezam, mas também elevam a autoestima.
            </motion.p>
            
            <motion.ul className="space-y-4 text-foreground" variants={containerVariants}>
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1"><Heart className="h-6 w-6 text-primary" /></div>
                <span><strong className="font-semibold">Paixão e Dedicação:</strong> Cada procedimento é realizado com o máximo de cuidado e atenção aos detalhes, como se fosse uma obra de arte.</span>
              </motion.li>
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1"><Scissors className="h-6 w-6 text-primary" /></div>
                <span><strong className="font-semibold">Especialização Contínua:</strong> Estou sempre me atualizando com as últimas tendências e técnicas para oferecer a você os melhores e mais seguros tratamentos do mercado.</span>
              </motion.li>
              <motion.li className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 mt-1"><Sparkle className="h-6 w-6 text-primary" /></div>
                <span><strong className="font-semibold">Resultados que Encantam:</strong> Meu maior objetivo é ver o seu sorriso de satisfação no espelho. Sua felicidade é a minha maior recompensa.</span>
              </motion.li>
            </motion.ul>

            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="font-bold text-lg glow-on-hover hover:scale-105">
                <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agende um Horário Comigo</Link>
              </Button>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
