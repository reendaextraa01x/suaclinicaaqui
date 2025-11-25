'use client';

import { useCountUp } from '@/hooks/use-count-up';
import { Award, Eye, Smile } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

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

const StatItem = ({
  value,
  label,
  icon,
}: {
  value: number;
  label:string;
  icon: React.ReactNode;
}) => {
  const { count, ref } = useCountUp(value);
  return (
    <motion.div 
      variants={itemVariants}
      className="group rounded-2xl border border-primary/20 bg-black/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-black/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
    >
      <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span
        ref={ref}
        className="font-headline text-5xl font-bold text-primary md:text-6xl"
      >
        {value > 100 ? `+${count.toLocaleString('pt-BR')}` : count}
      </span>
      <p className="mt-2 font-body text-lg text-foreground/80">{label}</p>
    </motion.div>
  );
};

export function Stats() {
  const stats = [
    { value: 1500, label: 'Cílios Aplicados', icon: <Eye className="mx-auto h-12 w-12" /> },
    { value: 900, label: 'Clientes Satisfeitas', icon: <Smile className="mx-auto h-12 w-12" /> },
    { value: 12, label: 'Prêmios Ganhos', icon: <Award className="mx-auto h-12 w-12" /> },
  ];

  return (
    <motion.section 
      id="stats" 
      className="bg-background py-20 sm:py-28" 
      style={{backgroundImage: 'radial-gradient(hsl(var(--muted)) 1px, transparent 1px)', backgroundSize: '4px 4px'}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 gap-8 text-center md:grid-cols-3"
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
