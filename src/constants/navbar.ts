import CodeIcon from '@/components/Shared/Icons/CodeIcon';
import DashBoardIcon from '@/components/Shared/Icons/DashBoardIcon';

import { path } from '../routes/path';

export const navConfig = [
  {
    icon: DashBoardIcon({ size: 20 }),
    label: 'Dashboard',
    path: path.root,
  },
  {
    icon: CodeIcon({ size: 20 }),
    label: 'Saved Codes',
    path: path.codeArchive,
  },
];
