import { PortableTextBlock } from '@portabletext/types';
import { SanityImage } from '../types';

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

export interface AboutDocument {
  _type: 'about';
  title: string;
  schoolInfo: PortableTextBlock[];
  director: AboutDyrector;
  teachersSection: AboutTeacherSection;
  goals: PortableTextBlock[];
  tasks: PortableTextBlock[];
  development: PortableTextBlock[];
}

export interface AboutState {
  page?: AboutDocument;
  loading: boolean;
  error?: string;
}
