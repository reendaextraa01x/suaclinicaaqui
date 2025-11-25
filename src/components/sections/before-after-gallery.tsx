'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BeforeAfterImage } from '@/components/ui/before-after-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryPairs = [
  { beforeId: 'before-after-1-before', afterId: 'before-after-1-after' },
  { beforeId: 'before-after-2-before', afterId: 'before-after-2-after' },
  { beforeId: 'before-after-3-before', afterId: 'before-after-3-after' },
  { beforeId: 'before-after-4-before', afterId: 'before-after-4-after' },
  { beforeId: 'before-after-5-before', afterId: 'before-after-5-after' },
  { beforeId: 'before-after-6-before', afterId: 'before-after-6-after' },
];

export function BeforeAfterGallery() {
  const images = galleryPairs.map(pair => {
    const beforeImg = PlaceHolderImages.find(img => img.id === pair.beforeId);
    const afterImg = PlaceHolderImages.find(img => img.id === pair.afterId);
    return { beforeImg, afterImg };
  });

  return (
    <section id="gallery" className="w-full bg-muted/40 py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">Nossas Transformações</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Testemunhe os resultados impressionantes do nosso toque especializado. Passe o mouse sobre cada imagem para ver a mudança.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((pair, index) => (
              pair.beforeImg && pair.afterImg && (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <BeforeAfterImage
                      beforeSrc={pair.beforeImg.imageUrl}
                      afterSrc={pair.afterImg.imageUrl}
                      beforeHint={pair.beforeImg.imageHint}
                      afterHint={pair.afterImg.imageHint}
                    />
                  </div>
                </CarouselItem>
              )
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex text-primary hover:bg-muted" />
          <CarouselNext className="hidden sm:flex text-primary hover:bg-muted" />
        </Carousel>
      </div>
    </section>
  );
}
