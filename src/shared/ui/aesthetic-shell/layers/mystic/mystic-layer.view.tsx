'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import styles from './mystic-layer.module.scss';
import { useTheme } from '@/app/providers/theme-provider';

import { Point, MysticLayerProps } from './types/mystic-layer.interface';

const SIZE_CONFIG = {
  'small': { woodW: 2, woodHL: 1, tendrilW: 1.2, woodAmp: 2, wrapAmp: 4.5, leafScale: 0.35, padding: 40 },
  'medium': { woodW: 3.5, woodHL: 1.5, tendrilW: 2, woodAmp: 3.5, wrapAmp: 8, leafScale: 0.6, padding: 80 },
  'large': { woodW: 6, woodHL: 2, tendrilW: 3, woodAmp: 5, wrapAmp: 14, leafScale: 0.9, padding: 120 }
};

const DENSITY_CONFIG = {
  'sparse': { foliageChance: 0.04, orbChance: 0.05 },
  'normal': { foliageChance: 0.11, orbChance: 0.12 },
  'dense': { foliageChance: 0.22, orbChance: 0.25 }
};

export function MysticLayer({ size = 'large', density = 'normal' }: MysticLayerProps) {
  const { theme, incinerationStatus: globalIncineration, setIsMysticVisible } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, radius: 0 });
  const containerRef = useRef<SVGSVGElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);

  const cfg = SIZE_CONFIG[size];
  const dens = DENSITY_CONFIG[density];
  
  // Force 'burnt' if theme is burnt-forest
  const status = theme === 'burnt-forest' ? 'burnt' : globalIncineration;

  // Report visibility to context
  useEffect(() => {
    if (dimensions.width > 0) {
      setIsMysticVisible(true);
    }
    return () => setIsMysticVisible(false);
  }, [dimensions.width, setIsMysticVisible]);

  // --- Resize Observer ---
  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const rStr = getComputedStyle(parent).borderRadius;
        const r = parseFloat(rStr) || 0;
        setDimensions({ width, height, radius: r });
      }
    });

    observer.observe(parent);
    return () => observer.disconnect();
  }, []);

  // --- Particle Engine ---
  useEffect(() => {
    if (status !== 'burning' || !particleRef.current || dimensions.width === 0) return;

    const layer = particleRef.current;
    const dur = 3500;
    const intensity = density === 'sparse' ? 1 : density === 'normal' ? 3 : 6;
    let frame: number;
    let startTime = performance.now();

    const spawnEmbersAtProgress = (progress: number) => {
      const { width: w, height: h, radius: r } = dimensions;
      const p = cfg.padding;
      const totalLength = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;
      const currentDist = totalLength * (1 - progress);
      
      const segments = [
        { id: 'top', type: 'line', len: w - 2 * r, start: [r, 0], end: [w - r, 0], nx: 0, ny: -1 },
        { id: 'tr', type: 'arc', len: (Math.PI * r) / 2, center: [w - r, r], startAng: -Math.PI / 2, endAng: 0 },
        { id: 'right', type: 'line', len: h - 2 * r, start: [w, r], end: [w, h - r], nx: 1, ny: 0 },
        { id: 'br', type: 'arc', len: (Math.PI * r) / 2, center: [w - r, h - r], startAng: 0, endAng: Math.PI / 2 },
        { id: 'bottom', type: 'line', len: w - 2 * r, start: [w - r, h], end: [r, h], nx: 0, ny: 1 },
        { id: 'bl', type: 'arc', len: (Math.PI * r) / 2, center: [r, h - r], startAng: Math.PI / 2, endAng: Math.PI },
        { id: 'left', type: 'line', len: h - 2 * r, start: [0, h - r], end: [0, r], nx: -1, ny: 0 },
        { id: 'tl', type: 'arc', len: (Math.PI * r) / 2, center: [r, r], startAng: Math.PI, endAng: 3 * Math.PI / 2 }
      ];

      let d = currentDist % totalLength;
      let pt = { x: 0, y: 0 };

      for (const seg of segments) {
        if (d <= seg.len) {
          if (seg.type === 'line') {
            const t = d / seg.len;
            pt = { 
              x: (seg.start as number[])[0] + ((seg.end as number[])[0] - (seg.start as number[])[0]) * t + p, 
              y: (seg.start as number[])[1] + ((seg.end as number[])[1] - (seg.start as number[])[1]) * t + p
            };
          } else {
            const t = d / seg.len;
            const ang = (seg.startAng as number) + ((seg.endAng as number) - (seg.startAng as number)) * t;
            pt = { 
              x: (seg.center as number[])[0] + r * Math.cos(ang) + p, 
              y: (seg.center as number[])[1] + r * Math.sin(ang) + p
            };
          }
          break;
        }
        d -= seg.len;
      }

      for (let i = 0; i < intensity; i++) {
        const div = document.createElement('div');
        const rand = Math.random();
        let type = 'ember';
        if (rand > 0.8) type = 'smoke';
        else if (rand < 0.15) type = 'core';
        
        div.className = `${styles.particle} ${styles[type]}`;
        const ox = (Math.random() - 0.5) * 10;
        const oy = (Math.random() - 0.5) * 10;
        div.style.left = `${pt.x + ox}px`;
        div.style.top = `${pt.y + oy}px`;
        
        layer.appendChild(div);

        const tx = (Math.random() - 0.5) * (type === 'smoke' ? 100 : 140);
        const ty = (Math.random() * -150) - 30;
        const duration = type === 'smoke' ? 2000 + Math.random() * 1000 : 800 + Math.random() * 800;

        const anim = div.animate([
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.9 },
          { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${type === 'smoke' ? 4 : 0.1})`, opacity: 0 }
        ], { duration, easing: 'cubic-bezier(0.2, 1, 0.4, 1)' });

        anim.onfinish = () => div.remove();
      }
    };

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / dur, 1);
      spawnEmbersAtProgress(progress);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [status, dimensions, density, cfg]);

  const ecosystem = useMemo(() => {
    if (dimensions.width === 0) return null;

    const { width: w, height: h, radius: r } = dimensions;
    const p = cfg.padding;
    const totalLength = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;

    const segments = [
      { id: 'top', type: 'line', len: w - 2 * r, start: [r, 0], end: [w - r, 0], nx: 0, ny: -1 },
      { id: 'tr', type: 'arc', len: (Math.PI * r) / 2, center: [w - r, r], startAng: -Math.PI / 2, endAng: 0 },
      { id: 'right', type: 'line', len: h - 2 * r, start: [w, r], end: [w, h - r], nx: 1, ny: 0 },
      { id: 'br', type: 'arc', len: (Math.PI * r) / 2, center: [w - r, h - r], startAng: 0, endAng: Math.PI / 2 },
      { id: 'bottom', type: 'line', len: w - 2 * r, start: [w - r, h], end: [r, h], nx: 0, ny: 1 },
      { id: 'bl', type: 'arc', len: (Math.PI * r) / 2, center: [r, h - r], startAng: Math.PI / 2, endAng: Math.PI },
      { id: 'left', type: 'line', len: h - 2 * r, start: [0, h - r], end: [0, r], nx: -1, ny: 0 },
      { id: 'tl', type: 'arc', len: (Math.PI * r) / 2, center: [r, r], startAng: Math.PI, endAng: 3 * Math.PI / 2 }
    ];

    const getPerimeterPoint = (distance: number): Point => {
      let d = distance % totalLength;
      if (d < 0) d += totalLength;

      for (const seg of segments) {
        if (d <= seg.len) {
          if (seg.type === 'line') {
            const t = d / seg.len;
            return { 
              x: (seg.start as number[])[0] + ((seg.end as number[])[0] - (seg.start as number[])[0]) * t + p, 
              y: (seg.start as number[])[1] + ((seg.end as number[])[1] - (seg.start as number[])[1]) * t + p, 
              nx: seg.nx as number, 
              ny: seg.ny as number 
            };
          } else {
            const t = d / seg.len;
            const ang = (seg.startAng as number) + ((seg.endAng as number) - (seg.startAng as number)) * t;
            return { 
              x: (seg.center as number[])[0] + r * Math.cos(ang) + p, 
              y: (seg.center as number[])[1] + r * Math.sin(ang) + p, 
              nx: Math.cos(ang), 
              ny: Math.sin(ang) 
            };
          }
        }
        d -= seg.len;
      }
      return { x: 0, y: 0, nx: 0, ny: 0 };
    };

    const smoothPath = (pts: { x: number; y: number }[]) => {
      if (pts.length < 2) return '';
      let dStr = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`;
      for (let i = 1; i < pts.length - 2; i++) {
        const xc = (pts[i].x + pts[i + 1].x) / 2;
        const yc = (pts[i].y + pts[i + 1].y) / 2;
        dStr += ` Q ${pts[i].x.toFixed(2)},${pts[i].y.toFixed(2)} ${xc.toFixed(2)},${yc.toFixed(2)}`;
      }
      const last = pts[pts.length - 1];
      const penult = pts[pts.length - 2];
      dStr += ` Q ${penult.x.toFixed(2)},${penult.y.toFixed(2)} ${last.x.toFixed(2)},${last.y.toFixed(2)}`;
      return dStr;
    };

    let woodyBase: { x: number; y: number }[] = [];
    let woodyGroove: { x: number; y: number }[] = [];
    let tendrilBack: { x: number; y: number }[][] = [];
    let tendrilFront: { x: number; y: number }[][] = [];
    let currentBack: { x: number; y: number }[] = [];
    let currentFront: { x: number; y: number }[] = [];
    let foliage: any[] = [];
    let orbs: any[] = [];

    let masterSeed = 4432;
    const createRandomizer = (segmentSeed: number) => {
      let seed = (masterSeed + segmentSeed) % 233280;
      return () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    };

    const step = 4;
    let accumulatedLength = 0;

    segments.forEach((seg, sIdx) => {
      const random = createRandomizer(sIdx * 1000);
      for (let i = 0; i < seg.len; i += step) {
        const globalDist = accumulatedLength + i;
        const pt = getPerimeterPoint(globalDist);
        const progress = globalDist / totalLength;
        const delay = progress * 3.5;
        const burnDelay = (1 - progress) * 2.5;

        const woodOffset = Math.sin(globalDist * 0.012) * cfg.woodAmp;
        const wx = pt.x + pt.nx * woodOffset;
        const wy = pt.y + pt.ny * woodOffset;
        woodyBase.push({ x: wx, y: wy });

        const groveOffset = woodOffset + Math.cos(globalDist * 0.03) * (cfg.woodAmp * 0.3);
        woodyGroove.push({ x: pt.x + pt.nx * groveOffset, y: pt.y + pt.ny * groveOffset });

        const sineVal = Math.sin(globalDist * 0.045 + 1.2);
        const cx = pt.x + pt.nx * (sineVal * cfg.wrapAmp);
        const cy = pt.y + pt.ny * (sineVal * cfg.wrapAmp);
        const cPoint = { x: cx, y: cy };

        if (sineVal < 0) {
          if (currentFront.length > 0) {
            currentFront.push(cPoint);
            tendrilFront.push([...currentFront]);
            currentFront = [];
          }
          currentBack.push(cPoint);
        } else {
          if (currentBack.length > 0) {
            currentBack.push(cPoint);
            tendrilBack.push([...currentBack]);
            currentBack = [];
          }
          currentFront.push(cPoint);
        }

        if (progress > 0.02) {
          if (random() < dens.foliageChance) {
            const outwardAngle = Math.atan2(pt.ny, pt.nx) * (180 / Math.PI);
            const rotation = outwardAngle + (random() * 100 - 50);
            const scale = (0.55 + random() * 0.6) * cfg.leafScale;
            const flip = random() > 0.5 ? -1 : 1;

            foliage.push({
              x: wx, y: wy, cx, cy, delay, burnDelay, rotation, scale, flip,
              isFlower: random() < 0.3,
              hasSecondary: random() > 0.4
            });
          }

          if (random() < dens.orbChance) {
            orbs.push({
              x: cx + (random() * 40 - 20) * cfg.leafScale,
              y: cy + (random() * 40 - 20) * cfg.leafScale,
              delay, burnDelay, scale: (0.8 + random() * 1.5) * cfg.leafScale
            });
          }
        }
      }
      accumulatedLength += seg.len;
    });

    if (currentFront.length > 0) tendrilFront.push(currentFront);
    if (currentBack.length > 0) tendrilBack.push(currentBack);

    const baseD = smoothPath(woodyBase);
    return {
      woodBaseD: baseD,
      woodHLD: smoothPath(woodyGroove),
      tendrilBackPaths: tendrilBack.map(smoothPath),
      tendrilFrontPaths: tendrilFront.map(smoothPath),
      foliage, orbs, cfg, p
    };
  }, [dimensions, size, density, cfg]);

  if (!ecosystem) return <svg ref={containerRef} className={styles.canvas} />;

  const { woodBaseD, woodHLD, tendrilBackPaths, tendrilFrontPaths, foliage, orbs, p } = ecosystem;

  return (
    <div className={styles.container} style={{ width: dimensions.width, height: dimensions.height }}>
      <svg 
        ref={containerRef}
        className={`${styles.canvas} ${styles[`is-${status}`]}`}
        viewBox={`0 0 ${dimensions.width + p * 2} ${dimensions.height + p * 2}`}
        style={{
          top: `-${p}px`,
          left: `-${p}px`,
          width: `${dimensions.width + p * 2}px`,
          height: `${dimensions.height + p * 2}px`
        }}
      >
        <g filter="url(#mystic-shadow)">
          <path d={woodBaseD} className={styles['charred-path']} fill="none" stroke="var(--char-core)" strokeWidth={cfg.woodW * 1.2} strokeLinecap="round" />
          
          {tendrilBackPaths.map((d, i) => (
            <path key={`tb-${i}`} d={d} className={`${styles['draw-vine']} ${styles['layer-healthy']}`} fill="none" stroke="var(--leaf-vein)" strokeWidth={cfg.tendrilW * 0.7} strokeLinecap="round" pathLength="1" />
          ))}
          
          <path d={woodBaseD} className={`${styles['draw-vine']} ${styles['layer-ember']}`} fill="none" stroke="var(--ember-glow)" strokeWidth={cfg.woodW * 1.5} strokeLinecap="round" pathLength="1" filter="url(#ember-glow)" />

          <path d={woodBaseD} className={`${styles['draw-vine']} ${styles['layer-healthy']}`} fill="none" stroke="var(--vine-wood-shadow)" strokeWidth={cfg.woodW * 1.6} strokeLinecap="round" pathLength="1" />
          <path d={woodBaseD} className={`${styles['draw-vine']} ${styles['layer-healthy']}`} fill="none" stroke="var(--vine-wood)" strokeWidth={cfg.woodW} strokeLinecap="round" pathLength="1" />
          <path d={woodHLD} className={`${styles['draw-vine']} ${styles['layer-healthy']}`} fill="none" stroke="var(--vine-wood-hl)" strokeWidth={cfg.woodHL} strokeLinecap="round" pathLength="1" />

          {tendrilFrontPaths.map((d, i) => (
            <path key={`tf-${i}`} d={d} className={`${styles['draw-vine']} ${styles['layer-healthy']}`} fill="none" stroke="var(--vine-tendril)" strokeWidth={cfg.tendrilW} strokeLinecap="round" pathLength="1" />
          ))}

          {foliage.map((f, i) => (
            <g key={`fol-${i}`} transform={`translate(${f.isFlower ? f.cx : f.x}, ${f.isFlower ? f.cy : f.y})`}>
              <g 
                className={styles['foliage-animator']}
                style={{ 
                  '--delay': `${f.delay}s`,
                  '--burn-delay': `${f.burnDelay}s`,
                  '--rot': `${f.rotation}deg`,
                  '--sx': f.scale,
                  '--sy': f.scale * f.flip
                } as React.CSSProperties}
              >
                {f.isFlower ? (
                  <g>
                    {[0, 72, 144, 216, 288].map(rot => (
                      <path key={rot} d="M0,0 C14,-24 30,-24 22,0 C30,24 14,24 0,0 Z" transform={`rotate(${rot})`} fill="var(--flower-petal)" stroke="rgba(0,0,0,0.06)" strokeWidth="0.8" />
                    ))}
                    <circle cx="0" cy="0" r="7" fill="var(--flower-center)" />
                    <circle cx="-2.5" cy="-2.5" r="2.5" fill="#fff" opacity="0.9" />
                  </g>
                ) : (
                  <g>
                     <path d="M0,0 Q-4,6 -8,0" fill="none" stroke="var(--vine-tendril)" strokeWidth="2.5" strokeLinecap="round" />
                     <path d="M0,0 C12,-18 35,-15 45,0 C35,15 12,18 0,0 Z" fill="var(--leaf-base)" stroke="var(--leaf-edge)" strokeWidth="1.5" strokeLinejoin="round" />
                     <path d="M0,0 Q20,0 42,0" fill="none" stroke="var(--leaf-vein)" strokeWidth="1.5" strokeLinecap="round" />
                     {f.hasSecondary && (
                       <g transform="translate(-4, 0) rotate(35) scale(0.6)">
                          <path d="M0,0 C12,-18 35,-15 45,0 C35,15 12,18 0,0 Z" fill="var(--leaf-base)" stroke="var(--leaf-edge)" strokeWidth="2" />
                          <path d="M0,0 Q20,0 42,0" fill="none" stroke="var(--leaf-vein)" strokeWidth="2" strokeLinecap="round" />
                       </g>
                     )}
                  </g>
                )}
              </g>
            </g>
          ))}

          {orbs.map((o, i) => (
            <g key={`orb-${i}`} transform={`translate(${o.x}, ${o.y})`}>
              <g className={styles['magic-orb']} style={{ '--delay': `${o.delay}s`, '--burn-delay': `${o.burnDelay}s`, '--sx': o.scale } as React.CSSProperties}>
                <circle className={styles['orb-pulse']} cx="0" cy="0" r="4" fill="var(--orb-color)" />
                <circle className={styles['orb-pulse']} cx="0" cy="0" r="2" fill="#fff" opacity="0.8" />
              </g>
            </g>
          ))}
        </g>

        <defs>
          <filter id="mystic-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="black" floodOpacity="0.5" />
          </filter>
          <filter id="brittle-ash" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 4 -1.5" in="noise" result="alphaNoise" />
            <feComposite operator="in" in="SourceGraphic" in2="alphaNoise" result="fragmented" />
            <feDisplacementMap in="fragmented" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="ember-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="var(--ember-glow)" floodOpacity="1"/>
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="var(--ember-glow)" floodOpacity="0.8"/>
          </filter>
        </defs>
      </svg>
      <div ref={particleRef} className={styles['particle-layer']} />
    </div>
  );
}
