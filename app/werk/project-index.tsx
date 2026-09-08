'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../projects';
export function ProjectIndex() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  return (
    <div className="work-index-grid">
      <div className="work-index-preview">
        <div
          className="index-preview-image"
          style={{ background: project.theme }}
        >
          {project.image ? (
            <img
              key={project.image}
              src={project.image}
              width="1440"
              height="900"
              alt={`Websitevoorbeeld van ${project.name}`}
            />
          ) : (
            <span className="index-no-preview">
              Roetfilter
              <br />
              laten reinigen.<small>BEKIJK DE WEBSITE VIA DE PROJECTLINK</small>
            </span>
          )}
          <span className="index-preview-number">
            {String(active + 1).padStart(2, '0')} / {projects.length}
          </span>
        </div>
        <div className="index-preview-caption">
          <span>{project.name}</span>
          <span>{project.category.split(' · ')[0]}</span>
        </div>
        <p>Een eigen karakter, tot in de details.</p>
      </div>
      <div className="work-index-list">
        {projects.map((p, i) => (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            key={p.url}
            className="work-index-row"
            data-active={active === i}
            onPointerEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            aria-label={`${p.name} — ${p.category}. Open website in een nieuw tabblad.`}
          >
            <span className="index-number">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="index-mobile-thumb">
              {p.image ? (
                <img
                  src={p.image}
                  width="1440"
                  height="900"
                  alt=""
                  loading="lazy"
                />
              ) : (
                <img
                  src="/brisk/logo-white.svg"
                  width="155"
                  height="40"
                  alt=""
                  loading="lazy"
                />
              )}
            </span>
            <span className="index-name">
              <strong>{p.name}</strong>
              <small>{p.category}</small>
            </span>
            <ArrowUpRight size={22} strokeWidth={1.3} />
          </a>
        ))}
      </div>
    </div>
  );
}
