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
    title: 'Extensão de Cílios',
    description: 'Extensões de cílios personalizadas para adicionar volume e comprimento para um visual deslumbrante.',
    price: 'R$120',
  },
  {
    id: 'service-lash-lifting',
    title: 'Lash Lifting',
    description: 'Um tratamento semi-permanente que dá aos seus cílios naturais a ilusão de estarem perfeitamente curvados.',
    price: 'R$80',
  },
  {
    id: 'service-eyebrow-design',
    title: 'Design de Sobrancelhas',
    description: 'Modelagem, coloração e estilização para criar o arco de sobrancelha perfeito para o seu rosto.',
    price: 'R$50',
  },
  {
    id: 'service-manicure',
    title: 'Manicure de Luxo',
    description: 'Cuidado completo das unhas, esfoliação, massagem e esmalte para mãos bonitas.',
    price: 'R$65',
  },
  {
    id: 'service-pedicure',
    title: 'Spa dos Pés',
    description: 'Relaxe e rejuvenesça com um banho, esfoliação, massagem e esmalte perfeito.',
    price: 'R$75',
  },
  {
    id: 'service-facial',
    title: 'Facial Assinatura',
    description: 'Um tratamento facial de limpeza profunda e hidratação adaptado às suas necessidades específicas de pele.',
    price: 'R$150',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Nossos Serviços</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Delicie-se com a nossa gama de tratamentos de beleza personalizados, elaborados com precisão e cuidado.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            const image = PlaceHolderImages.find((img) => img.id === service.id);
            return (
              <Card key={service.id} className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border-transparent hover:border-primary/30 bg-card">
                <CardHeader className="p-0">
                  {image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={service.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="font-headline text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-foreground/70">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-6 pt-0">
                  <p className="text-2xl font-bold font-headline text-primary">{service.price}</p>
                  <Button asChild className="font-bold bg-secondary text-secondary-foreground glow-on-hover-accent hover:scale-105">
                    <Link href="#booking">Agendar</Link>
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
