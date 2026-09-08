'use client';
import { useCallback, useState } from 'react';
import type { Project } from '../site-media';

export function PreviewImage({ project }: { project: Project }) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    project.image ? 'loading' : 'error',
  );
  const checkLoadedImage = useCallback((image: HTMLImageElement | null) => {
    // Cached images may finish before hydration attaches load handlers.
    if (image?.complete) setStatus(image.naturalWidth > 0 ? 'ready' : 'error');
  }, []);
  return (
    <>
      {project.image && status !== 'error' && (
        <img
          src={project.image}
          width="1440"
          height="900"
          alt={`Websitevoorbeeld van ${project.name}`}
          data-ready={status === 'ready'}
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
          ref={checkLoadedImage}
        />
      )}
      {status !== 'ready' && (
        <span className="index-preview-status" aria-busy={status === 'loading'}>
          <strong>{project.name}</strong>
          <small>
            {status === 'loading'
              ? 'Preview laden…'
              : 'Preview niet beschikbaar. Open de website via de projectlink.'}
          </small>
        </span>
      )}
    </>
  );
}
