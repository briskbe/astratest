import React from 'react';
import {
  AbsoluteFill,
  Composition,
  Img,
  registerRoot,
  staticFile,
  useCurrentFrame,
} from 'remotion';
const duration = 450;
const smooth = (n: number) => {
  const x = Math.max(0, Math.min(1, n));
  return x * x * (3 - 2 * x);
};
function BriskShowreel() {
  const f = useCurrentFrame();
  const phase = (f / (duration - 1)) * Math.PI * 2;
  const images = ['29', '23', '34'];
  const second = smooth((f - 95) / 35) * (1 - smooth((f - 240) / 35));
  const third = smooth((f - 240) / 35) * (1 - smooth((f - 385) / 35));
  return (
    <AbsoluteFill style={{ background: '#e6eaeb', overflow: 'hidden' }}>
      {images.map((image, i) => (
        <AbsoluteFill
          key={image}
          style={{ opacity: i === 0 ? 1 : i === 1 ? second : third }}
        >
          <Img
            src={staticFile(`brisk/design/${image}.jpg`)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `scale(${1.015 + (1 - Math.cos(phase)) * 0.012}) translateX(${Math.sin(phase) * 3}px)`,
            }}
          />
        </AbsoluteFill>
      ))}
    </AbsoluteFill>
  );
}
registerRoot(() => (
  <Composition
    id="BriskShowreel"
    component={BriskShowreel}
    width={1200}
    height={900}
    fps={30}
    durationInFrames={duration}
  />
));
