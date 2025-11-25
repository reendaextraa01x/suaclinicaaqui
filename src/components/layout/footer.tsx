import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-primary/20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-center text-sm text-primary-foreground/80 sm:text-left">
          &copy; {new Date().getFullYear()} Clínica de Estética. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground" prefetch={false}>
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground" prefetch={false}>
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground" prefetch={false}>
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
