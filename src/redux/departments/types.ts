import { PortableTextBlock } from '@portabletext/types';
import { SanitySlug } from '../types';
import { SanityImage } from '../types';

export interface DepartmentImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };

  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export interface Department {
  _type: 'department';
  _id?: string;
  slug: SanitySlug;
  title: string;
  resume?: PortableTextBlock[];
  teachersText?: PortableTextBlock[];
  teachersGallery?: SanityImage[];
  teachersList?: PortableTextBlock[];
  studentsText?: PortableTextBlock[];
  studentsGallery?: SanityImage[];
}

export interface DepartmentsState {
  all: Department[];
  current?: Department;
  loading: boolean;
  error?: string;
}
