import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

const WHATSAPP_LINK = `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`;


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-2xl font-headline font-bold text-foreground tracking-wider">
          <Sparkles className="h-8 w-8 text-primary" />
          <span>Sua Clínica</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="font-bold text-base glow-on-hover hover:scale-105">
          <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agende Agora</Link>
        </Button>
      </div>
    </header>
  );
}
