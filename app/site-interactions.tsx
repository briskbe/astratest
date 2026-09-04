'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Cable,
  Check,
  HousePlug,
  Lightbulb,
  Menu,
  PlugZap,
  X,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const services = [
  {
    title: 'Elektrische installaties',
    text: 'Een sterke basis voor je woning of onderneming. Veilig, logisch en netjes afgewerkt.',
    icon: Cable,
    details: [
      'Installaties voor nieuwbouw',
      'Aanpassen en uitbreiden bij renovatie',
      'Verdeelborden en aansluitpunten',
    ],
  },
  {
    title: 'Verlichting op maat',
    text: 'Het juiste licht op de juiste plek. Voor sfeer, focus en alles daartussenin.',
    icon: Lightbulb,
    details: [
      'Functionele en sfeerverlichting',
      'Verlichting voor buiten en tuin',
      'Dimbare en energiezuinige oplossingen',
    ],
  },
  {
    title: 'Slim wonen & werken',
    text: 'Meer comfort, minder handelingen. Laat je techniek samenwerken met je dagelijkse leven.',
    icon: HousePlug,
    details: [
      'Slimme bediening van verlichting',
      'Automatisering op maat van je ruimte',
      'Voorbereid op toekomstige uitbreiding',
    ],
  },
  {
    title: 'Laadoplossingen',
    text: 'Thuiskomen en opladen. Een laadpunt dat past bij je wagen én je installatie.',
    icon: PlugZap,
    details: [
      'Laadpunten voor thuis en op het werk',
      'Afgestemd op je beschikbare vermogen',
      'Praktisch advies over plaatsing en gebruik',
    ],
  },
];

export function ServiceOverview() {
  return (
    <Accordion className="service-grid" multiple>
      {services.map(({ title, text, icon: Icon, details }, index) => (
        <AccordionItem key={title} value={title} className="service-card">
          <AccordionTrigger className="service-trigger">
            <span className="service-inner">
              <span className="service-top">
                <Icon size={29} strokeWidth={1.4} />
                <span>0{index + 1}</span>
              </span>
              <span className="service-title">{title}</span>
              <span className="service-summary">{text}</span>
              <span className="service-more">
                Bekijk de mogelijkheden <ArrowUpRight size={19} />
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="service-details">
            <ul>
              {details.map((detail) => (
                <li key={detail}>
                  <Check size={15} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="menu-trigger" aria-label="Open menu">
          <Menu size={23} />
        </SheetTrigger>
        <SheetContent className="mobile-sheet" showCloseButton={false}>
          <SheetTitle className="mobile-sheet-title">armatex.</SheetTitle>
          <SheetDescription className="sr-only">
            Navigeer naar de diensten, werkwijze en contactinformatie van
            Armatex.
          </SheetDescription>
          <SheetClose className="menu-close" aria-label="Sluit menu">
            <X size={25} />
          </SheetClose>
          <nav aria-label="Mobiele navigatie">
            {[
              ['Onze expertise', '#expertise'],
              ['In beeld', '#inspiratie'],
              ['Onze aanpak', '#aanpak'],
              ['Over Armatex', '#armatex'],
              ['Contact', '#contact'],
            ].map(([label, href], i) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span>
                {label}
                <ArrowUpRight size={23} />
              </a>
            ))}
          </nav>
          <p className="mobile-menu-note">
            Sterk in stroom.
            <br />
            Thuis in techniek.
          </p>
        </SheetContent>
      </Sheet>
    </div>
  );
}
