import { PortableTextBlock } from '@portabletext/types';
import { SanityImage } from '../types';

export interface ArchiveCategory {
  title: string;
  value: string;
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface ArchiveVideo {
  url: string;
}

export interface ArchiveItem {
  _id: string;
  title: string;
  date: string;
  enddate?: string;
  description?: PortableTextBlock[];
  category: string;
  images?: SanityImage[];
  videos?: ArchiveVideo[];
  diplomas?: SanityImage[];
  poster?: SanityImage;
}

export interface ArchiveItemUI extends Omit<ArchiveItem, 'category'> {
  category: ArchiveCategory;
}

export interface FetchArchivePageArgs {
  page: number;
  limit: number;
}

export interface FetchArchivePageResponse {
  items: ArchiveItem[];
  total: number;
  page?: number;
  totalPages?: number;
}

export interface ArchiveState {
  items: ArchiveItem[];
  status: Status;
  error: string | null | undefined;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  currentItem: ArchiveItem | null;
}

export interface FetchArchiveFilteredArgs {
  page: number;
  limit: number;
  startDate: string | null;
  endDate: string | null;
  categories: string[];
}
