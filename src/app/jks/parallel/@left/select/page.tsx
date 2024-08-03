'use client';

import { useRouter } from 'next/navigation';

export default function SelectPage() {
  const router = useRouter();

  const handleItemClick = (item: string) => {
    router.push(`/jks/parallel?item=${item}`);
  };

  return (
    <div>
      <h2>Select an Item</h2>
      <ul>
        {['1', '2', '3'].map(item => (
          <li
            key={item}
            style={{ cursor: 'pointer' }}
            onClick={() => handleItemClick(item)}
          >
            Item {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
