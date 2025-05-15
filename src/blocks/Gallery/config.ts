import { link } from '@/fields/link';
import { linkGroup } from '@/fields/linkGroup';
import type { Block } from 'payload';

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'Gallery',
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      defaultValue: 'tiles',
      options: [
        {
          label: 'Canvas',
          value: 'canvas',
        },
        {
          label: 'Postcard',
          value: 'postcard',
        },
        {
          label: 'Tiles',
          value: 'tiles',
        },
        {
          label: 'Two Columns',
          value: 'twoColumns',
        },
      ],
      required: true,
      admin: {
        description: 'Specify how media is rendered',
      },
    },
    {
      name: 'content',
      label: 'Content',
      type: 'array',
      required: true,
      // minRows: 3, // ! Re-enforce later after testing
      admin: {
        description: 'Specify content to display in this section',
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        link({
          overrides: {
            admin: {
              condition: (_, {}, { blockData }) => {
                return blockData?.type !== 'canvas';
              },
            },
          },
        }),
      ],
    },
  ],
};
