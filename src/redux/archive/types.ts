import { PortableTextBlock } from '@portabletext/types';
import { SanityImage } from '../types';

export interface ArchiveCategory {
  title: string;
  value: string;
}

export interface ArchiveVideo {
  url: string;
}

export interface ArchiveItem {
  title: string;
  date: string;
  enddate?: string;
  description?: PortableTextBlock[];
  category: ArchiveCategory;
  images?: SanityImage[];
  videos?: ArchiveVideo[];
}

export interface ArchiveState {
  items: ArchiveItem[];
  status: string;
  error: string | null | undefined;
}
