import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { MobileNavigation } from './site-interactions';
export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={footer ? 'brisk-brand footer-brand' : 'brisk-brand'}
      aria-label="Brisk — home"
    >
      <img src="/brisk/logo-white.svg" width="155" height="40" alt="Brisk" />
    </Link>
  );
}
export function SiteHeader({ active }: { active?: 'expertise' | 'werk' }) {
  return (
    <header className="site-header shell">
      <Brand />
      <nav aria-label="Hoofdnavigatie">
        <Link
          href="/werk"
          aria-current={active === 'werk' ? 'page' : undefined}
        >
          Ons werk
        </Link>
        <Link
          href="/expertise"
          aria-current={active === 'expertise' ? 'page' : undefined}
        >
          Expertise
        </Link>
        <Link href="/#over">Over Brisk</Link>
      </nav>
      <a className="header-cta" href="/#contact">
        Let’s talk <ArrowUpRight size={17} />
      </a>
      <MobileNavigation active={active} />
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <Brand footer />
        <p>
          Goed bedacht. Sterk ontworpen.
          <br />
          Brisk gebouwd.
        </p>
        <a href="#top">Terug naar boven ↑</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Brisk</span>
        <span>Websites · Webshops · Software op maat</span>
        <a href="tel:+32470070981">+32 470 070 981</a>
      </div>
    </footer>
  );
}
export function Contact() {
  return (
    <section className="contact shell" id="contact">
      <p className="eyebrow">JOUW VOLGENDE STAP</p>
      <div className="contact-row">
        <h2>
          Een goed idee?
          <br />
          <em>Maak het Brisk.</em>
        </h2>
        <a
          className="contact-orbit"
          href="tel:+32470070981"
          aria-label="Bel Brisk om je project te bespreken"
        >
          <ArrowUpRight size={52} strokeWidth={1} />
        </a>
      </div>
      <div className="contact-bottom">
        <p>
          Vertel ons waar je naartoe wilt.
          <br />
          We denken graag met je mee.
        </p>
        <a href="tel:+32470070981">
          +32 470 070 981 <ArrowUpRight size={21} />
        </a>
      </div>
    </section>
  );
}
