import type { Metadata } from 'next';
import { ArrowUpRight, ArrowDown, Check } from 'lucide-react';
import { SiteHeader, SiteFooter, Contact } from '../site-header';
import { services } from '../brisk-data';
export const metadata: Metadata = {
  title: 'Expertise | Brisk — Design & development',
  description:
    'Websites, webshops, software op maat en product design. Ontdek hoe Brisk je digitale ambities vertaalt naar een sterk product.',
};
export default function Expertise() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Naar de inhoud
      </a>
      <SiteHeader active="expertise" />
      <main id="main">
        <section className="expertise-hero shell">
          <p className="eyebrow">ONZE EXPERTISE</p>
          <h1>
            Van ‘wat als’
            <br />
            naar <em>werkelijkheid.</em>
          </h1>
          <div className="expertise-intro">
            <p>
              Je brengt de ambitie.
              <br />
              Wij verbinden strategie, design en development.
            </p>
            <a className="button button-lime" href="#websites">
              Ontdek de mogelijkheden <ArrowDown size={20} />
            </a>
          </div>
          <nav className="expertise-nav" aria-label="Onze diensten">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                <span>{s.number}</span>
                {s.title}
                <ArrowDown size={16} />
              </a>
            ))}
          </nav>
        </section>
        {services.map((s, i) => (
          <section
            className={`expertise-detail ${i % 2 ? 'reversed' : ''}`}
            id={s.id}
            key={s.id}
          >
            <div className="shell detail-grid">
              <div className="detail-copy">
                <p className="eyebrow">
                  {s.number} / {s.title.toUpperCase()}
                </p>
                <h2>{s.line}</h2>
                <p>{s.text}</p>
                <ul>
                  {s.details.map((d) => (
                    <li key={d}>
                      <Check size={16} />
                      {d}
                    </li>
                  ))}
                </ul>
                <a className="inline-link" href="#contact">
                  Bespreek je {s.id === 'software' ? 'idee' : 'project'}{' '}
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <div className="detail-visual">
                <img
                  src={s.image}
                  alt={`Brisk ontwerpvoorbeeld voor ${s.title.toLowerCase()}`}
                  width="1500"
                  height="1127"
                  loading="lazy"
                />
                <span>
                  {s.title} <span>DESIGN BY BRISK</span>
                </span>
              </div>
            </div>
          </section>
        ))}
        <section className="expertise-end shell">
          <p className="eyebrow">VAN IDEE NAAR BEWIJS</p>
          <h2>Ons werk vertelt de rest.</h2>
          <a href="/werk" className="button button-outline">
            Bekijk onze projecten <ArrowUpRight size={20} />
          </a>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
