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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function HeroMedia({ source }: { source: string | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const inView = useRef(true);
  const reducedMotion = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const updatePreference = () => {
      reducedMotion.current = query.matches || Boolean(connection?.saveData);
      if (reducedMotion.current) videoRef.current?.pause();
      else if (!manuallyPaused.current) setLoadVideo(true);
    };
    updatePreference();
    query.addEventListener('change', updatePreference);
    return () => query.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !source || !loadVideo || failed) return;
    const playWhenVisible = () => {
      if (
        inView.current &&
        !document.hidden &&
        !manuallyPaused.current &&
        !reducedMotion.current
      ) {
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        playWhenVisible();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    document.addEventListener('visibilitychange', playWhenVisible);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', playWhenVisible);
      video.pause();
    };
  }, [source, loadVideo, failed]);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      manuallyPaused.current = true;
      video.pause();
      return;
    }
    manuallyPaused.current = false;
    reducedMotion.current = false;
    if (!loadVideo && source) {
      video.src = source;
      setLoadVideo(true);
    }
    try {
      await video.play();
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <img
        className="hero-image"
        src="/images/armatex-villa.jpg"
        width="1536"
        height="1024"
        alt="Sfeerbeeld van een moderne woning met warme gevel- en tuinverlichting bij avond"
        fetchPriority="high"
      />
      {source && !failed && (
        <>
          <video
            ref={videoRef}
            className="hero-motion"
            src={loadVideo ? source : undefined}
            muted
            loop
            playsInline
            preload="none"
            poster="/images/armatex-villa.jpg"
            aria-label="Stille sfeermontage van een warm verlichte woning"
            data-ready={ready}
            onLoadedData={() => setReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => {
              setFailed(true);
              setPlaying(false);
            }}
          />
          <button
            className="hero-playback"
            type="button"
            onClick={togglePlayback}
            aria-label={
              playing ? 'Pauzeer de sfeermontage' : 'Speel de sfeermontage af'
            }
            title={playing ? 'Pauzeer beweging' : 'Speel beweging af'}
          >
            {playing ? <Pause size={17} /> : <Play size={17} />}
          </button>
        </>
      )}
    </>
  );
}

const scenes = [
  {
    src: '/images/armatex-interior.jpg',
    label: 'VERLICHTING & COMFORT',
    title: 'Licht dat een ruimte laat leven.',
    copy: 'Van een helder begin van de dag tot een warme avond thuis.',
    alt: 'Gegenereerd interieur met indirecte plafondverlichting, een warme hanglamp en houten afwerking',
  },
  {
    src: '/images/armatex-villa.jpg',
    label: 'BUITENVERLICHTING',
    title: 'Ook buiten helemaal thuis.',
    copy: 'Een verlichte gevel. Een uitnodigend pad. Een tuin die blijft leven.',
    alt: 'Gegenereerde moderne villa met verlichte gevel en tuin bij het vallen van de avond',
  },
  {
    src: '/images/armatex-charging.jpg',
    label: 'SLIMME ENERGIE',
    title: 'Opladen op jouw ritme.',
    copy: 'Het comfort van een eigen laadpunt, gewoon bij je thuis.',
    alt: 'Gegenereerd sfeerbeeld van een elektrische auto die oplaadt aan een laadpunt bij een woning',
  },
];

export function InspirationGallery() {
  const [selected, setSelected] = useState(0);
  const move = (direction: number) =>
    setSelected(
      (current) => (current + direction + scenes.length) % scenes.length,
    );
  return (
    <Dialog>
      <div className="scene-grid">
        {scenes.map((scene, index) => (
          <DialogTrigger
            key={scene.src}
            className={`scene-card scene-card-${index}`}
            onClick={() => setSelected(index)}
            aria-label={`Vergroot sfeerbeeld: ${scene.title}`}
          >
            <img
              src={scene.src}
              width="1536"
              height="1024"
              alt={scene.alt}
              loading="lazy"
              decoding="async"
            />
            <span className="scene-topline">
              <span>
                0{index + 1} / {scene.label}
              </span>
              <span className="scene-expand">
                <Expand size={18} />
              </span>
            </span>
            <span className="scene-caption">
              <span className="scene-title">{scene.title}</span>
              <span className="scene-copy">{scene.copy}</span>
            </span>
          </DialogTrigger>
        ))}
      </div>
      <DialogContent
        className="scene-dialog"
        showCloseButton={false}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            move(1);
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <div className="scene-dialog-top">
          <span>ARMATEX / INSPIRATIE</span>
          <DialogClose
            className="scene-dialog-close"
            aria-label="Sluit sfeerbeeld"
          >
            <X size={23} />
          </DialogClose>
        </div>
        <img
          src={scenes[selected].src}
          width="1536"
          height="1024"
          alt={scenes[selected].alt}
          className="scene-dialog-image"
        />
        <div className="scene-dialog-bottom">
          <div aria-live="polite">
            <DialogTitle className="scene-dialog-title">
              {scenes[selected].title}
            </DialogTitle>
            <DialogDescription className="scene-dialog-description">
              Gegenereerd sfeerbeeld ter inspiratie.
            </DialogDescription>
          </div>
          <div className="scene-pagination">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Vorig sfeerbeeld"
            >
              <ArrowLeft size={20} />
            </button>
            <span>
              {selected + 1} / {scenes.length}
            </span>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Volgend sfeerbeeld"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AtmosphereFilm({ source }: { source: string | null }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    const pauseWhenHidden = () => {
      if (document.hidden) video.pause();
    };
    document.addEventListener('visibilitychange', pauseWhenHidden);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', pauseWhenHidden);
    };
  }, [source]);

  async function playFilm() {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    setStatus('');
    try {
      await video.play();
    } catch {
      setStarted(false);
      setStatus('Afspelen lukte niet. Probeer het nog eens.');
    }
  }

  return (
    <div className="film-player" data-started={started}>
      {source && !failed ? (
        <video
          ref={videoRef}
          poster="/images/armatex-interior.jpg"
          preload="none"
          playsInline
          controls={started}
          onError={() => {
            setFailed(true);
            setStarted(false);
            setStatus('De sfeermontage kan momenteel niet worden geladen.');
          }}
          onEnded={() => {
            setStarted(false);
            if (videoRef.current) videoRef.current.currentTime = 0;
          }}
          aria-label="Sfeermontage: buitenverlichting, een warm verlicht interieur en thuis opladen. Zonder geluid."
        >
          <source src={source} type="video/mp4" />
          <p>
            Je browser ondersteunt deze video niet.{' '}
            <a href={source}>Open de sfeermontage</a>.
          </p>
        </video>
      ) : (
        <img
          src="/images/armatex-interior.jpg"
          alt="Warm verlicht modern interieur bij avond"
          width="1536"
          height="1024"
          loading="lazy"
        />
      )}
      {!started && (
        <div className="film-overlay">
          <div className="film-upper">
            <span>ARMATEX IN BEELD</span>
            <span>LICHT / COMFORT / ENERGIE</span>
          </div>
          <div className="film-center">
            {source && !failed && (
              <button
                type="button"
                className="film-play"
                onClick={playFilm}
                aria-label="Speel de sfeermontage af"
              >
                <Play size={27} fill="currentColor" strokeWidth={1.3} />
              </button>
            )}
            <p>
              Het gevoel van
              <br />
              <span>goed thuiskomen.</span>
            </p>
          </div>
          <div className="film-lower">
            <span>SFEERMONTAGE · ZONDER GELUID</span>
            <ArrowUpRight size={24} aria-hidden="true" />
          </div>
        </div>
      )}
      {status && (
        <p className="film-status" role="status">
          {status}
        </p>
      )}
    </div>
  );
}
