import { link } from '@/fields/link';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
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
          'Determine on which side the media will be placed, and subsequently where the text content will be placed alongside it.',
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
      validate: (value, args) => {
        const { siblingData }: { siblingData: any } = args;
        console.log('data: ', { value, siblingData: args.siblingData });
        const galleryType = siblingData?.type;

        switch (galleryType) {
          case 'canvas':
            if (siblingData.content.length !== 6) {
              return 'A canvas gallery should contain exactly 6 content items..';
            }
            break;
          case 'postcard':
            if (siblingData.content.length > 2) {
              return 'A postcard gallery should contain at most 2 content items.';
            }
            break;
          case 'slider':
            if (siblingData.content.length < 3) {
              return 'A slider should contain at least 3 content items.';
            }
            break;
          case 'tiles':
            if (siblingData.content.length < 3) {
              return 'A tile gallery should contain at least 3 content items.';
            }
            break;
          case 'twoColumns':
            if (siblingData.content.length > 1) {
              return 'A gallery with two columns should contain only 1 content item.';
            }
            break;
        }

        return true;
      },
    },
  ],
};
