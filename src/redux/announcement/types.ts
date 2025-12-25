import { ArchiveItem } from '../archive/types';
import { Status } from '../archive/types';

export interface AnnouncementState {
  items: ArchiveItem[];
  status: Status;
  error: string | null | undefined;
}
