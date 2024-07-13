'use client';

import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function ParallelLeft() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const item = searchParams.get('item');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    router.push(`/jks/parallel?item=${item}`);
  };

  return (
    <div>
      <ul>
        {['1', '2', '3'].map(item => (
          <li
            key={item}
            style={{ cursor: 'pointer', fontWeight: activeItem === item ? 'bold' : 'normal' }}
            onClick={() => handleItemClick(item)}
          >
            Item {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
