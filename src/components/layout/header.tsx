import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-3xl font-headline font-bold text-foreground tracking-wider">
          <Sparkles className="h-8 w-8 text-primary" />
          <span>Sua Clínica</span>
        </Link>
        <Button asChild className="font-bold text-lg glow-on-hover hover:scale-105">
          <Link href="#booking">Agende Agora</Link>
        </Button>
      </div>
    </header>
  );
}
