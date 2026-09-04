import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Lightbulb,
  PlugZap,
  Play,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { ServiceOverview } from './site-interactions';
import { Brand, SiteHeader } from './site-header';
import { AtmosphereFilm, HeroMedia, InspirationGallery } from './site-media';
import { mediaAssets } from './media-assets';

const steps = [
  {
    number: '01',
    title: 'Eerst luisteren.',
    text: 'Wat wil je realiseren? We bekijken je plannen, stellen de juiste vragen en denken mee over wat je nodig hebt.',
  },
  {
    number: '02',
    title: 'Dan helder plannen.',
    text: 'Je krijgt een concreet voorstel. We stemmen de oplossing en uitvoering af op je ruimte, wensen en budget.',
  },
  {
    number: '03',
    title: 'Goed uitvoeren.',
    text: 'We zorgen voor een doordachte installatie, een verzorgde afwerking en een duidelijke uitleg bij de oplevering.',
  },
];

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Naar de inhoud
      </a>
      <SiteHeader />
      <main id="main">
        <div className="dark-top">
          <section className="hero wrap" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> ELEKTRICITEIT. MET INZICHT.
              </p>
              <h1 id="hero-title">
                Sterk in stroom.
                <br />
                <span>
                  Thuis in
                  <br className="desktop-break" /> techniek.
                </span>
              </h1>
              <p className="hero-intro">
                Van het eerste lichtpunt tot een slimme installatie. Armatex
                brengt energie, comfort en zekerheid in je woning of
                onderneming.
              </p>
              <div className="hero-actions">
                <a className="button button-lime" href="/expertise">
                  Ontdek onze expertise <ArrowUpRight size={20} />
                </a>
                <a className="text-link" href="#sfeerfilm">
                  Bekijk de sfeerfilm <Play size={16} />
                </a>
              </div>
              <div className="hero-assurance">
                <ShieldCheck size={21} />
                <span>Doordacht advies. Vakkundig uitgevoerd.</span>
              </div>
            </div>
            <div className="hero-visual">
              <HeroMedia source={mediaAssets.hero} />
              <div className="visual-label">
                <span className="status-dot" /> SLIM VAN BINNEN. STERK VAN
                BUITEN.
              </div>
              <div className="visual-bottom">
                <div className="light-icon">
                  <Lightbulb size={28} strokeWidth={1.35} />
                </div>
                <p>
                  Techniek die werkt.
                  <br />
                  <strong>Comfort dat je voelt.</strong>
                </p>
                <a
                  href="#expertise"
                  className="circle-link"
                  aria-label="Ontdek onze expertise"
                >
                  <ArrowDown size={23} />
                </a>
              </div>
            </div>
          </section>
          <div className="hero-foot wrap">
            <span>VOOR WONINGEN & ONDERNEMINGEN</span>
            <a href="#expertise">
              Goed aangesloten op morgen <ArrowDown size={14} />
            </a>
          </div>
        </div>
        <div className="specialties" aria-label="Onze specialisaties">
          <div className="wrap specialties-inner">
            <span>
              <Zap /> Elektriciteit
            </span>
            <span>
              <Lightbulb /> Verlichting
            </span>
            <span>
              <PlugZap /> Slimme installaties
            </span>
            <span>
              <ShieldCheck /> Zekerheid
            </span>
          </div>
        </div>
        <section
          className="expertise section wrap"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <p className="section-label">
            <span>01</span> ONZE EXPERTISE
          </p>
          <div className="section-heading">
            <h2 id="expertise-title">
              Elke aansluiting telt.
              <br />
              <span>Die met jou ook.</span>
            </h2>
            <p>
              Je plannen vormen het vertrekpunt. Wij vertalen ze naar techniek
              die klopt — vandaag én met het oog op morgen.
            </p>
          </div>
          <ServiceOverview />
          <div className="expertise-note">
            <span>
              <Check size={17} /> Nieuwbouw of renovatie
            </span>
            <span>
              <Check size={17} /> Particulier of professioneel
            </span>
            <span>
              <Check size={17} /> Advies tot afwerking
            </span>
          </div>
        </section>
        <section
          className="visual-section"
          id="inspiratie"
          aria-labelledby="visual-title"
        >
          <div className="wrap">
            <p className="section-label">
              <span>02</span> RUIMTE VOOR INSPIRATIE
            </p>
            <div className="section-heading visual-heading">
              <h2 id="visual-title">
                Techniek die je ziet.
                <br />
                <span>Comfort dat je voelt.</span>
              </h2>
              <p>
                Een huis wordt pas een thuis als alles samenkomt. Ontdek wat
                doordachte verlichting en slimme energie kunnen doen.
              </p>
            </div>
            <InspirationGallery />
            <div className="visual-caption">
              <span>Gegenereerde sfeerbeelden ter inspiratie.</span>
              <a href="#contact">
                Wat kunnen we voor jouw ruimte doen? <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section
          className="about-section"
          id="armatex"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid">
            <div className="about-heading">
              <p className="section-label">
                <span>03</span> DE KRACHT VAN ARMATEX
              </p>
              <h2 id="about-title">
                Achter goed comfort
                <br />
                zit <span>goed vakwerk.</span>
              </h2>
              <p>
                Je ziet het aan de afwerking. Je merkt het aan het gemak. En je
                voelt het wanneer alles gewoon werkt.
              </p>
              <a className="text-link" href="#aanpak">
                Maak kennis met onze aanpak <ArrowUpRight size={19} />
              </a>
            </div>
            <div className="about-values">
              <div>
                <span className="value-number">01 /</span>
                <div>
                  <h3>Meedenken vanaf de start</h3>
                  <p>
                    Een praktische oplossing begint bij inzicht in jouw plannen.
                    We kijken verder dan de aansluiting alleen.
                  </p>
                </div>
              </div>
              <div>
                <span className="value-number">02 /</span>
                <div>
                  <h3>Oog voor de afwerking</h3>
                  <p>
                    De techniek achter de muur verdient evenveel aandacht als
                    het lichtpunt ervoor.
                  </p>
                </div>
              </div>
              <div>
                <span className="value-number">03 /</span>
                <div>
                  <h3>Ruimte voor morgen</h3>
                  <p>
                    Je leven verandert. Daarom denken we bij elke installatie
                    ook aan wat je later nodig kunt hebben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="film-section wrap"
          id="sfeerfilm"
          aria-labelledby="film-title"
        >
          <div className="film-heading">
            <div>
              <p className="section-label">
                <span>04</span> ARMATEX IN BEELD
              </p>
              <h2 id="film-title">
                Van een goed idee
                <br />
                naar een fijn gevoel.
              </h2>
            </div>
            <p>
              Een warme avond. Een huis dat met je meedenkt. En energie voor de
              volgende dag.
            </p>
          </div>
          <AtmosphereFilm source={mediaAssets.film} />
          <p className="film-note">
            Een korte montage van gegenereerde sfeerbeelden. Verlichting,
            wooncomfort en laadoplossingen in één verhaal.
          </p>
        </section>
        <section
          className="approach section wrap"
          id="aanpak"
          aria-labelledby="approach-title"
        >
          <p className="section-label">
            <span>05</span> ONZE AANPAK
          </p>
          <div className="section-heading">
            <h2 id="approach-title">
              Van eerste idee
              <br />
              tot laatste lichtpunt.
            </h2>
            <p>
              Geen onnodig ingewikkeld verhaal. Wel persoonlijk contact, heldere
              afspraken en aandacht voor je project.
            </p>
          </div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.number}>
                <div className="step-track">
                  <span>{step.number}</span>
                  {index < steps.length - 1 && (
                    <ChevronRight size={18} aria-hidden="true" />
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap contact-inner">
            <div>
              <p className="section-label">JOUW PLANNEN. ONZE ENERGIE.</p>
              <h2 id="contact-title">
                Mooi werk begint
                <br />
                met een <span>goed gesprek.</span>
              </h2>
              <p className="contact-description">
                Een nieuwbouw, renovatie of een slim idee?
                <br />
                Armatex denkt graag met je mee.
              </p>
              <p className="contact-pending">
                <span className="status-dot" /> Onze contactgegevens zijn
                binnenkort beschikbaar.
              </p>
            </div>
            <ArrowUpRight
              className="contact-arrow"
              strokeWidth={1}
              aria-hidden="true"
            />
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
            <a href="/expertise">Expertise</a>
            <a href="#inspiratie">In beeld</a>
            <a href="#aanpak">Aanpak</a>
            <a href="#contact">Contact</a>
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
