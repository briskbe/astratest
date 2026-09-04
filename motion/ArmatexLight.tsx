import React from 'react';
import {
  AbsoluteFill,
  Composition,
  Img,
  interpolate,
  registerRoot,
  staticFile,
  useCurrentFrame,
} from 'remotion';

const DURATION = 540;
const ease = (value: number) => value * value * (3 - 2 * value);
const sceneBlend = (frame: number) => {
  if (frame < 135) return 0;
  if (frame < 210) return ease((frame - 135) / 75);
  if (frame < 330) return 1;
  if (frame < 420) return 1 - ease((frame - 330) / 90);
  return 0;
};

export function ArmatexLight() {
  const frame = useCurrentFrame();
  const phase = (frame / (DURATION - 1)) * Math.PI * 2;
  const blend = sceneBlend(frame);
  const breathe = (1 - Math.cos(phase)) / 2;
  const horizontal = Math.sin(phase);
  const warmPulse = 0.05 + (0.045 * (1 - Math.cos(phase * 2))) / 2;
  const scan = 56 + (1 - Math.cos(phase)) * 21;
  const surface: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <AbsoluteFill style={{ backgroundColor: '#070e12', overflow: 'hidden' }}>
      <Img
        src={staticFile('images/motion-atrium.jpg')}
        style={{
          ...surface,
          transform: `scale(${1.055 + breathe * 0.035}) translate(${horizontal * -12}px,${breathe * 9}px)`,
          transformOrigin: '73% 50%',
        }}
      />
      <AbsoluteFill style={{ opacity: blend }}>
        <Img
          src={staticFile('images/motion-ribbon.jpg')}
          style={{
            ...surface,
            transform: `scale(${1.1 - breathe * 0.035}) translate(${horizontal * 15}px,${breathe * -10}px)`,
            transformOrigin: '75% 45%',
          }}
        />
      </AbsoluteFill>
      {/* A moving light reflection changes the illuminated surfaces, not the page UI. */}
      <AbsoluteFill
        style={{
          mixBlendMode: 'screen',
          opacity: 0.2,
          background: `linear-gradient(112deg, transparent ${scan - 12}%,rgba(242,226,179,.035) ${scan - 5}%, rgba(255,232,177,.2) ${scan}%,rgba(189,237,219,.035) ${scan + 5}%,transparent ${scan + 12}%)`,
        }}
      />
      <AbsoluteFill
        style={{
          mixBlendMode: 'screen',
          background: `radial-gradient(ellipse at ${79 + horizontal * 4}% ${61 + breathe * 8}%,rgba(244,210,132,${warmPulse}),transparent 34%),radial-gradient(ellipse at 95% 24%,rgba(98,209,210,${0.015 + breathe * 0.022}),transparent 30%)`,
        }}
      />
      {/* Thin refracted light softly follows the ribbon during its middle movement. */}
      <svg
        viewBox="0 0 1600 900"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: blend * 0.28,
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ray" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#cfedb5" stopOpacity="0" />
            <stop offset=".6" stopColor="#ffe4b0" stopOpacity=".7" />
            <stop offset="1" stopColor="#fbedd2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 890 950 C 660 590 1180 650 1710 170"
          fill="none"
          stroke="url(#ray)"
          strokeWidth="1.1"
          strokeDasharray="110 1800"
          strokeDashoffset={interpolate(frame, [135, 420], [100, -1450])}
        />
      </svg>
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(90deg,rgba(5,14,19,.32) 0%,rgba(5,14,19,.12) 35%,transparent 62%),linear-gradient(0deg,rgba(5,14,19,.55) 0%,transparent 24%)',
        }}
      />
    </AbsoluteFill>
  );
}

function Root() {
  return (
    <Composition
      id="ArmatexLight"
      component={ArmatexLight}
      width={1600}
      height={900}
      fps={30}
      durationInFrames={DURATION}
    />
  );
}
registerRoot(Root);
