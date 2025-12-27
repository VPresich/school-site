import { PortableTextBlock } from '@portabletext/types';
import { SanityImage } from '../types';

export interface BannerItem {
  _id: string;
  _type: 'banner';
  title: string;
  text?: PortableTextBlock[];
  image?: SanityImage;
  link?: string;
  activeFrom: string;
  activeTo: string;
  priority?: number;
  isActive?: boolean;
}

export interface BannerState {
  items: BannerItem[];
  loading: boolean;
  error?: string;
}
