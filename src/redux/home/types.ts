import { PortableTextBlock } from '@portabletext/types';
import { SanityImage } from '../types';
import { SanitySlug } from '../types';

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
  description: PortableTextBlock[];
  image: SanityImage;
  slug: SanitySlug;
}

export interface HomeDocument {
  _type: 'home';
  title: string;
  welcomeText: PortableTextBlock[];
  shortDescription: PortableTextBlock[];
  departments: HomeDepartment[];
  ctaSection?: CTASection;
}

export interface HomeState {
  page?: HomeDocument;
  loading: boolean;
  error?: string;
}
