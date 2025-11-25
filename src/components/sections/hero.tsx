import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[90svh] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="font-headline text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
              A Arte da Beleza, Redefinida
            </h1>
            <p className="font-body text-xl text-primary md:text-2xl"
               style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
              Descubra tratamentos exclusivos para realçar sua elegância natural.
            </p>
            <Button
              asChild
              size="lg"
              className="font-bold text-lg glow-on-hover hover:scale-105"
            >
              <Link href="#booking">Agende Sua Consulta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
