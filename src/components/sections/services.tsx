import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const servicesData = [
  {
    id: 'service-eyelash-extensions',
    title: 'Eyelash Extensions',
    description: 'Customized eyelash extensions to add volume and length for a stunning look.',
    price: '$120',
  },
  {
    id: 'service-lash-lifting',
    title: 'Lash Lifting',
    description: 'A semi-permanent treatment that gives your natural lashes an illusion of being perfectly curled.',
    price: '$80',
  },
  {
    id: 'service-eyebrow-design',
    title: 'Eyebrow Design',
    description: 'Shaping, tinting, and styling to create the perfect eyebrow arch for your face.',
    price: '$50',
  },
  {
    id: 'service-manicure',
    title: 'Luxury Manicure',
    description: 'Complete nail care, exfoliation, massage, and polish for beautiful hands.',
    price: '$65',
  },
  {
    id: 'service-pedicure',
    title: 'Spa Pedicure',
    description: 'Relax and rejuvenate with a soak, scrub, massage, and perfect polish.',
    price: '$75',
  },
  {
    id: 'service-facial',
    title: 'Signature Facial',
    description: 'A deep-cleansing and hydrating facial tailored to your specific skin needs.',
    price: '$150',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Indulge in our range of bespoke beauty treatments, crafted with precision and care.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            const image = PlaceHolderImages.find((img) => img.id === service.id);
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-video relative">
                      <Image
                        src={image.imageUrl}
                        alt={service.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-6 pt-0">
                  <p className="text-2xl font-bold font-headline text-primary-foreground">{service.price}</p>
                  <Button asChild className="font-bold bg-accent text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-[0_0_15px_hsl(var(--accent))]">
                    <Link href="#booking">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
