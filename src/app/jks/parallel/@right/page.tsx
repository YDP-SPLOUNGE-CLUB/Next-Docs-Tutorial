'use client';

import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

export default function ParallelRightPage() {
  const searchParams = useSearchParams();
  const item = searchParams.get('item');
  const [content, setContent] = useState<string | null>(null);

  const data: any = {
    '1': 'Content for item 1',
    '2': 'Content for item 2',
    '3': 'Content for item 3',
  };

  useEffect(() => {
    if (item && data[item]) {
      setContent(data[item]);
    }
  }, [item]);

  return (
    <div>
      {content ? <p>{content}</p> : <p>Select an item from the left slot.</p>}
    </div>
  );
}
