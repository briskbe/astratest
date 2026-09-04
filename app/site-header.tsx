import { ArrowUpRight } from 'lucide-react';
import { MobileNavigation } from './site-interactions';

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? ' brand-footer' : ''}`}
      href="/"
      aria-label="Armatex — home"
    >
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M4 33 17 7h8L12 33H4Zm14 0 9-18 9 18h-9l-4-8-4 8h-1Z"
          fill="currentColor"
        />
      </svg>
      <span>
        armatex<span className="brand-point">.</span>
      </span>
    </a>
  );
}

export function SiteHeader({ active }: { active?: 'expertise' }) {
  return (
    <div className="dark-top">
      <header className="header wrap">
        <Brand />
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          <a
            href="/expertise"
            aria-current={active === 'expertise' ? 'page' : undefined}
          >
            Onze expertise
          </a>
          <a href="/#inspiratie">In beeld</a>
          <a href="/#aanpak">Onze aanpak</a>
          <a href="/#armatex">Over Armatex</a>
        </nav>
        <div className="header-right">
          <a className="header-contact" href="/#contact">
            Bespreek je project <ArrowUpRight size={18} />
          </a>
          <MobileNavigation active={active} />
        </div>
      </header>
    </div>
  );
}
