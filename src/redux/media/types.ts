import { SanityImage, SanityVideo } from '../types';

export interface GalleryPhotoItem {
  image: SanityImage;
  title: string;
}

export interface MediaDocument {
  _type: 'media';
  title: string;
  videos: SanityVideo[];
  photos: GalleryPhotoItem[];
}

export interface MediaState {
  page?: MediaDocument;
  loading: boolean;
  error?: string;
}
