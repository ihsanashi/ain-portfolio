import { ArrayField, ValidateOptions } from 'payload';

const CANVAS_GALLERY_LENGTH = 1;
const POSTCARD_GALLERY_LENGTH = 2;
const SLIDER_MINIMUM_LENGTH = 3;
const TILES_MINIMUM_LENGTH = 3;
const TWO_COLUMNS_MAXIMUM_LENGTH = 1;

export const galleryContentValidation = (
  value: unknown,
  args: ValidateOptions<unknown, unknown, ArrayField, unknown[]>,
) => {
  const { siblingData }: { siblingData: any } = args;
  const galleryType = siblingData?.type;

  switch (galleryType) {
    case 'canvas':
      if (siblingData.content.length > CANVAS_GALLERY_LENGTH) {
        return `A canvas gallery should contain only ${CANVAS_GALLERY_LENGTH} content item.`;
      }
      break;
    case 'postcard':
      if (siblingData.content.length > POSTCARD_GALLERY_LENGTH) {
        return `A postcard gallery should contain at most ${POSTCARD_GALLERY_LENGTH} content items.`;
      }
      break;
    case 'slider':
      if (siblingData.content.length < SLIDER_MINIMUM_LENGTH) {
        return `A slider should contain at least ${SLIDER_MINIMUM_LENGTH} content items.`;
      }
      break;
    case 'tiles':
      if (siblingData.content.length < TILES_MINIMUM_LENGTH) {
        return `A tile gallery should contain at least ${TILES_MINIMUM_LENGTH} content items.`;
      }
      break;
    case 'twoColumns':
      if (siblingData.content.length > TWO_COLUMNS_MAXIMUM_LENGTH) {
        return `A gallery with two columns should contain only ${TWO_COLUMNS_MAXIMUM_LENGTH} content item.`;
      }
      break;
  }

  return true;
};
