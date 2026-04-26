import React from 'react';

export function ThemeFilters() {
  return (
    <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
      <defs>
        {/* Photorealistic Burnt Edge Filter */}
        {/* Generates organic, cloud-like noise that warps the element's edges */}
        <filter id="burnt-edge" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.06 0.1" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
