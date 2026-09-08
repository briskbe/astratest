'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
export function MobileNavigation({ active }: { active?: 'expertise' }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="menu-trigger" aria-label="Open menu">
          <Menu />
        </SheetTrigger>
        <SheetContent className="brisk-menu" showCloseButton={false}>
          <SheetTitle>Brisk</SheetTitle>
          <SheetDescription className="sr-only">
            Navigeer door onze website.
          </SheetDescription>
          <SheetClose className="menu-close" aria-label="Sluit menu">
            <X />
          </SheetClose>
          <nav>
            {[
              ['Ons werk', '/#werk'],
              ['Expertise', '/expertise'],
              ['Product design', '/#design'],
              ['Over Brisk', '/#over'],
              ['Contact', '/#contact'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={
                  active === 'expertise' && href === '/expertise'
                    ? 'page'
                    : undefined
                }
              >
                {label}
                <ArrowUpRight />
              </Link>
            ))}
          </nav>
          <a href="tel:+32470070981">+32 470 070 981</a>
        </SheetContent>
      </Sheet>
    </div>
  );
}
