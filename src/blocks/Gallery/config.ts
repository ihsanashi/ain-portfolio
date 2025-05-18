import { link } from '@/fields/link';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';
import { galleryContentValidation } from './helper';

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
          label: 'Slider',
          value: 'slider',
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
      name: 'disableLabel',
      label: 'Disable link labels',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        condition: (_, {}, { blockData }) => {
          return blockData?.type === 'tiles';
        },
        description:
          "If checked, the label for each link will be hidden. For example, you'd probably want to disable labels for a gallery of Instagram posts.",
      },
    },
    {
      name: 'mediaPlacement',
      label: 'Media placement',
      admin: {
        condition: (_, {}, { blockData }) => {
          return blockData?.type === 'twoColumns';
        },
        description:
          'Determine the order of the media in relation to the text content.',
      },
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left (Top on mobile)',
          value: 'left',
        },
        {
          label: 'Right (Bottom on mobile)',
          value: 'right',
        },
      ],
    },
    {
      name: 'content',
      label: 'Content',
      type: 'array',
      required: true,
      minRows: 1,
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
        {
          name: 'richText',
          type: 'richText',
          editor: lexicalEditor({}),
          label: false,
          admin: {
            condition: (_, siblingData, { blockData }) => {
              // hide for tiles gallery type
              if (blockData.type === 'tiles') {
                return false;
              }

              // hide for the second item in postcard gallery type
              if (
                blockData.type === 'postcard' &&
                blockData.content &&
                Array.isArray(blockData.content)
              ) {
                // Find the index of the current siblingData within the blockData.content array
                const currentIndex = blockData.content.findIndex(
                  (item) => item.id === siblingData.id,
                );
                return currentIndex !== 1;
              }

              return true;
            },
          },
        },
        link({
          overrides: {
            admin: {
              condition: (_, siblingData, { blockData }) => {
                // hide for the second item in postcard gallery type
                if (
                  blockData.type === 'postcard' &&
                  blockData.content &&
                  Array.isArray(blockData.content)
                ) {
                  // Find the index of the current siblingData within the blockData.content array
                  const currentIndex = blockData.content.findIndex(
                    (item) => item.id === siblingData.id,
                  );
                  return currentIndex !== 1;
                }

                return true;
              },
            },
          },
        }),
      ],
      validate: galleryContentValidation,
    },
  ],
};
