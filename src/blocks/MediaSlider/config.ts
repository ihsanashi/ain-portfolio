import type { Block } from 'payload';
import { Media as MediaType } from '../../collections/Media';

export type Slide = {
  media: typeof MediaType;
};

export type Type = {
  slides: Slide[];
  blockType: 'slider';
};

export const MediaSlider: Block = {
  slug: 'mediaSlider',
  interfaceName: 'MediaSlider',
  fields: [
    {
      name: 'slides',
      label: 'Slides',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      type: 'array',
      required: true,
      minRows: 3,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
