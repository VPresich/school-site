export interface SanityImage {
  _type: 'image';
  asset: {
    _type: 'reference';
    _ref: string;
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityVideo {
  _key: string;
  title: string;
  url: string;
}
