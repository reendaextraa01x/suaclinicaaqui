import Image from 'next/image';
import { Card } from '@/components/ui/card';

type BeforeAfterImageProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeHint: string;
  afterHint: string;
};

export function BeforeAfterImage({
  beforeSrc,
  afterSrc,
  beforeHint,
  afterHint,
}: BeforeAfterImageProps) {
  return (
    <Card className="group relative aspect-square w-full overflow-hidden rounded-xl border-2 border-muted/50 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20">
      <Image
        src={afterSrc}
        alt="Depois"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        data-ai-hint={afterHint}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <Image
        src={beforeSrc}
        alt="Antes"
        fill
        className="object-cover opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        data-ai-hint={beforeHint}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
        ANTES
      </div>
      <div className="absolute bottom-3 left-3 rounded-md bg-black/50 px-3 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm opacity-0 transition-all duration-500 delay-200 group-hover:opacity-100">
        DEPOIS
      </div>
    </Card>
  );
}
