import React from 'react';
import { Gallery } from '@/payload-types';
import { Canvas } from '@/blocks/Gallery/Canvas';
import { Postcard } from '@/blocks/Gallery/Postcard';
import { Slider } from './Slider';
import { Tile } from '@/blocks/Gallery/Tile';
import { TwoColumns } from '@/blocks/Gallery/TwoColumns';

const galleries = {
  canvas: Canvas,
  postcard: Postcard,
  slider: Slider,
  tiles: Tile,
  twoColumns: TwoColumns,
};

export const RenderGallery: React.FC<Gallery> = (props) => {
  const { type } = props || {};

  const GalleryToRender = galleries[type];

  if (!GalleryToRender) return null;

  return <GalleryToRender {...props} />;
};
