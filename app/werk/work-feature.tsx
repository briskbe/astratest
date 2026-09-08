import { ArrowUpRight } from 'lucide-react';
const stories = [
  {
    id: 'sanae',
    name: 'SANAE Align & Glow',
    type: 'WEBSITE · BEAUTY & WELLNESS',
    title: 'Rust die meteen binnenkomt.',
    text: 'Zachte tinten, verfijnde typografie en een portret dat het scherm vult. Een digitale eerste indruk met dezelfde rust als de wereld erachter.',
    image: 'sanae-align',
    url: 'https://sanae-align.com/',
    tone: 'sand',
    domain: 'sanae-align.com',
    tags: ['Zachte kleuren', 'Editorial design', 'Beauty & wellness'],
  },
  {
    id: 'mirkoz',
    name: 'Mirkoz Vending',
    type: 'WEBSITE · VENDING',
    title: 'Een product dat alle aandacht krijgt.',
    text: 'Krachtige letters. Rood contrast. Vendingmachines op de voorgrond. Een uitgesproken website die het product direct in de spotlight zet.',
    image: 'mirkozvending',
    url: 'https://www.mirkozvending.com/',
    tone: 'red',
    domain: 'mirkozvending.com',
    tags: ['Bold typografie', 'Product in focus', 'Sterk contrast'],
  },
  {
    id: 'landelijk',
    name: 'Landelijk Glas',
    type: 'WEBSITE · INTERIEUR',
    title: 'Ruimte voor verfijning.',
    text: 'Architectuur, warme materialen en elegante typografie. Een rustige compositie waarin het interieur voor zichzelf kan spreken.',
    image: 'landelijkglas',
    url: 'https://www.landelijkglas.be/',
    tone: 'stone',
    domain: 'landelijkglas.be',
    tags: ['Architecturale beelden', 'Warme materialen', 'Rust & ruimte'],
  },
];
export function WorkFeatures() {
  return (
    <div className="work-feature-stack">
      {stories.map((s, i) => (
        <article
          key={s.id}
          id={s.id}
          className={`work-feature work-feature-${s.tone}`}
        >
          <div className="shell">
            <header className="feature-heading">
              <div>
                <p className="eyebrow">
                  0{i + 1} / {s.type}
                </p>
                <h3>{s.name}</h3>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-live"
                aria-label={`Open de website van ${s.name} in een nieuw tabblad`}
              >
                Bekijk website <ArrowUpRight size={20} />
              </a>
            </header>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-stage"
              aria-label={`Bekijk ${s.name} — opent in een nieuw tabblad`}
            >
              <div className="feature-screen">
                <div className="feature-browser" aria-hidden="true">
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>{s.domain}</span>
                  <ArrowUpRight size={14} />
                </div>
                <img
                  src={`/brisk/work/${s.image}.jpg`}
                  width="2200"
                  height="1375"
                  alt={`De homepage van ${s.name}`}
                  loading="lazy"
                />
              </div>
              <span className="feature-open" aria-hidden="true">
                LIVE
                <br />
                BEKIJKEN <ArrowUpRight size={24} />
              </span>
              <span className="feature-stage-label" aria-hidden="true">
                BRISK × {s.name.toUpperCase()}
              </span>
            </a>
            <div className="feature-story">
              <h4>{s.title}</h4>
              <div>
                <p>{s.text}</p>
                <ul aria-label="Visuele kenmerken">
                  {s.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
