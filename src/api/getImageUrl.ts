import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from './sanity-client';

const builder = createImageUrlBuilder(client);

export const getImageUrl = (source: any, width = 300) => {
  if (!source) return '';
  return builder.image(source).width(width).url();
};
