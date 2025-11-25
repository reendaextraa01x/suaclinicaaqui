import Image from 'next/image';
import { Award, Gem, HandHeart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export function WhyChooseUs() {
  const parallaxImage = PlaceHolderImages.find((img) => img.id === 'why-choose-us-parallax');

  return (
    <section className="relative w-full py-20 sm:py-28">
      {parallaxImage && (
        <Image
          src={parallaxImage.imageUrl}
          alt={parallaxImage.description}
          data-ai-hint={parallaxImage.imageHint}
          fill
          className="object-cover object-center"
        />
      )}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Por que nos escolher?</h2>
          <p className="mt-4 text-white/80 md:text-lg">
            Onde a arte encontra o luxo para uma experiência de beleza inesquecível.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-primary/20 bg-black/30 p-8 text-center text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-primary/10 hover:shadow-primary/20 hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted/50">
                {feature.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
