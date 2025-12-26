import { ArchiveItem } from '../archive/types';
import { Status } from '../archive/types';

export interface AchievementState {
  items: ArchiveItem[];
  status: Status;
  error: string | null | undefined;
}
