import { ClientLogos } from '../client-logos';
import type { Metadata } from 'next';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SiteHeader, SiteFooter, Contact } from '../site-header';
import { WorkFeatures } from './work-feature';
import { ProjectIndex } from './project-index';
import { ProductGallery, ShowcaseFilm } from '../site-media';
import './work.css';
export const metadata: Metadata = {
  title: 'Ons werk | Brisk — Digitaal werk met karakter',
  description:
    'Ontdek websites, webshops en productdesign van Brisk. Van SANAE en Mirkoz Vending tot Landelijk Glas: bekijk ons werk en vind inspiratie voor je volgende project.',
};
export default function Work() {
  return (
    <div className="work-page" id="top">
      <a className="skip-link" href="#main">
        Naar de inhoud
      </a>
      <SiteHeader active="werk" />
      <main id="main">
        <section className="work-hero shell" aria-labelledby="work-title">
          <div className="work-eyebrow">
            <span className="status-dot" /> ONS WERK{' '}
            <span>DESIGN × DEVELOPMENT</span>
          </div>
          <div className="work-hero-grid">
            <div className="work-hero-copy">
              <h1 id="work-title">
                Werk dat
                <br />
                blijft
                <br />
                <em>hangen.</em>
              </h1>
              <p>
                Een eigen verhaal. Een uitgesproken karakter.
                <br />
                Digitale ervaringen die je bijblijven.
              </p>
              <a className="work-scroll-link" href="#selectie">
                <span>
                  <ArrowDown size={21} />
                </span>
                Ontdek de selectie
              </a>
            </div>
            <div
              className="work-collage"
              aria-label="Een eerste blik op ons werk"
            >
              <a className="collage-piece collage-sanae" href="#sanae">
                <span>
                  <i /> SANAE ALIGN & GLOW <ArrowUpRight size={15} />
                </span>
                <img
                  src="/brisk/work/sanae-align.jpg"
                  width="2200"
                  height="1375"
                  alt="SANAE: verfijnde website met warme tinten en elegante typografie"
                  fetchPriority="high"
                />
              </a>
              <a className="collage-piece collage-mirkoz" href="#mirkoz">
                <span>
                  <i /> MIRKOZ VENDING <ArrowUpRight size={15} />
                </span>
                <img
                  src="/brisk/work/mirkozvending.jpg"
                  width="2200"
                  height="1375"
                  alt="Mirkoz Vending: een krachtige presentatie in zwart en rood"
                />
              </a>
              <a
                className="collage-piece collage-product"
                href="#product-design"
              >
                <img
                  src="/brisk/design/29.jpg"
                  width="1500"
                  height="1127"
                  alt="Kleurrijk mobiel productdesign van Brisk"
                />
                <span>
                  PRODUCT DESIGN <ArrowUpRight size={15} />
                </span>
              </a>
              <span className="collage-caption">
                VAN EERSTE INDRUK
                <br />
                TOT LAATSTE DETAIL.
              </span>
            </div>
          </div>
          <div className="work-hero-bottom">
            <span>
              <b>17</b> websites & webshops
            </span>
            <span>
              <b>55</b> productdesigns
            </span>
            <a href="#projecten">
              Ontdek alle projecten <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <section className="work-selection-intro shell" id="selectie">
          <p className="eyebrow">01 / IN DE SPOTLIGHT</p>
          <h2>
            Drie merken.
            <br />
            <em>Drie eigen werelden.</em>
          </h2>
          <p>
            Een selectie die laat zien hoe verschillend een sterke digitale
            ervaring kan aanvoelen.
          </p>
        </section>
        <WorkFeatures />
        <section className="work-design" id="product-design">
          <div className="shell">
            <div className="work-design-top">
              <div>
                <p className="eyebrow">02 / PRODUCT DESIGN</p>
                <h2>
                  Tot in de
                  <br />
                  <em>vingertoppen.</em>
                </h2>
              </div>
              <p>
                Een app die vertrouwd voelt. Een dashboard dat overzicht brengt.
                Het verschil zit in hoe je het gebruikt.
              </p>
            </div>
            <div className="work-design-film">
              <div className="design-film-copy">
                <span className="design-film-label">
                  <span className="status-dot" /> BRISK DESIGN REEL
                </span>
                <h3>
                  Van eerste schets
                  <br />
                  naar <em>elke interactie.</em>
                </h3>
                <p>
                  Een blik in onze wereld van interfaces, apps en digitale
                  producten.
                </p>
                <a href="#ontwerpen">
                  Duik in de ontwerpen <ArrowDown size={19} />
                </a>
              </div>
              <ShowcaseFilm />
            </div>
            <div className="work-design-showcase" id="ontwerpen">
              <div className="work-design-gallery-label">
                <span>SELECTED INTERFACES</span>
                <span>BEKIJK DE DETAILS ↗</span>
              </div>
              <ProductGallery initialCount={4} />
            </div>
          </div>
        </section>
        <section className="work-archive shell" id="projecten">
          <div className="work-archive-top">
            <div>
              <p className="eyebrow">03 / PROJECTINDEX</p>
              <h2>
                Nog meer
                <br />
                <em>Brisk gebouwd.</em>
              </h2>
            </div>
            <div>
              <span className="work-count">
                17<span>WEBSITES & WEBSHOPS</span>
              </span>
              <p>
                Van ondernemers met een eerste idee tot merken met grote
                plannen. Ontdek alle websites.
              </p>
            </div>
          </div>
          <ProjectIndex />
        </section>
        <section className="work-clients shell">
          <p className="eyebrow">IN GOED GEZELSCHAP</p>
          <ClientLogos />
          <p>En nog veel meer mooie samenwerkingen.</p>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
