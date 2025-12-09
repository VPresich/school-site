import { PortableTextBlock } from '@portabletext/types';

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
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
  resume?: PortableTextBlock[];
  teachersText?: PortableTextBlock[];
  teachersGallery?: DepartmentImage[];
  teachersList?: PortableTextBlock[];
  studentsText?: PortableTextBlock[];
  studentsGallery?: DepartmentImage[];
}

export interface DepartmentsState {
  all: Department[];
  current?: Department;
  loading: boolean;
  error?: string;
}
