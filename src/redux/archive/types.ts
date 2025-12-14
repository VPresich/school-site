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
  title: string;
  date: string;
  enddate?: string;
  description?: PortableTextBlock[];
  category: string;
  images?: SanityImage[];
  videos?: ArchiveVideo[];
}

export interface ArchiveItemUI {
  title: string;
  date: string;
  enddate?: string;
  description?: PortableTextBlock[];
  category: ArchiveCategory;
  images?: SanityImage[];
  videos?: ArchiveVideo[];
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
}

export interface FetchArchiveFilteredArgs {
  page: number;
  limit: number;
  startDate: string | null;
  endDate: string | null;
  categories: string[];
}
