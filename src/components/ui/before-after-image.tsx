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
    <Card className="group relative aspect-square w-full overflow-hidden rounded-xl border-2 border-primary/20 shadow-lg transition-all hover:border-primary">
      <Image
        src={afterSrc}
        alt="After"
        fill
        className="object-cover"
        data-ai-hint={afterHint}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src={beforeSrc}
        alt="Before"
        fill
        className="object-cover opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        data-ai-hint={beforeHint}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
        BEFORE
      </div>
      <div className="absolute top-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        AFTER
      </div>
    </Card>
  );
}
