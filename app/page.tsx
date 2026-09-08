import Link from 'next/link';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SiteHeader, SiteFooter, Contact } from './site-header';
import { ProductGallery, Portfolio, ShowcaseFilm } from './site-media';
import { services, process } from './brisk-data';
import { projects } from './projects';
export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Naar de inhoud
      </a>
      <SiteHeader />
      <main id="main">
        <section className="brisk-hero shell">
          <div className="hero-kicker">
            <span className="status-dot" /> DESIGN & DEVELOPMENT STUDIO{' '}
            <span className="hero-location">VAN IDEE TOT IMPACT</span>
          </div>
          <div className="hero-heading">
            <h1>
              Digitale ambities.
              <br />
              <em>Brisk gebouwd.</em>
            </h1>
            <div className="hero-description">
              <p>
                Wij bouwen websites, webshops en software op maat. Doordacht in
                gebruik. Onmiskenbaar in design.
              </p>
              <Link href="#werk" className="button button-lime">
                Ontdek ons werk <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hero-showcase">
            <div className="showcase-caption">
              <span>DESIGN DAT VERDER GAAT</span>
              <h2>
                Mooi is het begin.
                <br />
                Werken is de essentie.
              </h2>
              <a href="#design">
                Ontdek product design <ArrowUpRight size={19} />
              </a>
            </div>
            <ShowcaseFilm />
            <div className="showcase-index">
              BRISK SELECTED WORK <span>PRODUCT DESIGN</span>
            </div>
          </div>
          <a className="hero-scroll" href="#werk">
            Scroll om te ontdekken <ArrowDown size={16} />
          </a>
        </section>
        <section className="client-strip shell">
          <p>IN GOED GEZELSCHAP</p>
          <div>
            <span className="client-nmbs">NMBS</span>
            <span>idewe</span>
            <span>De Watergroep</span>
            <span>
              RBFA <small>Voetbalbond</small>
            </span>
            <span>museumPASSmusées</span>
          </div>
        </section>
        <section className="section shell" id="werk">
          <div className="section-top">
            <p className="eyebrow">
              <span>01 /</span> GESELECTEERD WERK
            </p>
            <span className="section-note">VAN AMBITIE NAAR ONLINE</span>
          </div>
          <div className="section-heading">
            <h2>
              Elk merk zijn verhaal.
              <br />
              <em>Elke website zijn karakter.</em>
            </h2>
            <p>
              Een selectie websites die we hebben gebouwd. Verschillende
              sectoren. Dezelfde aandacht voor wat een merk bijzonder maakt.
            </p>
          </div>
          <Portfolio projects={projects} />
        </section>
        <section className="expertise-band" id="expertise">
          <div className="shell">
            <div className="section-top">
              <p className="eyebrow">
                <span>02 /</span> WAT WE DOEN
              </p>
              <Link href="/expertise" className="inline-link">
                Onze expertise <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="service-heading">
              <h2>
                Goed design ontmoet
                <br />
                <em>sterke development.</em>
              </h2>
              <p>
                Van een overtuigende eerste indruk tot software die het verschil
                maakt in je dagelijkse werk.
              </p>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <Link
                  href={`/expertise#${service.id}`}
                  key={service.id}
                  className="service-row"
                >
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.line}</p>
                  <ArrowUpRight size={28} strokeWidth={1.2} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section shell design-section" id="design">
          <div className="section-top">
            <p className="eyebrow">
              <span>03 /</span> PRODUCT DESIGN
            </p>
            <span className="section-note">DETAILS MAKEN HET VERSCHIL</span>
          </div>
          <div className="section-heading">
            <h2>
              Niet alleen hoe het eruitziet.
              <br />
              <em>Vooral hoe het voelt.</em>
            </h2>
            <p>
              Apps, dashboards en digitale ervaringen. Ontwerpen waarin vorm en
              gebruik samenkomen.
            </p>
          </div>
          <ProductGallery />
        </section>
        <section className="about-section shell" id="over">
          <p className="eyebrow">
            <span>04 /</span> OVER BRISK
          </p>
          <div className="about-grid">
            <h2>
              Korte lijnen.
              <br />
              Grote ideeën.
              <br />
              <em>Sterk resultaat.</em>
            </h2>
            <div>
              <p className="about-lead">
                Brisk brengt design en development samen. Zodat jouw idee van de
                eerste schets tot de laatste interactie klopt.
              </p>
              <p>
                We werken voor ondernemers en organisaties die digitaal vooruit
                willen. Met een website die hun verhaal vertelt, een webshop die
                prettig werkt of software die precies past.
              </p>
              <p>
                Van NMBS en Idewe tot De Watergroep, RBFA Voetbalbond en
                Museumpass: we werken voor uiteenlopende klanten, met aandacht
                voor hun eigen uitdagingen.
              </p>
              <a className="inline-link" href="#contact">
                Laten we kennismaken <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>
        <section className="section shell" id="aanpak">
          <div className="section-top">
            <p className="eyebrow">
              <span>05 /</span> ONZE AANPAK
            </p>
            <span className="section-note">SAMEN VAN START TOT LANCERING</span>
          </div>
          <div className="section-heading">
            <h2>
              Een helder proces.
              <br />
              <em>Een beter eindresultaat.</em>
            </h2>
          </div>
          <div className="process-grid">
            {process.map(([title, text], i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
