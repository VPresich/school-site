export interface ArchiveCategory {
  title: string;
  value: string;
}

export interface ArchiveImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface ArchiveVideo {
  url: string;
}

export interface ArchiveItem {
  title: string;
  date: string;
  enddate?: string;
  description?: string;
  category: ArchiveCategory;
  images?: ArchiveImage[];
  videos?: ArchiveVideo[];
}

export interface ArchiveState {
  items: ArchiveItem[];
  status: string;
  error: string | null | undefined;
}
