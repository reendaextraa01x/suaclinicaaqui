import Image from 'next/image';
import { Award, Gem, HandHeart } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    icon: <Gem className="h-8 w-8 text-primary-foreground" />,
    title: 'Premium Materials',
    description: 'We use only the highest quality, cruelty-free products for long-lasting, beautiful results.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary-foreground" />,
    title: 'Expert Technicians',
    description: 'Our certified artists are masters of their craft, dedicated to perfection in every detail.',
  },
  {
    icon: <HandHeart className="h-8 w-8 text-primary-foreground" />,
    title: 'Personalized Care',
    description: 'Every treatment is tailored to your unique features and desired outcome for a look that is all you.',
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
          className="object-cover"
          style={{ backgroundAttachment: 'fixed' }}
        />
      )}
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary-foreground md:text-5xl">Why Choose Us?</h2>
          <p className="mt-4 text-primary-foreground/80 md:text-lg">
            Where artistry meets luxury for an unforgettable beauty experience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center text-primary-foreground shadow-lg backdrop-blur-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                {feature.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-primary-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
