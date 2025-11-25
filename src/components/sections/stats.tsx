'use client';

import { useCountUp } from '@/hooks/use-count-up';
import { Award, Eye, Smile } from 'lucide-react';
import React from 'react';

const StatItem = ({
  value,
  label,
  icon,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
}) => {
  const { count, ref } = useCountUp(value);
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
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
    </div>
  );
};

export function Stats() {
  const stats = [
    { value: 1500, label: 'Cílios Aplicados', icon: <Eye className="mx-auto h-12 w-12" /> },
    { value: 900, label: 'Clientes Satisfeitas', icon: <Smile className="mx-auto h-12 w-12" /> },
    { value: 12, label: 'Prêmios Ganhos', icon: <Award className="mx-auto h-12 w-12" /> },
  ];

  return (
    <section id="stats" className="bg-gradient-to-b from-secondary/30 to-background py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
