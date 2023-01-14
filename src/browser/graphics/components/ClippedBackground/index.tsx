import React from 'react';
import { useEffect, useRef } from 'react'
import { BundleNodecgInstance } from '../../../../nodecg/nodecg';
import { CameraAlternative } from '../CameraAlternative';

export type RectPath = {
  x: number;
  y: number;
  w: number;
  h: number;
}

type Props = {
  clipPath?: RectPath[];
}

const params = new URLSearchParams(document.location.search);
const useCamera = params.has('useCamera');

export const ClippedBackground = ({ clipPath }: Props) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    (nodecg as BundleNodecgInstance).readReplicant('assets:background-image', (assets) => {
      if (assets[0] && canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvasRef.current.width = width;
        canvasRef.current.height = height;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) {
          return;
        }
        ctx.globalCompositeOperation = 'xor';
        useCamera && clipPath?.forEach(path => {
          ctx.fillRect(path.x, path.y, path.w, path.h);
        });

        const background = new Image();
        background.onload = () => {
          ctx.drawImage(background, 0, 0, width, height);
        }
        background.src = assets[0].url;
      }
    })

  }, [canvasRef, clipPath])

  return (
    <>
      <canvas style={{
        position: 'fixed'
      }} ref={canvasRef} />
      { !useCamera && (
        clipPath?.map((path, idx) => (
          <div key={idx} style={{
            position: 'absolute',
            top: `${path.y}px`,
            left: `${path.x}px`,
            width: `${path.w}px`,
            height: `${path.h}px`,
          }}>
            <CameraAlternative />
          </div>
        ))
      )}
    </>
  )
}