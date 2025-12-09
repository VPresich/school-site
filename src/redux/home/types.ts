import { PortableTextBlock } from '@portabletext/types';

export type PortableText = PortableTextBlock[];

export interface SanityImage {
  _type: 'image';
  asset: {
    _type: 'reference';
    _ref: string;
  };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface CTAButton {
  _type: 'object';
  label: string;
  slug: SanitySlug;
}

export interface CTASection {
  _type: 'object';
  heading: string;
  subheading: string;
  buttons: CTAButton[];
}

export interface HomeDepartment {
  _type: 'object';
  name: string;
  description: PortableText;
  image: SanityImage;
  slug: SanitySlug;
}

export interface HomeDocument {
  _type: 'home';
  title: string;
  welcomeText: PortableText;
  shortDescription: PortableText;
  departments: HomeDepartment[];
  ctaSection?: CTASection;
}

export interface HomeState {
  page?: HomeDocument;
  loading: boolean;
  error?: string;
}
