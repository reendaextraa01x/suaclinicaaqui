'use client';

import { MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WHATSAPP_LINK = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`;

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

export function Location() {
  return (
    <motion.section 
      className="w-full py-20 sm:py-28 bg-muted/40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div className="mx-auto mb-12 max-w-2xl text-center" variants={itemVariants}>
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Nossa Localização e Contato</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Venha nos visitar e desfrute de uma experiência de beleza inesquecível. Estamos ansiosos para recebê-la!
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
          <motion.div className="order-2 lg:order-1 space-y-6" variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold">Endereço</h3>
                <p className="text-muted-foreground">
                  Avenida Paulista, 1234, 5º andar<br />
                  Bela Vista, São Paulo - SP, 01310-100
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9:00 - 20:00<br />
                  Sábado: 9:00 - 18:00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Calendar className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold">Agende Sua Visita</h3>
                <p className="text-muted-foreground mb-4">
                  Clique no botão abaixo para garantir seu horário conosco.
                </p>
                <Button asChild size="lg" className="font-bold text-lg glow-on-hover hover:scale-105">
                  <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agende Agora</Link>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 h-80 lg:h-full w-full min-h-[400px] overflow-hidden rounded-xl shadow-2xl shadow-primary/20 border-4 border-secondary"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197500187834!2d-46.65888268502263!3d-23.56134958468266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAvenida%20Paulista%2C%201234%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1678886555555!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização da clínica"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
