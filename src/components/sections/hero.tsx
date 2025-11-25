import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[80svh] w-full">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Experience True Beauty
            </h1>
            <p className="font-body text-lg text-primary md:text-xl">
              Discover our exclusive lash, brow, and beauty treatments designed to enhance your natural elegance.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground font-bold transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary))] hover:scale-105"
            >
              <Link href="#booking">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
