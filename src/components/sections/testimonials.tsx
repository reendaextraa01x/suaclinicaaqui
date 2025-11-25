'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Juliana S.',
    avatar: 'https://i.imgur.com/zuejkEK.jpeg',
    rating: 5,
    quote:
      'A experiência foi simplesmente divina! Meus cílios nunca estiveram tão lindos. A atenção aos detalhes é impressionante. Virei cliente fiel!',
  },
  {
    name: 'Carolina M.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    quote:
      'O design de sobrancelhas transformou meu rosto. A profissional foi incrível, entendeu exatamente o que eu queria. Recomendo de olhos fechados.',
  },
  {
    name: 'Fernanda L.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    quote:
      'Fiz o lash lifting e estou apaixonada pelo resultado. Super natural e prático para o dia a dia. O ambiente da clínica é um luxo!',
  },
  {
    name: 'Mariana P.',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    quote:
      'Atendimento impecável do início ao fim. As extensões de cílios ficaram perfeitas, exatamente como eu sonhava. Qualidade e profissionalismo definem o lugar.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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


export function Testimonials() {
  return (
    <motion.section 
      id="testimonials" 
      className="w-full bg-secondary/30 py-20 sm:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          variants={itemVariants}
        >
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">O Que Nossas Clientes Dizem</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Histórias reais de beleza e confiança que nos inspiram todos os dias.
          </p>
        </motion.div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <motion.div 
                  className="p-4 h-full"
                  variants={itemVariants}
                >
                  <Card className="h-full flex flex-col justify-between overflow-hidden border-primary/20 bg-card shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
                    <CardContent className="p-8 text-center flex-1 flex flex-col items-center">
                      <Quote className="w-12 h-12 text-primary/30 mb-4" />
                      <p className="italic text-foreground/80 mb-6 flex-1">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center flex-col">
                         <Avatar className="w-20 h-20 mb-4 border-4 border-secondary">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-headline text-xl font-bold text-foreground">{testimonial.name}</h3>
                        <div className="flex mt-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:-left-12 -left-4 text-primary hover:bg-muted" />
          <CarouselNext className="sm:-right-12 -right-4 text-primary hover:bg-muted" />
        </Carousel>
      </div>
    </motion.section>
  );
}
