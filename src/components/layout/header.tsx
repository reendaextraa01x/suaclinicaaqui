import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-headline font-bold text-primary-foreground">
          Clínica de Estética
        </Link>
        <Button asChild className="font-bold transition-all hover:shadow-[0_0_15px_hsl(var(--primary))] hover:scale-105">
          <Link href="#booking">Book Now</Link>
        </Button>
      </div>
    </header>
  );
}
