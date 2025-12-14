import { PortableTextBlock } from '@portabletext/types';
import { SanityImage } from '../types';
import { SanitySlug } from '../types';

export interface AboutDyrector {
  _type: 'object';
  info: PortableTextBlock[];
  photo: SanityImage;
}

export interface AboutTeacher {
  _type: 'object';
  name: string;
  position: string;
  bio: PortableTextBlock[];
  photo: SanityImage;
}

export interface AboutTeacherSection {
  _type: 'object';
  statsText: PortableTextBlock[];
  teachers: AboutTeacher[];
  teachersGallery: SanityImage[];
}

export interface GallerySectionItem {
  image: SanityImage;
  title: string;
}

export interface AboutSchollSection {
  _type: 'object';
  title: string;
  slug: SanitySlug;
  content: PortableTextBlock[];
  gallery?: GallerySectionItem[];
}

export interface AboutDocument {
  _type: 'about';
  title: string;
  schoolInfo: PortableTextBlock[];
  director: AboutDyrector;
  teachersSection: AboutTeacherSection;
  goals: PortableTextBlock[];
  tasks: PortableTextBlock[];
  development: PortableTextBlock[];
  sections: AboutSchollSection[];
}

export interface AboutState {
  page?: AboutDocument;
  loading: boolean;
  error?: string;
}
