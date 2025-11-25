'use client';

import { useCountUp } from '@/hooks/use-count-up';

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span
        ref={ref}
        className="font-headline text-5xl font-bold text-primary-foreground md:text-6xl"
      >
        +{count.toLocaleString()}
      </span>
      <p className="mt-2 font-body text-lg text-primary-foreground/80">{label}</p>
    </div>
  );
};

export function Stats() {
  const stats = [
    { value: 1500, label: 'Lashes Applied' },
    { value: 900, label: 'Eyebrows Perfected' },
    { value: 12, label: 'Awards Won' },
  ];

  return (
    <section id="stats" className="bg-primary py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
