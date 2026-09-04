import type { Metadata } from 'next';
import {
  ArrowDown,
  ArrowUpRight,
  Cable,
  Check,
  ChevronRight,
  HousePlug,
  Lightbulb,
  PlugZap,
  LayoutGrid,
} from 'lucide-react';
import { Brand, SiteHeader } from '../site-header';
import './expertise.css';

export const metadata: Metadata = {
  title: 'Onze expertise | Elektriciteit, verlichting & slim wonen | Armatex',
  description:
    'Ontdek de expertise van Armatex: elektrische installaties, verlichting op maat, slimme bediening en laadoplossingen. Voor nieuwbouw, renovatie en uitbreiding.',
};
const disciplines = [
  {
    id: 'elektriciteit',
    title: 'Elektriciteit',
    sub: 'De basis die klopt',
    icon: Cable,
  },
  {
    id: 'verlichting',
    title: 'Verlichting',
    sub: 'Licht met gevoel',
    icon: Lightbulb,
  },
  {
    id: 'slim-wonen',
    title: 'Slim wonen',
    sub: 'Comfort dat meedenkt',
    icon: HousePlug,
  },
  {
    id: 'laden',
    title: 'Laadoplossingen',
    sub: 'Energie op jouw ritme',
    icon: PlugZap,
  },
];
export default function ExpertisePage() {
  return (
    <div className="expertise-page" id="top">
      <a className="skip-link" href="#expertise-main">
        Naar de inhoud
      </a>
      <SiteHeader active="expertise" />
      <main id="expertise-main">
        <section className="ex-hero">
          <div className="wrap">
            <nav className="ex-breadcrumb" aria-label="Broodkruimel">
              <a href="/">Home</a>
              <ChevronRight size={13} />
              <span aria-current="page">Onze expertise</span>
            </nav>
            <div className="ex-intro">
              <div>
                <p className="eyebrow">
                  <span className="status-dot" /> VAKKENNIS. TOT IN DE DETAILS.
                </p>
                <h1>
                  Goed aangesloten.
                  <br />
                  <span>Op jouw leven.</span>
                </h1>
              </div>
              <div className="ex-intro-side">
                <span className="ex-small-mark">ARMATEX / EXPERTISE</span>
                <p>
                  Vier expertises. Eén doordacht geheel.
                  <br />
                  Van de techniek achter je muur tot het comfort dat je elke dag
                  voelt.
                </p>
                <a href="#disciplines">
                  Ontdek wat we doen <ArrowDown size={18} />
                </a>
              </div>
            </div>
            <div className="ex-hero-image">
              <img
                src="/images/expertise-light.jpg"
                alt="Gegenereerd architecturaal sfeerbeeld van een gang met indirecte verlichting en een warme houten wand"
                width="1536"
                height="1024"
                fetchPriority="high"
              />
              <div className="ex-image-caption">
                <span>ONZICHTBARE TECHNIEK.</span>
                <p>Een zichtbaar verschil.</p>
              </div>
              <span className="ex-image-index">01 — 04</span>
            </div>
          </div>
        </section>
        <nav
          className="ex-disciplines"
          id="disciplines"
          aria-label="Kies een expertise"
        >
          <div className="wrap">
            {disciplines.map(({ id, title, sub, icon: Icon }, i) => (
              <a href={`#${id}`} key={id}>
                <span className="ex-discipline-number">0{i + 1}</span>
                <Icon size={25} strokeWidth={1.35} />
                <span>
                  <strong>{title}</strong>
                  <small>{sub}</small>
                </span>
                <ArrowDown size={17} />
              </a>
            ))}
          </div>
        </nav>
        <section
          className="wrap ex-service ex-installation"
          id="elektriciteit"
          aria-labelledby="electrical-title"
        >
          <div className="ex-service-copy">
            <p className="section-label">
              <span>01</span> ELEKTRISCHE INSTALLATIES
            </p>
            <h2 id="electrical-title">
              Een sterke basis.
              <br />
              <span>Voor alles wat volgt.</span>
            </h2>
            <p>
              Een goede installatie begint met een logisch plan. Aansluitpunten
              waar je ze nodig hebt, een overzichtelijk verdeelbord en ruimte om
              later uit te breiden.
            </p>
            <ul className="ex-benefits">
              <li>
                <Check />
                <div>
                  <h3>Nieuwbouw, van bij de start</h3>
                  <p>
                    We denken mee over de indeling, je dagelijkse gebruik en de
                    aansluitingen die daarbij horen.
                  </p>
                </div>
              </li>
              <li>
                <Check />
                <div>
                  <h3>Renoveren met een helder plan</h3>
                  <p>
                    Je bestaande installatie aanpassen aan nieuwe ruimtes,
                    nieuwe toestellen en nieuwe wensen.
                  </p>
                </div>
              </li>
              <li>
                <Check />
                <div>
                  <h3>Uitbreiden zonder losse eindjes</h3>
                  <p>
                    Extra aansluitpunten of een nieuwe functie? We bekijken hoe
                    alles samen kan werken.
                  </p>
                </div>
              </li>
            </ul>
            <a className="ex-service-link" href="/#contact">
              Bespreek je installatie <ArrowUpRight size={19} />
            </a>
          </div>
          <aside
            className="ex-plan"
            aria-label="Schematisch overzicht van een doordachte installatie"
          >
            <div className="ex-plan-top">
              <span>HET GEHEEL KLOPT.</span>
              <LayoutGrid size={22} strokeWidth={1.25} />
            </div>
            <h3>
              Eén installatie.
              <br />
              Alles in balans.
            </h3>
            <div className="ex-flow">
              <div className="ex-flow-start">
                <span className="status-dot" /> Jouw wensen & je ruimte
              </div>
              <span className="ex-flow-line" />
              <div className="ex-flow-core">
                <Cable size={27} strokeWidth={1.4} />
                <div>
                  <strong>Een doordachte installatie</strong>
                  <span>Logisch verdeeld. Netjes afgewerkt.</span>
                </div>
              </div>
              <span className="ex-flow-line" />
              <div className="ex-flow-outputs">
                <div>
                  <Lightbulb />
                  <span>Licht</span>
                </div>
                <div>
                  <PlugZap />
                  <span>Stroom</span>
                </div>
                <div>
                  <HousePlug />
                  <span>Comfort</span>
                </div>
              </div>
            </div>
            <p className="ex-plan-bottom">
              Goed bedacht vandaag.
              <br />
              <strong>Ruimte voor morgen.</strong>
            </p>
          </aside>
        </section>
        <section
          className="ex-soft-section"
          id="verlichting"
          aria-labelledby="lighting-title"
        >
          <div className="wrap ex-service ex-photo-service">
            <figure className="ex-service-image">
              <img
                src="/images/armatex-interior.jpg"
                alt="Gegenereerd interieur met warme indirecte verlichting en een hanglamp boven de eettafel"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <Lightbulb size={21} strokeWidth={1.4} />
                <span>De juiste sfeer begint bij het juiste licht.</span>
              </figcaption>
            </figure>
            <div className="ex-service-copy">
              <p className="section-label">
                <span>02</span> VERLICHTING OP MAAT
              </p>
              <h2 id="lighting-title">
                Goed licht
                <br />
                <span>verandert alles.</span>
              </h2>
              <p>
                Helder genoeg om te werken. Zacht genoeg om te ontspannen. We
                stemmen je verlichting af op wat je in een ruimte doet én hoe je
                je er wilt voelen.
              </p>
              <ul className="ex-benefits">
                <li>
                  <Check />
                  <div>
                    <h3>Functioneel waar het moet</h3>
                    <p>
                      Gericht licht voor je werkblad, bureau of doorgang.
                      Precies daar waar je het nodig hebt.
                    </p>
                  </div>
                </li>
                <li>
                  <Check />
                  <div>
                    <h3>Sfeer waar het mag</h3>
                    <p>
                      Indirect licht, accenten en dimbare oplossingen die je
                      interieur tot zijn recht laten komen.
                    </p>
                  </div>
                </li>
                <li>
                  <Check />
                  <div>
                    <h3>Binnen én buiten</h3>
                    <p>
                      Van woonkamer en keuken tot gevel, terras en tuin: een
                      samenhangend lichtbeeld.
                    </p>
                  </div>
                </li>
              </ul>
              <a className="ex-service-link" href="/#contact">
                Vertel ons over je lichtplannen <ArrowUpRight size={19} />
              </a>
            </div>
          </div>
        </section>
        <section
          className="ex-smart-section"
          id="slim-wonen"
          aria-labelledby="smart-title"
        >
          <div className="wrap ex-service">
            <div className="ex-service-copy">
              <p className="section-label">
                <span>03</span> SLIM WONEN & WERKEN
              </p>
              <h2 id="smart-title">
                Minder handelingen.
                <br />
                <span>Meer thuiskomen.</span>
              </h2>
              <p>
                De beste technologie maakt het leven eenvoudiger. Met slimme
                bediening stem je je verlichting en comfort af op jouw ritme.
              </p>
              <ul className="ex-benefits">
                <li>
                  <Check />
                  <div>
                    <h3>Bediening die vanzelf spreekt</h3>
                    <p>
                      Een schakelaar op de juiste plek, of meerdere lichtpunten
                      met één handeling bedienen.
                    </p>
                  </div>
                </li>
                <li>
                  <Check />
                  <div>
                    <h3>Een sfeer voor elk moment</h3>
                    <p>
                      Van werken naar ontspannen: vooraf ingestelde lichtstanden
                      passen zich aan je moment aan.
                    </p>
                  </div>
                </li>
                <li>
                  <Check />
                  <div>
                    <h3>Zo slim als jij nodig hebt</h3>
                    <p>
                      Een praktische eerste stap of een ruimere automatisering.
                      We zoeken wat bij je past.
                    </p>
                  </div>
                </li>
              </ul>
              <a className="ex-service-link" href="/#contact">
                Ontdek wat past bij jouw woning <ArrowUpRight size={19} />
              </a>
            </div>
            <figure className="ex-service-image ex-smart-image">
              <img
                src="/images/expertise-detail.jpg"
                alt="Gegenereerd detail van een verfijnd schakelpaneel in donker metaal op een warme houten wand"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span className="status-dot" />
                <span>Groot in gemak. Verfijnd in detail.</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="wrap ex-service ex-photo-service ex-charging"
          id="laden"
          aria-labelledby="charging-title"
        >
          <figure className="ex-service-image">
            <img
              src="/images/armatex-charging.jpg"
              alt="Gegenereerd sfeerbeeld van een elektrische auto die oplaadt aan een laadpunt op een oprit"
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <PlugZap size={22} strokeWidth={1.4} />
              <span>Je eigen laadpunt. Je eigen ritme.</span>
            </figcaption>
          </figure>
          <div className="ex-service-copy">
            <p className="section-label">
              <span>04</span> LAADOPLOSSINGEN
            </p>
            <h2 id="charging-title">
              Vandaag thuiskomen.
              <br />
              <span>Morgen weer verder.</span>
            </h2>
            <p>
              Laden waar je auto toch al staat. Een eigen laadpunt maakt
              elektrisch rijden een vanzelfsprekend deel van je dag.
            </p>
            <ul className="ex-benefits">
              <li>
                <Check />
                <div>
                  <h3>Afgestemd op je installatie</h3>
                  <p>
                    We bekijken het beschikbare vermogen en hoe je laadpunt
                    samenwerkt met de rest van je verbruik.
                  </p>
                </div>
              </li>
              <li>
                <Check />
                <div>
                  <h3>Een logische plek</h3>
                  <p>
                    Oprit, garage of werkplek: we denken mee over
                    bereikbaarheid, kabelroute en dagelijks gemak.
                  </p>
                </div>
              </li>
              <li>
                <Check />
                <div>
                  <h3>Klaar voor jouw gebruik</h3>
                  <p>
                    Een oplossing die past bij je wagen, je laadmomenten en de
                    mogelijkheden van je gebouw.
                  </p>
                </div>
              </li>
            </ul>
            <a className="ex-service-link" href="/#contact">
              Bespreek je laadoplossing <ArrowUpRight size={19} />
            </a>
          </div>
        </section>
        <div className="wrap ex-photo-note">
          De beelden op deze pagina zijn gegenereerde sfeerbeelden ter
          inspiratie.
        </div>
        <section className="ex-closing">
          <div className="wrap">
            <div>
              <p className="section-label">
                VIER EXPERTISES. ÉÉN AANSPREEKPUNT.
              </p>
              <h2>
                Jouw plannen.
                <br />
                <span>Onze vakkennis.</span>
              </h2>
            </div>
            <div className="ex-closing-side">
              <p>
                Je hoeft niet alles al te weten. Een goed gesprek is genoeg om
                de juiste eerste stap te vinden.
              </p>
              <a className="button ex-dark-button" href="/#contact">
                Laten we kennismaken <ArrowUpRight size={20} />
              </a>
              <a className="ex-closing-secondary" href="/#aanpak">
                Zo pakken we het aan <ChevronRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <Brand footer />
          <p>
            Goed aangesloten.
            <br />
            Helemaal op morgen.
          </p>
          <nav aria-label="Footernavigatie">
            <a href="/">Home</a>
            <a href="/expertise" aria-current="page">
              Expertise
            </a>
            <a href="/#contact">Contact</a>
          </nav>
          <a className="back-top" href="#top" aria-label="Terug naar boven">
            <ArrowUpRight size={22} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Armatex</p>
          <span>Elektriciteit. Met inzicht.</span>
        </div>
      </footer>
    </div>
  );
}
