import { Requirement } from '@/types/requirement';

import CodeArchiveItem from './CodeArchiveItem';

interface CodeArchiveListProps {
  requireList: Requirement[];
}

export default function CodeArchiveList({ requireList }: CodeArchiveListProps) {
  return (
    <ul>
      {requireList.map((requirement) => (
        <CodeArchiveItem key={requirement.id} requirement={requirement} />
      ))}
    </ul>
  );
}
