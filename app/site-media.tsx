'use client';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  Pause,
  Play,
  X,
} from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import assets from './design-assets.json';
const priority = ['29', '23', '8', '35', '39', '17', '46', '22'];
const designs = [
  ...priority.map((name) => assets.find((a) => a.name === name)!),
  ...assets.filter((a) => !priority.includes(a.name)),
];
const labels: Record<string, string> = {
  '29': 'Apps & integraties',
  '23': 'Software, op elk scherm',
  '8': 'Mobiele gebruikerservaring',
  '35': 'Overzicht in complexe data',
  '39': 'Mobile product design',
  '17': 'Van product naar presentatie',
  '46': 'Een digitale marketplace',
  '22': 'Dashboards & inzichten',
  '28': 'Connecties binnen handbereik',
  '34': 'Ruimte voor interactie',
  '47': 'Een helder bestandsbeheer',
};
export function ShowcaseFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  const manual = useRef(false);
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const query = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const update = () => {
      if (query.matches || connection?.saveData) ref.current?.pause();
      else setLoad(true);
    };
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const video = ref.current;
    if (!video || !load) return;
    let visible = true;
    const update = () => {
      if (
        visible &&
        !document.hidden &&
        !manual.current &&
        !matchMedia('(prefers-reduced-motion: reduce)').matches
      )
        void video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      video.pause();
    };
  }, [load]);
  async function toggle() {
    const video = ref.current;
    if (!video) return;
    if (playing) {
      manual.current = true;
      video.pause();
    } else {
      manual.current = false;
      if (!load) {
        video.src = '/brisk/showreel.mp4';
        setLoad(true);
      }
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    }
  }
  return (
    <div className="showcase-film">
      <img
        src="/brisk/design/29.jpg"
        alt="Productdesign voor een mobiele app met kleurrijke integraties"
        width="1500"
        height="1127"
        fetchPriority="high"
      />
      {!failed && (
        <>
          <video
            ref={ref}
            src={load ? '/brisk/showreel.mp4' : undefined}
            poster="/brisk/design/29.jpg"
            muted
            loop
            playsInline
            preload="none"
            aria-label="Brisk productdesign showreel, zonder geluid"
            data-ready={ready}
            onLoadedData={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => setFailed(true)}
          />
          <button
            onClick={toggle}
            className="film-toggle"
            aria-label={playing ? 'Pauzeer showreel' : 'Speel showreel af'}
          >
            {playing ? <Pause size={17} /> : <Play size={17} />}
          </button>
        </>
      )}
    </div>
  );
}
export function ProductGallery({
  initialCount = 8,
}: {
  initialCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const item = designs[selected];
  function move(direction: number) {
    setSelected((i) => (i + direction + designs.length) % designs.length);
  }
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSelected((i) => (i + 1) % designs.length);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelected((i) => (i - 1 + designs.length) % designs.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="design-grid" id="design-grid">
        {(expanded ? designs : designs.slice(0, initialCount)).map(
          (asset, i) => (
            <DialogTrigger
              key={asset.src}
              className="design-tile"
              onClick={() => setSelected(i)}
              aria-label={`Vergroot ${labels[asset.name] || `productdesign ${asset.name}`}`}
            >
              <img
                src={asset.src}
                width={asset.width}
                height={asset.height}
                alt={labels[asset.name] || `Brisk productdesign ${asset.name}`}
                loading="lazy"
              />
              <span className="design-caption">
                <span>{labels[asset.name] || 'Interface & interactie'}</span>
                <Expand size={16} />
              </span>
            </DialogTrigger>
          ),
        )}
      </div>
      <button
        className="button button-outline gallery-more"
        aria-expanded={expanded}
        aria-controls="design-grid"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Toon selectie' : `Bekijk alle ${designs.length} ontwerpen`}{' '}
        <span>{expanded ? '−' : '+'}</span>
      </button>
      <DialogContent className="design-lightbox" showCloseButton={false}>
        <div className="lightbox-top">
          <div>
            <DialogTitle>{labels[item.name] || 'Product design'}</DialogTitle>
            <DialogDescription>
              Brisk — ontwerp {selected + 1} van {designs.length}
            </DialogDescription>
          </div>
          <DialogClose className="icon-button" aria-label="Sluit afbeelding">
            <X />
          </DialogClose>
        </div>
        <img
          src={item.src}
          alt={labels[item.name] || `Brisk productdesign ${item.name}`}
          width={item.width}
          height={item.height}
        />
        <div className="lightbox-bottom">
          <button
            className="icon-button"
            onClick={() => move(-1)}
            aria-label="Vorig ontwerp"
          >
            <ArrowLeft />
          </button>
          <span aria-live="polite">
            {String(selected + 1).padStart(2, '0')} / {designs.length}
          </span>
          <button
            className="icon-button"
            onClick={() => move(1)}
            aria-label="Volgend ontwerp"
          >
            <ArrowRight />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export type Project = {
  name: string;
  url: string;
  image?: string;
  category: string;
  theme: string;
};
export function Portfolio({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="project-grid" id="project-grid">
        {(expanded ? projects : projects.slice(0, 6)).map((p, i) => (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={p.url}
            aria-label={`Bekijk ${p.name} (opent in een nieuw tabblad)`}
          >
            <div className="project-visual" style={{ background: p.theme }}>
              {p.image ? (
                <div className="browser-frame">
                  <div className="browser-bar">
                    <span className="browser-dots">
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>{new URL(p.url).hostname.replace('www.', '')}</span>
                    <ArrowUpRight size={12} />
                  </div>
                  <img
                    src={p.image}
                    alt={`Website van ${p.name}`}
                    width="1440"
                    height="900"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="project-wordmark">
                  <span>{p.name}</span>
                  <small>
                    BEKIJK DE WEBSITE <ArrowUpRight size={18} />
                  </small>
                </div>
              )}
              <span className="project-visit">
                <ArrowUpRight size={23} />
              </span>
            </div>
            <div className="project-info">
              <div>
                <h3>{p.name}</h3>
                <p>{p.category}</p>
              </div>
              <span>{String(i + 1).padStart(2, '0')}</span>
            </div>
          </a>
        ))}
      </div>
      <button
        className="button button-outline gallery-more"
        aria-expanded={expanded}
        aria-controls="project-grid"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded
          ? 'Toon selectie'
          : `Alle ${projects.length} websites bekijken`}
        <span>{expanded ? '−' : '+'}</span>
      </button>
    </>
  );
}
