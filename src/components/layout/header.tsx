import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-3xl font-headline font-bold text-white tracking-wider">
          Clínica de Estética
        </Link>
        <Button asChild className="font-bold text-lg glow-on-hover hover:scale-105">
          <Link href="#booking">Book Now</Link>
        </Button>
      </div>
    </header>
  );
}
